---
title: "2025/12/8 (월)"
date: "2025-12-08"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-11.png?w=800)

금일 smooth 된 dist를 기준으로 stop과 run을 구별한 data와 unreal log의 현재 trial과 누적 trial을 연결하여 각각 stop과 run 구간에서 몇 번째 trial이 진행 중 인지를 나타내는 시도를 진행했다. 

먼저 저번에 작성했던 것처럼 unreal log data와 DLC label data의 data 차이는 15개로 DLC label data가 unreal log data에 비해 15개가 적은 것을 확인했다. 이러한 결과가 나타나는 이유는 unreal log를 recording 하는 시점과 실험 영상을 recording 시점이 다르기 때문이다. 또한 timestamp를 기준으로 비슷한 구간을 실험자가 잘라 DLC에 넣어 사용했음에도 불구하고 15frame = 0.49s 정도의 차이가 나타났다.   

15frame 정도의 차이를 맞춰주는 작업이 필요로 하다고 판단하여 unreal log와 dlc label data 간 data 차이를 커버해주는 알고리즘이 필요했다. 

먼저 DLC label data에는 시간 정보가 없다. 그리하여 행 순서를 unreal log의 행 순서와 맞춰 진행하려니 15frame의 차이가 나타나는 것이라고 판단했다.
unreal log에는 실제 실험 시간이 첫 번째 열에 측정되어 출력된다. 그렇다면 dlc label data에 시간축을 만들어주고 차이를 계산 후 차이에 맞게 연결해준다면 알고리즘으로 해결할 수 있을 것이라고 생각했다. 

dlc label data에 시간축을 만들어 주기 위해 

```
dist_time = VIDEO_START_FROM_SENSOR + (frames + FRAME_OFFSET) / fps
```

위 공식을 통해 시간축을 설계해 주었다.
VIDEO_START_FROM_SENSOR 는 unreal log에서 recording이 처음 시작된 시점(S열이 처음으로 TRUE인 지점)의 시간이다. 
frames은 DLC label data에서의 frame 순서를 의미하며 FRAME_OFFSET은 unreal log와 DLC label data의 frame 차이를 입력한다. fps는 원본 영상의 fps를 입력하면 된다.

예를 들어 unreal log에서 첫 번째 recording 된 시점의 time이 35.100이라 가정한다면, 
34.600s = 35.100 + (0 - 15) / 30  로 DLC label data의 첫 번째 frame의 시간 축 data를 나타낼 수 있다. 

위 공식을 사용하여 unreal log의 첫 번째 행의 time을 받고 DLC lable data에 시간축을 추가한 뒤 time을 기준으로 연결시켜 각 구간의 trial을 DLC label data에 추가시켰다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-12.png?w=800)

알고리즘을 통해 출력된 csv file을 보게 되면, ①은 dist time 즉 위 공식을 사용하여 출력된 DLC labe data의 time 이다. ②는 dist time과 연결된 unreal log 에서 time을 나타내며 ③은 현재 trial ④는 누적 trial을 의미한다. ③,④ 모두 unreal log에서 time을 통해 연결된 trial이다. 

위 csv file을 통해 연결된 trial이 어느정도의 정확도를 가지는지 확인해보는 작업을 거쳤다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-13.png?w=800)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-16.png?w=800)

출력 된 CSV file을 기준으로 csv file의 trial 과 stop, run을 영상에 넣어 왼쪽 상단에 출력 되도록 만들었다. 또한 쥐를 정면에서 촬영한 영상만 가지고는 trial의 횟수를 정확히 알기 어려워 쥐의 후면에서 촬영한 영상을 통해 모니터 화면의 정보를 얻어가며 비교 했다. 

결과를 말하면 영상보다 trial이 느리게 변화하는 문제를 확인했다. 15frame이 차이나기 때문에 FRAME_OFFSET을 넣어 보정을 진행했지만, trial이 느리게 변화했다. 아직까지 csv file에서 15frame의 보정이 정확하게 되지 않았다는 것으로 해석된다. 또한 후면에서 촬영한 영상과 비교했을 때 동일한 frame에서 시작 후 비교하지 못 했다. DLC에 사용한 영상과 후면에서 촬영한 영상의 길이가 달라 분석에 어려움이 존재했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-17.png?w=800)

하지만 stop과 run을 출력하는 부분은 저번 영상과 똑같이 높은 정답률을 보여주었다. 당장 생각나는 해결법은 후면에서 촬영한 영상에서 모니터에 출력되는 trial 정보를 easyOCR을 사용하여 문자를 출력하고 출력 된 trial을 기준으로 DLC label data를 각 trial 별로 나눠보는 방향성을 생각하고 있다.
