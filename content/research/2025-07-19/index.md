---
title: "2025/7/18(금)"
date: "2025-07-19"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-12.png?w=1024)

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 446g(+1g) Pellet/Water : 20/15/10g Experiment time : 11:10 ~ 11:40
Stage : Familiarization - DAY 2

금일 familiarization은 T-maze 갈림길에서만 suger water를 흩뿌려 주었다. 실험에 들어갔을 때, reward가 나오는 장소가 T-maze 상단이기 때문에, reward가 나오는 곳을 인식시키기 위한 조치이다. 어제와 마찬가지로 10분 towel handling 진행 후 T-maze에 올려주었다. 먼저 towel에서 실험 시작 3분 50초에 그루밍을 하였고, T-maze에 올라간 14분에 얼굴과 몸을 그루밍 했다. T-maze에서 23분 만에 11mL의 suger water을 먹었는데, 먹는 동안 start box에는 처음 시작하고 난뒤 한 번도 가지 않았다. 20분에 마지막으로 몸과 얼굴을 그루밍 하였다. 마지막으로 suger water을 다 먹고 공백이 생겼을 때 T-maze의 block을 넘어오려고 하여, 손으로 제재했다. 손으로 제재하는 것이 아닌 실험실에 있는 판으로 막아야 된다고 선배님께서 알려주셨다. 또한 suger water 사이의 거리가 너무 가깝게 뿌린다고 하셨다. 지정된 장소에 뿌려주고, 쥐가 먹게 되면 다시 똑같은 장소에 뿌리라고 알려주셨다. 실험이 끝난 뒤 cage를 가르키면 스스로 들어간다. 금일 49번은 푸룻룹 1개와 suger water 11mL(towel 1mL, maze 10mL)를 먹었다. 금일 pellet은 20g을 주었고, 주말인 토요일 일요일에는 각각 15g, 10g을 줄 예정이다. 저번주 주말 몸무게의 데이터를 보았을 때 20,15,10을 주었을 때 무게가 크게 변하지 않아 pellet의 양을 20,15,10으로 정했다.

# Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 430g(0g), Pellet/Water : 20/12/10g Experiment time : 11:45 ~ 12:10
Stage : Familiarization - DAY 2

50번 또한 마찬가지로 T-maze 상단부분에만 suger water를 흩뿌려 주었다. 50번을 할때는 49번에의 피드백을 받아 왼쪽 3개 오른쪽 3개 중앙1개로 지정하여 suger water를 뿌려주었다. towel handling을 10분 진행 후 T-maze에 넣어주었다. towel handling을 할때 계속 T-maze를 응시했고, T-maze와 가까운 무릎 위에서 rearing을 하는 모습을 많이 보여주었다. 아마도 suger water를 계속 찾는 모습이지 않을까 추측해본다. T-maze에 넣어주자 마자 바닥을 계속 응시하며 돌아다니는 모습을 보여주었다. 50번은 신기하게도 T-maze 상단에 뿌려준 suger water를 다 먹게 되면, start box에 들어가 그루밍을 한 후 또 다시 T-maze 상단으로 올라가 suger water를 먹고 다시 start box에 들어가 그루밍을 하는 모습을 보여주었다. 13분에 몸과 얼굴을 start box에서 그루밍 하였고, 22분에 또 몸과 얼굴을 start box에서 그루밍 하였다. 실험시작 22분만에 11mL의 suger water를 모두 먹었다. 실험이 끝나고 cage를 손가락으로 가르키니 스스로 들어가는 모습또한 보여주었다. 금일 50번은 푸룻룹 2개와 suger water 11mL(towel 1mL, maze 10mL)를 먹었다. 금일 pellet은 20g을 주었다. 주말동안은 12,10g을 줄 예정인데 저번주 주말에 20,15,10을 주었을 때 50번은 6g이 쪘기 때문에, 이번주 주말 pellet의 양은 12,10g으로 변경하여 줄 예정이다.

추가로 금일 49 ,50의 cage cleaning을 진행했다. cage cleaning 이후 새 배드 적응을 위해  바로 pellet 20을 부여했다.

2.DLC project

어제 찾은 paper를 토대로 ffmpeg을 사용하여 최적의 학습 데이터를 찾는 것을 진행했다. 먼저 원본 ffmpeg으로 확장자 변환을 진행했을 때는 23의 화질로 진행했다. 화질일 제일 낮은 값이 crf가 51이라고 하여 51을 기준으로 10씩 내리면서 테스트를 진행했다. 즉 51, 41,31로 crf 값을 주어 테스트를 진행했다. 먼저 테스트를 진행하기 전에 기준을 잡았다. 

1. 사람이 labeling 해야 하기 때문에 화질이 너무 무너지면 사용하지 못한다.

2. hyper drive의 숫자가 어느정도 보여야 한다.

3. 같은 영상 같은 시간 비교(원본 영상에서 hyperdrive가 가장 잘 보이는 시간)

쥐의 신체부위는 특징이 명확하기 때문에 화질이 떨어져도 파악이 가능하지만 hyper drive나 실험 장비들은 화질이 떨어지면 위치를 파악하기 어렵다고 판단하였고 같은 영상 같은 시간을 비교하였다. 위 기준을 세워 test를 진행했다. 먼저 crf를 조절하여 테스트를 진행했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-22.png?w=1024)

먼저 crf 31과 41이다 11분 15초를 비교해보면 31은 원본 영상인 23과 크게 차이가 없어 hyper drive의 숫자가 잘 보이는 모습이다. 41또한 마찬가지로 31과 비교했을 때 화질이 조금 좋지는 않지만 사람의 눈으로 충분히 hyper drive의 숫자를 판단할 수 있었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-23.png?w=1024)

하지만 51은 조금 달랐다. 화질이 크게 무너져 육안으로 hyper drive의 숫자를 파악하기는 힘들었다. 추가로 화질이 많이 무너져 쥐의 신체 부위도 판단하기 힘들었다. 그리하여 31 혹은 41을 사용하기로 결정했다. 

또한 paper에서 해상도를 설정하면 batch size가 향상된다는 정보를 보았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-24.png?w=1024)

저자는 같은 영상을 pixel을 줄여 test를 진행했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-26.png?w=1024)

결과는 이러하다. pixel을 줄여도 원본 영상과의 labeling 위치가 크게 차이가 나지 않고, 데이터 처리 속도는 3배정도 증가한다는 것이다. c figure는 원본 영상의 labeling과 pixel을 조절 후 labeling을 진행한 영상의 labeling 차이의 평균을 나타낸 것이다. 약 2배정도 줄이는 것 까지는 큰 차이가 발생하지 않는 것을 알 수 있었다. 그리하여 현재 1980x1080인 원본 영상의 pixel을 약 2배정도 줄여 960x540으로 줄여 테스트를 진행해 보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-27.png?w=1024)

scale을 0.5를 주어 해상도를 960x540으로 줄인 영상이다. 11분 15초를 보면 원본 영상과 크게 차이가 없이 hyper drive의 숫자를 판단할 수 있었다. 그리하여 위 crf와 scale을 한번에 사용하여 용량을 크게 줄이고자 하였다. 위 데이터에서 crf는 41이 충분이 식별 가능했기 때문에 41과 scale을 같이 사용하여 영상을 뽑아보았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-28.png?w=1024)

하지만 crf 41과 scale 0.5.를 같이 주니 화질이 많이 무너져 hyper drive의 숫자를 육안으로 보이지 않았다. 그리하여 crf를 31로 높여 scale0.5로 같이 진행했더니 육안으로 보아도 화질이 크게 무너지지 않고, hyper drive를 쉽게 판단할 수 있는 영상이었다. 

그렇다면 위 crf와 scale을 해서 무엇이 이득이고 어떠한 이점을 가지는지 알아야 했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-29.png?w=1024)

위 테스트를 진행한 영상들의 용량을 비교한 표이다. 보면 원본 영상의 용량은 847MB이다. crf 값을 줄일 수 록 용량이 크게 주는 모습을 볼 수 있고, scale을 진행하면 용량이 더 크게 준 모습을 볼 수 있다. scale과 crf를 같이 진행하게 된다면 847MB인 용량이 77.3MB까지 크게 준다. 이는 용량이 줄기 때문에 batch size를 크게 늘려 학습 시간을 단축 시킬 수 있다는 이점을 얻는다. 또한 원본 영상과 비교 했을 때 큰 차이 없이 hyper drive의 숫자를 식별 할 수 있기 때문에, 원본영상을 수집하지 않고, 용량이 작은 학습 데이터를 뽑아 수집한다면 디스크의 용량을 크게 잡아먹지 않고도 학습 데이터를 모을 수 있다. 

다음 주부터 940x540과 crf 31을 같이 사용하여 batch size를 늘려 학습을 진행 후 걸리는 소요 시간을 테스트 해보려고 한다. 만약 학습 시간이 정말 크게 준다면, 이 테스트는 정말 큰 도움이 될 것이다.
