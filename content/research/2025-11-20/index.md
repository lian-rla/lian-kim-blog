---
title: "2025/11/20 (목)"
date: "2025-11-20"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-34.png?w=800)

금일 DLC를 사용하여 영상에서 label 좌표를 csv file로 얻어 label data 활용 계획을 설계하는 작업을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-35.png?w=800)

먼저 저번 labeling과 다르게 label의 개수를 줄여 양쪽 다리 끝 부분에 1개씩 labeling을 진행했다. label을 1개로 줄인 이유는 쥐의 속도만 구할 것이기 때문에, 쥐의 다리 구조를 정확하게 label할 필요가 없다고 판단했기 때문이다. 추가로 label의 개수가 많으면 DLC 학습 시간도 길어지기 때문에 최소한의 label만 사용하여 학습을 진행하는 것이 시간적으로도 이득이 되기 때문이다.

추가로 영상과 unreal log의 데이터를 동일한 위치에 두어 사용하기 위해서는 영상의 timestamp와 unreal log의 timestamp를 맞추어 주어야 한다. 맞추어 주지 않는다면, unreal log 기준으로 각 trial ITI 화면으로 넘어가기 전과 후 구간의 DLC label 좌표를 비교하지 못하기 때문에 필요한 작업이다. 
위 영상은 timestamp 추출 알고리즘 test 영상과는 다르게 digitalynx에서 보내주는 timestamp가 측면 영상에 출력되지 않고 다른 화면에 출력되어 보여진다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-36.png?w=800)

그러기 때문에 CAM 6에 찍히는 timestamp를 기준으로 측면에서 촬영한 영상(CAM 2)를 동기화 시켜준 후 cheetah log의 timestamp와 비교, 그리고 unreal log와 비교하여 맞추어 주어야 한다. 

rat 1008로 실험한 영상을 가지고 여러 DLC data 좌표를 얻은 뒤 다음주부터 DLC data의 label 좌표 데이터를 가지고 task structure를 인식하고 있는 행동을 분류해볼 예정이다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-37.png?w=800)

다음주 진행할 과정을 설명하자면,

1. timestamp 추출 및 측면 영상과 동기화
전 project에서 test 했던 timestamp 추출 알고리즘은 측면 영상에 timestamp가 함께 찍혀 다른 영상과               동기화 하지 않아도 쥐의 행동을 볼 수 있었다. 하지만 현재 사용할 test 영상은 다른 CAM에 timestamp가 녹화되어 있기 때문에 timestamp가 녹화된 영상을 기준으로 다른 영상들과 동기화 작업을 진행해 주어야 한다. 영상의 녹화 시점이 똑같기 때문에 timestamp만 추출 후 재생시점을 맞추어 주면 동기화가 쉽게 될 것이라 판단된다.

2. cheetah event log, unreal log 동기화
추출된 timestamp와 다른 영상들의 동기화를 맞추었다면, cheetah event log에 출력된 timestamp를 기준으로 unreal log 또한 동기화를 진행해줄 예정이다.  전 project에서 진행해 보았기 때문에 빠른 시간 내 끝날 것으로 예상한다.

3. DLC label data 동기화
unreal log와 동기화가 되었다면, DLC label data와 동기화를 진행해 줄 예정이다. DLC label data는 실험자가 영상 녹화 시작을 기점으로 data가 뽑히고, cheetah log와 unreal log는 영상 녹화 시작과는 recording 시점이 다르기 때문에 초반 DLC label data 시작 시점과 cheetah event log의 시작 시점을 맞추어 주어야 label의 data를 unreal log와 동기화하여 비교분석 할 수 있다. 

DLC label data를 보기 전에는 쥐의 달리는 속도를 수치화하여 표현하는 것으로 생각했다. label의  x축 y축 좌표가 나오기 때문에 좌표의 이동거리를 frame 단위별로 계산하여 나눈다면, 속도를 충분히 계산할 수 있을 것이라고 판단했기 때문이다. 하지만 DLC  label data의 좌표를 분석 후 방향성을 수정했다.

쥐의 속도를 수치화하여 표현하는 것 보다는, ITI 화면이 각 trial에서 나오기 전과 후의 구간에서 label 좌표의 변화를 통해 어느정도 변화하지 않는다면, stop으로 보고 stop 후 좌표가 급격하게 변화하는 지점을 start로 판단하여 stop과 start 지점을 사용자에게 보여주는 형태가 더 적합하다고 판단했다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-38.png?w=800)

visualization된 data를 그려본다면, 위 그림처럼 나타내면 좋을 것 같다고 판단했다. x축은 unreal log 상 ITI_epoch 데이터가 true인 data에서 앞 뒤 +- a data로 나타내고 빨간색 ITI 구간은  ITI_epoch 데이터가 true인 data를 표현한 것이다. (ITI화면인 순간) y축은 각 trial을 나타내고 초록색 원은 쥐가 trial에서 stop한 구간 파란색 원은 쥐가 start 한 구간을 나타낸다. 각 구간은 DLC label data 좌표의 변화(현재로 봤을때 stop 한 구간은 일의자리의 뒷 자리를 제외한 앞자리 숫자는 거의 동일, start는 좌표가 일정하다 급격하게 변화하는 구간)를 통해 설정하고 나타내볼 예정이다.
