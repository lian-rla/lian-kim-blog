---
title: "2025/12/1 (월)"
date: "2025-12-01"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image.png?w=800)

금일 추출 된 DLC label data를 사용하여 task structure를 인지하고 있는 behavior를 추출하는 알고리즘 개발을 진행했다. 알고리즘 개발 진행에 앞서 label data 활용 구간에서 찾게 된 결론을 먼저 설명하고 넘어가도록 하겠다.

1.정면 영상 사용
측면에서 촬영한 영상과 timestamp가 출력 된 센서 화면 영상의 길이가 약 12초가 차이나는 것을 확인했다. ffmpeg을 사용하여 frame rate를 30fps로 인코딩 되게 설정하여 영상을 출력하였지만, 12초가 차이났다. 그리하여 측면 영상을 사용하는 것 보다는 정면에서 촬영한 영상을 DLC label data 영상으로 사용하는 것으로 방향성을 수정했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-1.png?w=800)

위 사진처럼 왼발과 오른발 각각 1개씩 labeling을 진행하였고, DLC를 학습시켜 영상의 label 위치 data를 구할 수 있었다. 추가로 출력에 사용된 영상은 cheetah event log의 timestamp와 easyOCR log의 timestamp를 비교하여 오차범위 ms 이내의 timestamp를 시작과 끝을 맞추어 영상을 자른 후 DLC를 사용하였다. 

2. 
DLC에서 출력 된 label data를 가지고 task structure를 인지하고 있는 behavior를 추출 할 수 있는 알고리즘 개발을 진행했다. 먼저 label의 좌표를 가지고 쥐가 달리고 있는지 멈춰 있는지 판단 할 수 있는 기준과 근거가 필요했다. 

2-1. DLC label의 jitter를 활용
DLC에서 출력 된 label은 아무리 가만히 있어도 1~2px의 차이를 꾸준하게 나타내는 특징이 존재했다. 이러한 이유로 쥐가 가만히 있다고 해서 label이 가만히 있는 것이 아니었다. 반대로 생각해 본다면 1~2px 정도의 차이를 나태는 구간은 쥐가 멈춰있는 것이고 1~2px 이상의 차이를 나태는 구간은 쥐가 달리고 있다는 것으로 해석할 수 있었다. 그리하여, jitter보다 큰 pixel의 차이는 쥐가 움직인 것이고, jitter보다 적은 pixel의 차이는 쥐가 멈춘 것으로 기준을 잡고 진행했다. 

2-2. 왼발 오른발의 중앙 좌표 사용
left leg와 right leg의 좌표의 displacement가 1~2px사이의 차이를 동시에 나타낼 때 쥐가 멈춰있는 것으로 개발을 진행했으나, left leg와 right leg label의 frame 차이와 pixel의 차이를 맞추는데 한계가 존재했다. 그리하여 쥐의 locomotion을 label data로 사용한 선행연구를 찾아보았다. 
(RpiBeh offers a versatile open source solution for rodent behavior tracking and closed loop intervention,Yigi sun,2025) 의 paper에 따르면 open arrear 환경에서 mouse의 neck, leg, tail 등을 labeling 하여 각 label들의 중앙값으로 mouse의 locomotion을 판단했다. 중앙값으로 locomotion을 판단한 이유는 중앙값이 움직이면 다른 label또한 움직인 것이며, 각 label의 jitter를 평균을 내서 사용하기 때문에 jitter의 범위가 줄어든다는 이점이 존재했다. 그리하여 left leg와 right leg의 중앙값을 쥐의 locomotion을 판단하는 data로 사용하기로 결정했다.

dist=√(x−x′)2+(y−y′)2dist=√(x-x')^2 + (y-y')^2

2-3 이동평균
중앙 좌표의 각 frame 차이를 나타낸 결과 locomotion의 결과가 너무 빠르게 변화하는 결과를 알게 되었다. 그리하여 이동평균을 사용하여 smoothing을 진행해 주었다. 3frame으로 나눠 smoothing을 진행해 주었다. 

dist[0]dist[0]
dist[0],[1]dist[0],[1]
dist([0],[1],[2])/3dist([0],[1],[2])/3
dist([1],[2],[3])/3dist([1],[2],[3])/3
dist([2],[3],[4])/3dist([2],[3],[4])/3
.....

2-4 정지 상태 유지 시간
이동평균을 나타낸 dist의 값이 몇 frame동안 1~2px의 차이를 유지해야 stop으로 볼 지 기준이 애매했다. 그리하여 2.5, 3.0, 3.5(1~2px의 차이를 유지할 시간) 3개의 변수를 직접 입력해보고 비교해 보았다. 비교해본 결과 큰 차이는 나타나지 않았지만, 변수의 시간이 줄어들 수록 쥐가 잠깐 동안 멈추는 behavior를 측정하는 것은 확인할 수 있었다. 그리하여 3개의 변수 중 가장 낮은 2.5를 사용하였다. 2.5는 약 7~8 frame으로 7~8 frame 동안 1~2 px의 차이를 유지하고 있어야 쥐의 locomotion을 stop으로 인정하는 조건을 정했다. 

위 4가지의 조건을 가지고 task structure를 인식하고 있는 behavior를 추출하는 알고리즘 개발을 진행했다. 

3. 결과

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-2.png?w=800)

출력 된 dist를 4가지 조건을 기준으로 구하였고, DLC Label CSV file에 STOP 한 구간은 0으로 RUN한 구간은 1로 출력되는 stop_run 행을 만들어 추가하였고 따로 저장하도록 만들었다. 
그렇다면 필자가 설정한 dist의 4가지 조건과 DLC Label CSV file에 출력되는 0,1이 알맞은 구간에 출력이 되는지 확인하는 절차가 필요햐다고 판단했다. 

먼저 원본 영상과 stop_run 행이 존재하는 DLC Label CSV file을 동시에 받아 영상에 run과 stop이 출력 되도록 만들었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-3.png?w=800)

1이 출력되는 run 구간은 영상을 초록색 테두리로 표현되며, 왼쪽 상단에 RUN이라고 표시된다. 0이 출력되는 stop 구간은 영상이 전체적으로 빨간색으로 변하고, 왼쪽 상단에 STOP이라고 표시된다. 이 알고리즘을 토대로 RUN과 STOP이 stop_run 행의 data에 맞는 behavior를 나태내는지 직관적으로 확인하는 절차를 진행했다. 
확인 결과 쥐가 멈추는 구간에는 영상을 빨간색으로 출력이 진행되었고, 찰나의 순간임에도 불구하고 run에서 stop으로 바뀌는 구간도 잘 따라가는 결과를 보여주었다. 위 dist의 결과가 나쁘지 않는 결과를 보여주는 것으로 확인이 되었으니, unreal log의  ITI 구간의 frame과 비교분석을 진행하면 task structure를 인식하는 behavior를 나태낼 수 있을 것이라 판단했다. 

4. 문제점

unreal log의 data 개수와 DLC Label CSV file의 data 개수가 15 frame의 차이를 나타내는 것을 확인했다. DLC Label CSV file의 개수가 15개가 부족한 것이다. 15frame 정도 차이가 나는 것은 약 0.49초의 차이를 나타내는 것으로 해석할 수 있다. 이러한 차이가 나타나는 이유는 unreal log의 인코딩 시점과 영상을 easyOCR timestamp 기준으로 영상을 자른 시점이 똑같을 수 없기 때문이다. 아무리 비슷한 시점을 자른다고 하여도 unreal log 인코딩 시작점과 실험 영상의 녹화의 시작점이 다르기 때문에 발생하는 문제점이다. 
15frame의 문제를 해결하기 위해서 0,1이라는 digital data 보다는 dist를 analogue data로 변환하여 수치화 한 data로 나타내는 것 밖에는 해결책이 떠오르지 않는다. unreal log와 DLC Label CSV file의 data를 align 시키는 방법에 대해 더 구체적으로 생각해보아야 할 것 같다.
