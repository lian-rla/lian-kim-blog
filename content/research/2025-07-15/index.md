---
title: "2025/7/15(화)"
date: "2025-07-15"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-14-ec98a4ed9b84-6.25.14.png?w=1024)

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 448g(-7g) Pellet/Water : 10g, Experiment time : 13:20 ~ 14:00
Stage : Cart Handling - DAY 2

금일 49번은 10분동안 towel handling을 진행 후 cart handling을 진행했다. towel에서 suger water를 2mL를 먹었다. cart에 들어가자미자 suger water를 바닥에 뿌려주니 49번은 바로 두 방울을 찾아 먹었다. 그 후 계속 바닥에 있는 suger water을 찾아 먹었다. 6분에 처음으로 towel에서 얼굴 쪽 그루밍을 하였고, cart에서 처음으로 12분에 얼굴을 그루밍 하였다.18분에 얼굴을 그루밍 하였고, 28,30분에 얼굴과 몸 전체를 그루밍 하였다. cart에서 8mL의 suger water를 먹어 총 10mL를 모두 먹었다. 프룻릅은 1개를 먹었다. 어제 Pellet을 8g을 주었는데 7g이 빠져 금일 pellet은 10g을 주었다. 

# Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 435g(-5g), Pellet/Water : 10g, Experiment time : 14:05 ~ 15:40
Stage : Cart Handling - DAY 2

50번은 또한 마찬가지로 10분동안 towel handling을 진행 후 cart handling을 진행했다. towel에서 suger water를 2mL를 먹었다.10분 후 cart handling을  잰행하였는데, 50번은 49과는 다르게 바닥에 있는 suger water를 먹지 못했다. 그리하여 바닥에 깔아놓은 suger water를 먹는 것 이라고 인지시키기 위해 syringe를 바닥에 붙여 suger water를 조금식 쥐에게 주었다. 또한 떨어져있는 suger wate를 못 찾을 때는 손으로 두드려 신호를 주어 찾을 수 있도록 도와주었다. 31분에는 suger water를 잘 찾는 모습을 보여주었다. 23분에 처음으로 혼자 suger water를 찾아서 먹었다. 13분에는 처음으로 cart에서 얼굴과 몸을 그루밍했고, 21분에는 얼굴만 그루밍을 진행했다. 금일 towel과 cart에서 총 suger water 10mL를 먹었고, 프룻릅은 2개를 먹었다. 

**2. Paper**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-15-ec98a4ed9b84-5.19.24.png?w=1024)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image.png?w=1024)

moseq(motion sequencing)에는 2개의 data를 사용하여 행동을 분석할 수 있다. depth camera를 사용하여 depth data를 얻고 자외선 카메라를 사용하여 실험영상을 촬영 후 keypoint를 DLC로 labeling하여 keypoint data를 얻을 수 있게 된다. 저자는 같은 환경에서 같은 쥐를 2가지의 카메라로 촬영 후 2가지 데이터를 moseq에 사용해보았다. 사용결과 행동단위인 syllable이 같은 환경에서 촬영한 쥐지만 다르게 나타나는 현상을 확인 할 수 있다. 오른쪽 figure는 depth keypoint moseq에서 식별된 syllable 전환 시점을 기준으로 동물 자세 변화 빠르기를 나타내는 지표인 keypoint chage score를 평균화 한 것 이다. 프레임간 keypoint의 변화를 측정한 것으로, 쥐가 만약 행동을 크게 변화했으면 keypoint 변화량이 크기 때문에 값이 커지고 행동 중의 frame 비교일 경우 변화량이 작아진다는 것을 의미한다. depth 기반 moseq는 kyepoint change score가 크게 변화하지 못 하지만, keypoint change scrore가 상대적으로 적게 변화하는 것을 볼 수 있다. 

금일 발표에서 keypoint moseq가 -를 띄고 있는데 이는 어떤 걸 의미하는지 질문이 들어왔다 keypoint input moseq의 한계점중 하나로 지적된 "쥐가 움직이지 않아도 keypoint가 미세하게 움직여 생기는 jitter 때문에 쥐가 움직이지 않아도 계속 값이 양수라서 전체적인 값이 높아 mean이 높게 측정되었을 것으로 추측할 수 있다. 이 슬라이드에서는  keypoin기반 moseq가 실제 행동 변화를 잘 반영하지 못한다고 볼 수 있다. 이러한 차이가 발생하는 이유는 무엇일까?

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-2.png?w=1024)

Frame1에서 Frame2로 넘어갈 때 syllable을 보면 jitter가 depth에서는 syllable의 변화로 나타나지 않지만, keypoint에서는 syllable의 변화가 나타난다. jitter란 실제로 쥐가 크게 움직이지 않았는데도 불구하고 프레임 단위로 keypoint 좌표가 떨리거나 불규칙하게 변하는 현상을 의미한다. 아래 figure는 쥐가 5초동안 가만히 있었을 때, keypoint 궤적을 시간에 따라 보여준 그래프이다. 서로 다른 색상은 서로 다른 keypoint를 의미하는데 움직임이 5초동안 없었음에도 불구하고 jitter현상을 보여준다. 이는 keypoint가 한 점에 머물지 않고 작은 영역 내에서 불규칙하게 움직이는 것을 볼 수 있다. keypoint는 사람이 labeling하기 때문에 수동으로 keypoint를 지정하면 약간의 차이가 발생할 수 밖에 없다. 이는 keypoint data를 사용한 moseq가 keypoint jitter에 더 민감하게 반응한다는 것을 알 수 있는 사례이다. 그리하여 저자들은 depth data의 장점(정확한 행동측정) 단점(depth camera라는 고가 장비 사용) 그리고 keypoint data의 장점(일반 카메라로 측정 가능) 단점(depth data에 비해 부정확함)을 극복하기 위해 keypoint data 전용 moseq를 개발하게 되었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-3.png?w=1024)

저자들은 자신들이 개발한 keypoint moseq가 depth moseq만큼 syllable 분리가 가능하고, 실제 neural 단위에서도 유의미한 행동 측정이 가능하다는 가설을 세워 실험을 설계했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-4.png?w=1024)

DLC를 사용하여 일반 카메라로 촬영한 쥐의 영상에 keypoint를 labeling하여 keypoint가 labeling된 영상을 얻고, 얻은 영상을 통해 keypoint moseq를 사용하여 행동 데이터를 얻고 데이터를 통해 depth moseq의 데이터와 다른 비지도 학습 방법과 비교 분석하는 것으로 실험을 설계했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-6.png?w=1024)

저자들은 여러가지 비지도 학습방법과 keypoint moseq를 비교하기 위해 도파민 측정 방법을 사용하였다. 도파민을 측정한 이유는 쥐가 특정 과제나 명확한 외부 보상 없이 자유롭게 행동할 때도, dorsolateral striatum의 도파민 신호가 moseq로 식별된 syllable의 시작 시점과 정렬되어 증가하고 종료 시점과 정렬되어 감소함을 보여준다는 것이다. 이 내용은 저자들의 선행 연구인 Spontaneous behaviour is structured by reinforcement without explicit reward의 paper를 근거로 사용했다. paper를 설명해 본다면, 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-7.png?w=1024)

저자들은 dorsolateral striatum에 도파민을 측정하는 형광 센서를 발현시켜 광섬유를 통해 측정하는 실험을 진행했다. fig g는 쥐의 자발적인 행동에서 관찰되는 syllable이 발생할 때마다 도파민이 어떻게 변화하는지 나타내는 figure이다. 위 fig에서 x축은 syllable과 관련된 도파민 트랜지언트의 피크 진폭이고 y축은 해당 피크 진폭 값 이하의 값이 관찰될 누적 확률을 의미한다. 대부분의 음절 전환 시점에서 양수의 도파민 피크 트랜지언트가 관찰됨에 따라 쥐가 한 syllable에서 다음 syllable로 전환할 때, 도파민 수치가 일시적으로 증가하는 경우가 흔하다는 결론을 얻을 수 있다. 아래 fig는 x축은 위 패널과 동일하며 y축은 해당 피크 진폭 값 이하의 값이 관찰될 누적 확률이다. 예를들어 x축 특정 값에서 y축이 0.5면 도파민 피크의 50%가 그 값보다 작거나 같다는 의미이다. 대부분 양수 영역에서 가파르게 올라간다. 대다수의 syllable 전환이 도파민 수치의 증가와 관련이 있다는 결론을 얻을 수 있는 fig이다. 종합적으로 본다면 dorsolateral striatum에서 syllable이 전환될 때 도파민이 일시적으로 증가하는 현상이 매우 흔하게 관찰된다라는 종합적인 결론을 얻을 수 있다.

fig e의 초록색은 target syllable이 dorsolateral striatum에 도파민 자극을 주었을 때 자극이 반응하여 target syllable이 증가한 쥐들만 모은 그룹이다. control은 유전적으로 도파민 자극에 반응하지 않도록 만든 쥐의 그룹이고, 도파민 자극 타겟 syllable 사용에 미치는 영향이 없을 때 어떤지 보여주는 그룹이다. y축은 target syllable의 사용 빈도가 자극을 주기전과 자극을 준 후 사이에 얼마나 변했는지를 나타내는 값이다. (+)이면 자극 후 사용 빈도가 늘었고, (-)면 사용 빈도가 줄었다는 것을 의미한다. control그룹은 대채적으로 0에 모여있다. 도파민 자극이 없었거나 관련이 없는 자극을 받은 쥐들은 특정 syllable 사용 빈도가 크게 변하지 않음을 의미한다. dorsolateral striatum 그룹은 양수로 많이 치우쳐져 있다. 이는 dorsolateral striatum에 도파민 자극을 받은 쥐들이 자극 전 보다 target syllable을 훨씬 더 자주 사용한 것을 의미한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-5.png?w=1024)

그리하여 저자들의 결론을 fig별로 정리해 본다면, 3가지 latent variable(Low-dimensional pose state, centroid, nose scale)을 사용하여 keypoint data의 jitter을 해결했고, depth moseq가 식별한 전환점들이 keypoint moseq의 전환점과 일치하며, keypoint moseq는 depth moseq와 비슷한 400ms의 Syllable을 식별한다. keypoint moseq가 뇌의 행동 시작 신호가 발생하는 시점을 찾아냈다. 라는 위 결론을 얻을 수 있다.

그렇다면 moseq를 우리 lab실에 적용 할 수  있을까?

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-8.png?w=1024)

필자의 생각으로는 적절하지 않다고 생각한다. moseq를 사용한 연구들을 보면 모두 open area환경이며 여러마리의 쥐들을 측정하는 사회적 행동을 분석하는 연구에 많이 사용된다. 우리 lab은 vr환경에서의 실험이 많이 이루어진다. vr 환경은 하네스를 쥐가 착용하기 때문에 제한된 행동을 할 수 밖에 없으며, 이는 앞으로가기, 고개 돌리기등 간단한 동작들만 한다는 것을 의미한다고 생각했다. 그리하여 keypoint moseq를 사용 전 DLC만 사용하여 행동을 분석할 수 없을까? 라고 생각했다. 왼쪽 사진은 hyper dirve에 labeling을 진행한 것이다. dlc 장점 중 하나로 실험장비까지 특징을 파악하여 labeling을 진행할 수 있기 때문에 hyper drive가 쥐의 머리를 가려도 전혀 문제가 되지 않는다. 또한 오른쪽 사진은 필자가 port를 labeling한 실험인데, port와 쥐의 코, 그리고 쥐의 아랫 입을 labeling하였다. 이 3가지를 labeling한 이유는 만약 port가 나오기 전 쥐의 코와 아랫 입이 움직인다면, 이 쥐는 학습이 되어 있다는 근거가 될 수 있기 때문이다. 이러한 사례로 DLC만 충분히 활용하여 행동을 분석할 수 있다고 생각했다. 그래도 만약 lab에 moseq를 적용해야 된다면,

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-9.png?w=1024)

VR환경 전용 data를 수집하여 moseq를 학습시킨다면 충분히 사용할 수 있을 것이라 생각한다. vr실험 환경은 제한된 행동을 보여줄 수 밖에 없기 때문에 여러 vr환경 data를 가지고 parameter를 설정하여 학습을 진행한다면, moseq를 활용하여 행동을 분석할 수 있을 것이다. 만약 moseq modeld을 훈련시킨것을 랩에서 공통으로 사용가능해진다면, moseq를 사용할 수 없는 사람도 이용이 가능할 것이라 생각이 든다.

마지막으로 keypoint moseq의 필자가 생각하는 장점과 단점에 대한 질문이 들어왔다.
keypoint moseq의 장점은 unsupervised learning을 사용하여 사람이 미리 정한 카테고리나 레이블이 전혀 없어도 syllable을 자동 추출이 가능하다는 큰 장점이 있다고 생각한다. 이에 따라 평가자마다 달라지는 주관적 스코어링을 방지할 수 있으며, 사전에 정의하지 않은 새로운 행동 모듈을 발견 할 수도 있다. 그 외에도 syllable hierachy를 바탕으로 실제 분류한 syllable이 유사한지 정량적으로 판단할 수 있고, grammer(어떤 syllable이 얼마나 어떤 순서로 나오는지)를 제공하여 행동의 시퀀스를 알 수 있다는 장점이 있다. 

단점으로는 keypoint moseq의 실제 적용 예시들이 거의 open field라서 이 모델을 만들때 ope field에서 특화되어있거나, open field에서만 성능이 좋게 나오는 함정이 있을 수 있다. 그래서 우리가 vr에서 사용하는 port를 lick하는 행동 등은 잘 잡아내지 못할 수도 있을 것이라 생각한다.
