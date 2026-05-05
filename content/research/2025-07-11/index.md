---
title: "2025/7/11(금)"
date: "2025-07-11"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-09-ec98a4ed9b84-7.37.00.png?w=1024)

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 454g(-4g) Pellet/Water : 20g, Experiment time : 10:50 ~ 11:25
Stage : Handling(Towel handlin & Grabbing) - DAY 5

49번은 금일 프룻룹 2개와 suger water 10mL를 먹었다. handling 전 7분 정도의 적응 시간을 주었다. 5분 30초에 처음으로 얼굴을 그루밍했다. 10분부터 본격적으로 grabbing을 진행했다. 49번은 grabbing을 한 손으로 해도 저항이 심하지 않았고, 정말 온순하게 있었다. grabbing을 약 7초 정도 진행해도 저항을 하지 않을 정도의 온순한 성격을 가지고 있다. 수빈 선배님 말씀으로는 순한 성격을 가지고 있는 쥐들에게는 한 번 겁을 주면 다시는 하지 않을 수도 있기 때문에 조심하라고 하셨다. 25분에는 그루밍을 몸 전체적으로 했다. 35분에는 똥을 4개를 쌌으며, 금일 pellet은 20g을 주었다. 주말동안 토요일은 15g 일요일은 10g을 주어 월요일에는 체중을 또 만들어 실험에 들어가기 위해 점진적으로 pellet양을 줄였다.

# Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 434g(-6g), Pellet/Water : 20g, Experiment time : 11:30 ~ 12:00
Stage : Handling(Towel handling & Grabbing) - DAY 5

50번은 금일 프룻릅 2.5개와 suger water 10mL를 먹었다. 마찬가지로 hadling 전 7분 정도의 적응 시간을 주었다. handling 시작 후 9분에 똥 4개를 쌌다. grabbing을 진행하면서 50번은 저항이 정말 거셌다. 한 손으로 들어올려 몸에 가져다 두어도 저항이 정말 심했다. 그리하여 14분 30초 부터는 두손으로 잡아 몸에 가져다 두는 grabbing으로 방식을 바꾸었다. 23분에 똥을 4개를 쌌으며, 24분에는 몸 전체적으로 그루밍을 했다. 25분이후 grabbing부터는 저항이 거의 사라졌다. 50번은 금일 pellet을 20g을 주었다. 토요일은 15g 일요일은 10g을 줄 예정이며, 월요일부터는 cart training을 진행하기 위해 pellet양을 주말동안 점차 줄여 몸무게를 만들 계획이다.

**2. DLC project**

금일 어제 maximum iterationd을 100,000주고 batch_size는 1로 설정해준, test data가 출력되었다. labeling된 mp4 영상으로 선배님과 data 값에 대해 분석했다.

**Method**

먼저 test1은 6개의 labeling을 진행 후 학습시켰다.

1. Rat nose

2. hyper drive west

3. hyper drive east

4. hyper drive north

5. hyper drive south

6. hyper drive middle

위 6가지의 labeling을 진행했다. 나머지 모든 data는 기본 세팅으로 시작 후 학습을 진행했다.

**Result**

학습에는 총 4시간 정도가 소요되었다. 그 후 이루어진 csv data print와 labeling mp4 영상 추출은 각각 30분정도 소요되었다. 

mp4 결과물 영상을 보면, 
1번째 labeling인 Rat nose는 상당히 좋은 컨디션을 보여주었다. 쥐가 양 옆으로 고개를 흔들어도 nose labeling이 놓치지 않고 따라가는 결과물을 보여주었다.

2,3 번째 hyper drive west, east의 labeling은 쥐의 행동을 완벽하게 따라가지 못 했다. 쥐가 고개를 틀어버리면 labeling이 완전히 소실되는 결과 또한 보여주었다.  추가로 실험자가 검은색 띄 부분을 labeling하여 학습을 진행하였는데, 검은색 띄 부분의 경계를 잘 따라가 주지 못하는 결과를 보여주었다.

4번째 hyper drive north의 labeling은 labeling이 소실된 결과를 많이 보여주었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/90000.png?w=1024)

위 사진을 보게 되면 카메라 각도 상 hyper drive의 connect line이 hyper drive의 뒷 부분을 가려 labeling이 재대로 되지 않은 결과를 볼 수 있다. 이 뿐만 아니라 north의 labeling이 갑자기 튀는 결과도 많이 보여주었다.

5번째 hyper drive의 south는 비교적 안정적인 결과값을 보여주었다. 실험자가 labeling을 진행할 때 hyper drive에 적혀있는 숫자 17위에 labeling을 진행하여 비교적 비슷한 부분에 labeling이 이루어졌고, 카메라 각도 상 크게 움직임이 없는 부분인 것 같아 결과값이 잘 나온 것 같다.

6번째 hyper drive의 middle이다. middle이 가장 큰 문제이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/222222.png?w=1024)

위 사진을 보면 2초정도 차이나는 영상이다. labeling이 모두 잘 되어있지만 hyper drive middle의 labeling을 보게되면 위치가 다르다. 25분 31초는 middle의 labeling이 EIB 중앙에 위치해 있지만 25분 33초에서는 labeling이 hyper drive line connection 부분에 찍혀 있는 걸 볼 수 있다. 2초밖에 차이가 나지 않지만, middle의 labeling이 순간이동한 것이다. 지금은 test 영상이라 괜찮지만, 나중에 실험 data를 뽑게 된다면 data의 변동이 갑자기 크게 튀는 jitter로 data가 찍힐 것이 분명하다. 

그리하여 선배님과 상의 후 labeling의 위치와 data 값을 조절하기로 하였다.

**solution**

먼저 기본적인 값(iteration 등)은 계속 사용하기로 하였다. 여기서 더 고쳐버린다면 어떠한 data가 결과값에 지장을 주었는지 알아내기 어렵기 때문이다. DLC 학습 특징을 파악해 본다면, labeling 찍을 때 특징이 확실해야 한다.(nose labeling을 보고 알 수 있다.)  그리하여 hyper drive의 labeling 위치를 조정했다. west와 east는 검은색 띄 부분이 아닌, 숫자 8과 17위에 찍기로 하였다. 추가적으로 middle의 위치도 조절하기로 했다. 카메라 각도 상 쥐가 고개를 돌릴 때마다 중심의 위치가 달라지기 때문에 특징이 확실한 EIB 앞 부분에 middle labeling을 진행하기로 하였다. EIB 앞 부분은 고개를 돌려도 어느 각도에서 잘 보이기 때문이다. 추가로 north labeling은 똑같이 17에 labeling하기로 하였다. 

마지막으로 batch_size를 16으로 올렸다. GPU 2개를 모두 사용하기 위해서는 batch_size를 16으로 잡아야 하기 때문에 learning에 걸리는 시간을 test 하여 batch_size를 1로 잡았을 때와 16으로 잡았을 때의 속도를 확인해 보려고 한다.
