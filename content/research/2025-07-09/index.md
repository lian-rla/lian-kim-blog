---
title: "2025/7/9(수)"
date: "2025-07-09"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-09-ec98a4ed9b84-7.37.00.png?w=1024)

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 448g(- 16g) Pellet/Water : 12g, Experiment time : 09:20 ~ 09:50
Stage : Handling(Towel handlin & Grabbing) - DAY 3

실험초반에 실험실에 사람이 많아 경계하는 모습을 많이 보였다. 털도 많이 서 있는 모습을 보여줬다. syringe를 주면 먹다가도 주변을 두리번거리며 경계했다. 어제와 마찬가지로 약 3분정도는 syringe을 많이 피하는 모습을 보여줬다. 그 후에는 1mL를 바로 먹었다. 약 10분이 지난 후 털이 많이 가라앉았고, 12분에 첫 그루밍을 시작했다.(얼굴만 진행) 3mL 부터는 grabbing을 하기 위해서 손을 올려놓았다. 계속 손을 올려놓으면 뒤로 빼려는 모습을 보였다. 5mL부터는 양발이 떨어지도록 grabbing한 후 suger water을 주는 훈련을 진행했다. grabbing을 진행하고 바로 똥을 3개를 쌌다. 그 후 다음 6mL(6번째) sugerwater로 grabbing을 진행하니 똥을 2개를 쌌다. 마지막 8mL에서는 전 보다는 안정적인 모습을 보였지만, 아직까지 49번은 grapping 과정에서 저항이 정말 심히다. 추가로 무게가 10g이 어제보다 빠져서 Pellet양을 8g에서 12g으로 올렸다. 금일 프룻룹은 6개, suger water은 8mL를 먹었다. 

# Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 429g(-20g), Pellet/Water : 15g, Experiment time : 10:00 ~ 10:30
Stage : Handling(Towel handling & Grabbing) - DAY 3

50번 또한 마찬가지로 실험실에 사람이 많아 경계하는 모습을 많이 보였다. 하지만 49번과는 다르게 suger water을 주면 주변 상관없이 먹었다. 1mL를 주니 경계가 많이 사라졌다. 추가로 suger water을 줄 때 실험자가 syringe을 천천히 주면, syringe를 물어 자기 쪽으로 당긴다. 다시 정상 속도로 suger water을 주면 먹는 것에 집중한다. reward에 대한 motivation이 정말 강한 거 같다. suger water을 다 먹은 후 syringe를 빼면 끝까지 처다보고 syringe를 두는 반대편 테이블까지 syringe를 처다본다. 9분부터 grabbing을 진행했다. 처음 grabbing을 할 때는 들고 있다가 내려준 후 suger water을 주었다. 그 후 16분에 그루밍을 처음 진행했다. 20분에는 저항이 정말 심했지만, 5초를 2번 성공했다. (suger water 6mL) 5초 2번을 성공하자 마자 똥을 3개를 쌌다. 27분에는 몸 전체적으로 그루밍을 하기 시작했고, 마지막 29분에는 grabbing을 할때 저항을 하게되면 충격을 줘 저항을 조절하는 것 까지 추가하여 실험을 진행했다. 초반에는 저항이 강했지만, 충격을 줄 수록 저항이 약해졌다. 마지막 10mL를 먹을 때는 초반 grabbing할 때마보다 저항이 크게 줄었다. 금일 프룻릅은 6개를 먹었고, sugerwater은 10mL를 먹었다. 몸무게가 줄어 Pellet양을 10g에서 15g으로 늘렸다. 

**2.DLC project**

어제 GPU가 tensorflow에 잡히지 않는 문제를 발견하고, 금일 해결하기 위해 여러가지 시도를 진행했다. deeplabcut에서 tensorflow는 cuda 11.8 version을 지원하기 때문에 11.8 version의 cuda를 설치해 주었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ecbaa1ecb298-6.png?w=591)

그러나 현재 환경인 RTX3090이 2개인 desktop pc에서 설치가 되지 않았다. 필자의 생각으로는 원래 설치되어있는 cuda version인 12 version과 부딪치는 문제가 있어 설치가 되지 않을까? 라고 유추했다. 그리하여, 제어판에서 cuda 관련된 모든 것을 지워 다시 설치를 진행했지만 설치되지 않았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/1-2.png?w=733)

cmd창에

```
nvidia-smi
```

라 입력하면 나오는 명령어이다. 3090 2개가 잘 잡혀있는 모습을 볼 수 있었다. gpu 연결 문제도 아니라는 결론을 얻을 수 있었다. 그리하여 필자는 gpu를 초기화 시킨 상태에서 다시 환경을 구상하기로 결정했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/2-1.png?w=680)

DDU라는 tool을 사용하여 초기화를 진행해 주었다. DDU를 사용하기 위해서는 window 안전모드를 사용해 주어야 한다. window 안전 모드는 shift를 누른 상태에서 다시시작 버튼을 누른 후, 관리자 설정에 들어가 안전 모드를 실행 할 수 있다. 

window 안전 모드를 실행하게 되었다면, DDU를 실행시켜 GPU 초기화를 진행시켜 준다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/3-2.png?w=680)

GPU를 선택하고 제조사인 NVIDIA를 선택했다. 그 후 지우고 다시 시작 버튼을 눌러 초기화를 진행 시켜 준다.

그 후 cuda 11.8 version을 다시 설치해준다. 설치가 완료된다면 
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.8 경로에 bin ,include,lib 파일이 생성이 되어야 한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/4-2.png?w=1024)

하지만 생성 되지 않았다.(cuda 11.8 version이 제대로 install되지 않은 것이다.) 하지만 수확이 없는 것은 아니다. gpu를 초기화 하면서 그래픽카드 드라이버가 잡히지 않는 문제를 해결했다. 명일 tensorflow의 gpu 연동 문제만 해결한다면 versioin을 확인하며 환경 구성을 할 수 있을 것이라 생각한다.
