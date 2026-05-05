---
title: "2025/7/8(화)"
date: "2025-07-08"
categories: "research"
author: "lian"
emoji: "🔬"
---

1. **Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-07-ec98a4ed9b84-6.41.13-1.png?w=1024)

# 

# Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 464g, Pellet/Water : 8g, Experiment time : 09:25 ~ 09:55
Stage : Handling(Towel handling) - DAY 2

towel handling 초반에는 어제와 다르게 털이 서 있지 않았다. suger water가 담긴 syringe를 입 주변에 가져다 주어도 계속 피하는 모습을 보여주었다. 초반 1mL는 바닥에 거의 흘렸다. 그 후 2mL부터 구석에서 suger water을 잘 먹는 모습을 보여주었다. 49번은 syringe에 대한 반발감이 너무 심해 suger water을 한번 먹을 때마다 half peace를 주었다. 추가로 중앙을 잘 벗어나지 않으려고 하며, 실험자의 손 주변에만 계속 붙어있는 모습을 보여주었다. 추가로 towel 뒷 부분을 계속 물어 뜯었다. 한 번씩 실험자의 손도 물었다. 15분에는 몸 전체적으로 그루밍을 약 1분동안 진행했으며, 23분에 얼굴과 몸 전체적으로 그루밍을 또 한번 진행했다. 금일 suger water을 5ml를 먹었으며, 링은 저울에서 먹은 것 포함 6개를 먹었다. 

# Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 445g, Pellet/Water : 10g, Experiment time : 10:00 ~ 10:30
Stage : Handling(Towel handling) - DAY 2

50번은 syringe에 대한 거부감이 전혀 없다. handling을 시작할 때 털이 서 있지 않았고, syringe를 주니 기다렸다는 듯이 바로 먹었다. 1ml를 3번 나눠서 주었는데 syringe를 빼려고 할 때마다 입으로 물어 자기 쪽으로 당겼다. 추가로 towel 모든 영역을 활발하게 탐색했고 심지어 의자 뒤까지 올라가서 탐색하려고 했다. syringe를 보여주면 구석에 있어도 중앙으로 나와 먹었다. motivation이 좋아서 금일 grapping 단계까지 진행했다. 모든 발이 떨어지게 들어준 후 내려 놓은 뒤 syringe를 입에 가져다 주는 훈련이다. 초반에는 grapping이 무서웠는지 똥을 3개를 싸며 불안해하는 모습을 보여주었다. 6ml suger water을 먹을 때 똥을 2개를 쌌지만 10ml까지 grapping을 진행하면서 더 이상 무서워 하는 모습을 보여주지 않았다. 적응이 될 수록 grapping을 하고있는 시간을 늘려 진행했다. 마지막 10ml를 먹을 때는 약 3초가량 grapping을 하고 있어도 저항이 없었다. 금일 프룻룹은 4개를 먹었으며 suger water은 10ml를 먹었다.

**2. DLC project **

GPU가 잡히지 않는 문제가 발생했다. tensorflow 2.12 , cuda 11.8, cuDNN 8.6 version을 사용하여 rtx 3090이 2개인 desktop 환경에서 gpu setup을 진행하였지만, gpu가 잡히지 않는다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ecbaa1ecb298-5.png?w=888)

그래픽카드 드라이버 업데이트와 cuda, cuDNN을 직접 연결시켜주어도 gpu가 잡히지 않는다. 아마도 gpu가 2개가 연결되어 있어 충동이 발생하는거 같다. tensorflow의 version에 맞게 cuda와 cuDNN을 맞춰줬기 때문에 위 3개에는 문제가 없어보인다. 명일 gpu 2개를 사용하는 명령어 및 tensorflow 설정을 찾아봐야 될 것 같다.
