---
title: "2025/12/15 (월)"
date: "2025-12-15"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-18.png?w=800)

금일 task structure를 인식하는 behavior를 출력하는 알고리즘 사용 방법을 처음부터 끝까지 설명하고 다른 rat의 데이터를 사용하여 검증해보는 시간을 가졌다. 

알고리즘은 총 6단계를 거쳐 데이터를 얻을 수 있다. (추후에 언급할 한계들을 극복하기 위해 단계들이 많다.)

1.easyOCR timestamp 출력

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-19.png?w=800)

먼저 CAM 6에 존재하는 timestamp를 easyOCR을 사용하여 csv file 형태로 출력을 진행했다. rat 1008의 영상은 timestamp가 CAM 6에 따로 존재했기 때문에 CAM 6의 영상의 timestamp를 기준으로 맞춰주어야 한다.

2.timestamp를 cheetah event log와 비교 후 cut 구간 설정

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-20.png?w=800)

cheetah event log의 timestamp가 처음으로 시작되는 숫자와 가장 비슷한 timestamp를 easyOCR csv file에서 찾아 몇 번째 frame에서 시작되는지 확인해 주었다. rat1008의 데이터로 예시를 들자면, cheetah event log에서 timestamp가 시작되는 구간이 가장 비슷한 frame은 1055이다. 마찬가지로 timestamp가 끝나는 구간도 비슷한 timestamp를 찾아 frame을 확인해준다. 

3. frame 차이를 계산하여 DLC input 영상 제작

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-21.png?w=800)

CAM 6과 CAM 4에서 촬영한 영상의 길이가 달랐다. 동시간에 촬영한 영상이지만 VR setup의 설정오류로 녹화된 영상의 길이가 다 다르게 촬영된 것이다. timestamp를 출력한 CAM 6이 정면에서 촬영한 영상인 CAM 4에 비해 2초가 느린 것을 확인했다. 프레임 레이트가 30fps 이기 때문에 2초는 약 100frame 정도 차이가 나는 것이다. 그리하여 CAM 6의 원본영상을 기준으로 timestamp recording의 시작과 끝에 100frame을 더한 구간을 CAM 4의 영상에 넣어 DLC input 영상으로 만들어 주었다.
(영상을 자른 이유는 추후 출력되는 DLC label data와 unreal log의 recording 시점을 맞춰 data 개수를 맞춰주기 위해서 이다.)

4. DLC에 timestamp + 100 frame을 기준으로 자른 영상을 넣어 label data 출력

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-22.png?w=800)

DLC에는 왼쪽 다리 오른쪽 다리 각각 1개의 labeling을 진행하여 각 다리의 좌표를 얻었다. 

5. DLC label data를 통해 쥐의 run, stop 구간 판별

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-23.png?w=800)

출력된 DLC label data에서 label 좌표를 사용하여  왼쪽 다리 label과 오른쪽 다리 label의 평균 중앙 좌표를 계산하고, 중앙 좌표가 jitter 이하의 움직임을 보이면 0 = stop jitter 초과의 움직임을 보이면 1 = run을 출력하도록 하는 알고리즘에 넣어 CSV file을 출력한다. 이때 0,1인 데이터 뿐만 아니라 중앙 좌표의 수치화 된 데이터(dist_smooth)를 출력하여 수치화 된 데이터도 볼 수 있도록 설계했다. 

6. stop_run csv file과 unreal log 비교 후 trial 시작과 끝 설정 
문제가 된 구간이다. 3번 구간에서 최대한 비슷한 구간을 설정하여 영상을 잘라 사용했지만 unreal log와 stop_run 과 비교했을 때 15frame 정도 차이가 나는 것을 확인했다. 위 내용은 한계에서 더 설명하도록 하겠다. 

15frame을 보정하기 위해서 DLC label data에 시간축을 설정하여 unreal log의 data에 가장 유사한 시간대를 연결시켜주는 방식으로 보정을 진행했다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-24.png?w=800)

먼저 stop_run의 csv file에서 각 frame의 시간을 계산하여 meta time이라는 시간축을 만들고 unreal log에 존재하는 time과 가장 유사한 시간대를 연결시켜 현재 trial과 누적 trial을 연결시켜 주었다. 위 사진을 보면 시간축을 생성하여 unreal log의 time과 연결시켜주면 약 14개의 frame이 시작구간에서 비어있는 것을 확인할 수 있다. 

**한계점**
위 알고리즘의 한계점은 명확하다. 각 CAM마다 영상의 길이가 다르며, 영상의 길이가 다르기 때문에 frame의 길이 또한 다르다. 이 문제점은 task structure를 인식하고 있는 행동을 출력할 때 처럼 찰나의 순간의 unreal log의 센서 data를 출력하기에는 큰 어려움이 존재한다. 실험자가 frame을 보정한다고 해도 한계가 명확하기 때문이다. 실제로 현재 진행한 알고리즘을 사용하면, 실제 trial 시작 지점과 끝 지점이 맞지 않는다. 제대로 된 영상 판독을 하기 위해서는 VR setup을 손 봐야 할 것이라고 생각된다. 여러 각도에서 촬영한 영상의 길이 정도는 맞추어야  한개의 영상 frame을 기준으로 여러 영상들을 판독에 사용할 수 있기 때문이다. 

시간이 된다면, 수민선배님의 영상 데이터가 아닌 다른 분들의 vr setup의 영상을 받아 영상의 길이가 맞는지 확인 후 위 알고리즘 test를 진행해 보는 방향성을 가지려 한다.
