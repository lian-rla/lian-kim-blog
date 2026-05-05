---
title: "2025/7/7(월)"
date: "2025-07-07"
categories: "research"
author: "lian"
emoji: "🔬"
---

**1. Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-07-ec98a4ed9b84-6.41.13.png?w=1024)

**# Rat No. 49**
Group : comparison study of no reward vs negative feedback on learning
Current weight : 467g, Pellet/Water : 8g, Experiment time : 09:30 ~ 10:00
Stage: Handling(Towel handling) - DAY 1

Handling을 하기 위해 towel로 옮기는 과정에서는 큰 저항이 없었다. 그 후 towel을 깔고 handling을 시작 후 초반에는 털이 곤두 서있었고, 똥을 towel에 3개를 쌌다. 초반에는 굉장히 활발하게 탐색했고, 처음에는 손을 많이 피했으나 half peace을 주며 handling을 진행하니 점차 적응하는 모습을 보여주었다. handling 시작한지 3분일때 처음 머리부분 그루밍을 했다. 그 후 5분일때 몸 부분 그루밍을 진행했다. 49번은 프룻룹을 더 좋아하는 거 같다. suger water을 주려고 syringe를 내밀면 고개를 획 돌려버리며, 관심도 안가진다. 그러나 프룻룹을 주면 구석에 있다가도 프룻룹을 가진 손을 따라와 중간까지 나오는 모습을 보여주었다. 20분쯤에는 핸들링에 적응되어 얌전해지고 그루밍도 격해졌다. (온몸 구석구석 하기 시작했다. 자기 몸을 지탱하지 못할 정도로 그루밍을 했다.약 1분가량 진행) 금일 프룻룹 9개(저울에서 먹은 것 포함)와 suger water 3ml를 섭취했다.(suger water은 거의 흘린게 반이다.)

**# Rat No. 50**
Group : comparison study of no reward vs negative feedback on learning
Current weight : 449g, Pellet/Water : 8g, Experiment time : 10:00 ~ 10:30
Stage: Handling(Towel handling) - DAY 1

handling을 하기 위해 towel로 옮기는 과정에서 큰 저항이 없었다. handling을 시작하자 마자 활발하게 탐색을 시작했다. 털이 서 있는 모습은 없었다. 50번은 처음부터 손에 대한 거부감이 크게 존재하지 않았다. half peace를 주었을 때 바로 받아먹었으며, 먹을 때 바로 쓰다듬어도 크게 저항이 없었다. 추가로 suger water 1ml를 syringe에 넣어 바로 주었는데 바로 반응이 왔다. syringe를 가까이 가져다 주니 기다렸다는 듯이 syringe를 계속 핥았다. 1ml를 절반 나눠서 주었는데 suger water을 주지 않아도 syringe를 계속 핥았다. 1ml를 모두 먹고 마지막에는 syringe를 끝까지 처다보았다. (suger water를 충전하는 반대편 테이블까지 계속 응시했다.) 50번은 적응하는 과정에서 똥은 싸지 않았다. 그리고 그루밍은 많이 하지 않았지만 handling을 시작한지 11분 만에 얼굴 쪽 그루밍을 처음으로 하고 더 이상 하지 않았다. 50번은 suger water를 잘 먹어서 금일 5ml를 주었다. 5ml를 먹고도 부족한지 syringe를 계속 핥았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/img_9873.jpeg?w=768)

링 보관통을 추가로 금일 받았다. 주기를 하여 handling towel 옆 공간에 보관해 두었다.

**DLC Project**

본격적으로 DLC Project를 시작했다. DLC Project의 최종 목표는 어떠한 환경에서 가장 빠르고 좋은 DLC data를 얻을 수 있나 이다. epoch값을 얼마를 줄지, 아니면 parameter을 얼마를 잡을지, GPU 환경을 cudnn version 몇으로 실행할지 등 생각해야 할 것이 많다. 그리하여 계획을 좀 잡아보려고 한다. 위 행동실험처럼 계획에 대한 figure 및 labnote 틀의 필요성을 느꼈다. 고민을 좀 해보고 명일부터 계획에 대한 figure 및 labnote 틀을 잡고 올리겠다. 

그리하여 오늘은 실험에 대한 test 환경만 구축하였다.

0100 영상에서 labeling 할 부분인 쥐의 nose와 hyper drvie의 동서남북 중앙을 표시해 주기 위해 yaml file 에서 코드를 수정해 주었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ecbaa1ecb298-4.png?w=303)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ecbaa1ecb2981-1.png?w=412)

그후 labeling을 진행 후 netwark learn을 지정해 주어야 하는데 여기서 부터 선택해야 한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/20250707_154845.png?w=301)

어떠한 network를 선택하여 data를 뽑을지 그리고 실험해 볼지는 실험 계획을 잡고 명일부터 해볼 계획이다.

**The contextual Brain(오후마당)**

금일 오후마당은 이인아교수님께서 The contextual Brain이라는 주제로 진행하셨다. 금일 오후마당에서 가장 기억에 남는 주제를 뽑는다면, "좋은 mentor를 만나는 방법" 이었다. 교수님께서는 좋은 mentor를 고르는 방법에 대한 기준을 보여주셨다. 

1. 뚜렷하고 일괄된 방향성의 연구 주제를 가진 사람

2. 평생 한가지만 연구한 사람

3. 새롭게 연구를 시작하는 사람을 조심할 것

4. Ph D 학위 수여에 대한 명확한 기준이 있는 사람

5. Good communication habit

6. Good trainer & manager(leadership) for professional training

7. Global academic reputation

8. Personal style fit

위 8가지의 기준을 제시해주셨다. 필자에게는 정말 필요한 기준이었다. 내가 하고싶은 것이 생겨 그 일을 하는 것도 중요하지만, 내가 옳은 방향으로 이끌어주는 mentor도 정말 중요하기 때문이다. 교수님의 이 수업을 듣고 필자의 인생에서 mentor라고 생각이 드는 사람들을 기준으로 필자만의 기준을 생각했다. 아직까지는 확실한 기준이 들지는 않지만, 정확하게 드는 생각은 금일 교수님이 제시한 기준이 앞으로 필자의 mentor를 결정하는데 중요한 역할을 할 것이라는 생각이든다. 추가적으로 "좋아하는 것을 할때에는 '왜?' 라는 생각대신 '어떻게?'만을 생각한다." 라는 문구가 기억에 남았다. 필자가 정말 좋아하는 일을 했을 때를 생각해 본다면, 그 일을 왜 하는지에 대해서는 생각해 본적이 없었다. 지금까지 좋아하는 일이라고 생각이 들면, 좋아하는 일을 해내기 위해 어떠한 방법을 사용할 지만 생각하며 살았기 때문이다. 항상들었던 생각은 "좋아하는 일만 쫓다가 현실의 벽에 막히면 그때는 어떡하지?" 라는 생각이 많이 들었다. 그러나 금일 수업으로 용기를 얻은 것 같다. 필자가 다짐하고 생각하는 '인생의 동력'을 다시 생각하는 시간이었다.
