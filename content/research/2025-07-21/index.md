---
title: "2025/7/21(월)"
date: "2025-07-21"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-12.png?w=1024)

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 453g(+7g) Pellet/Water : 8g Experiment time : 10:25 ~ 10:45
Stage : Familiarization - DAY 3

금일 familiarization 3일차를 진행했다. 마찬가지로 10분 towel handling 이후 T-maze에서의 시간을 가지는 것으로 진행했다. 오늘 49번은 저울에서 무게를 측정할 때, 스스로 저울에 들어가는 모습을 보여주었다. 실험자가 가르치지 않은 것도 스스로 학습한 것이 정말 신기한 모습이었다. towel에서 5분에 그루밍 후 suger water를 1mL를 먹고 T-maze에 올라갔다. T-maze에 오른 후 12분에 몸과 얼굴을 그루밍 했다. suger water를 먹는 속도를 실험자가 따라가지 못 할 정도로 빠르게 suger water를 찾아 먹는 모습을 많이 보여주었다. T-maze에 올라간지 8분만에 10mL를 모두 먹었다. 실험이 끝난 후 handling 하지 않아도 저울을 보고 스스로 towel에서 들어갔고, 또 저울에서 cage로 스스로 들어가는 모습을 보여주었다. 금일 프룻룹은 2개를 먹었고, suger water은 11mL(towel 1mL,T-maze 10mL)를 먹었다. 원래 금일 shaping이 예정되어 있었으나, 주말이라는 공백이 생겨, familiarization을 하루 더 진행했다. 그리하여 pellet의 양도 20,15,10g으로 주려고 했으나 20,15,13g으로 pellet을 일요일에 3g 더 주었다. 금일 pellet은 8g을 주어 명일 shaping에 알맞은 몸무게를 만들려고 한다.

# Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 442g(+12g), Pellet/Water : 8g Experiment time : 10:55 ~ 11:15
Stage : Familiarization - DAY 3

50번 또한 마찬가지로 familiarization을 하루 더 진행했다. towel handling 10분 그 후 T-maze를 진행했다. 50번은 towel handling을 하면서 실험자의 실험복 단추 구멍 안에 들어가려는 모습을 금일 보였다. 그리하여 실험자가 제재를 했는데, 삐진 모습을 보인건지 suger water을 바로 먹지 않는 모습을 보였다. 그리햐여 실험자가 handling을 더 진행하니, 그제서야 suger water을 먹는 모습을 보여주었다. 10분의 towel hadling을 거친 후 T-maze에 올려 주었다. T-maze에서 14분에 처음으로 얼굴 그루밍을 진행했다. T-maze에서 8분만에 10mL를 먹는 모습을 보여주었다. suger water을 실험자가 지정한 위치에 뿌려줘서 그런지, start box에 한번도 들어가지 않았다. 실험이 끝난 후 towel에서 저울이 보이면, 미친듯이 저울에 들어가려는 모습을 보인다. 저울의 뚜껑을 열어주면 알아서 들어가는 모습을 보여준다. 또한 저울에서 cage로 스스로 들어가는 모습 또한 금일 보여주었다. 주말동안 pellet을 20,12,10g을 줄 예정이었으나, familiarization을 하루 더 진행하기로 하여, 일요일 pellet양을 3g을 더 준 13g을 주었다. 금일 pellet 양은 8g을 주어 명일 shaping에 알맞은 몸무게를 만들려고 한다.

**2. DLC project**

금일 crf 조정 값과 scale 조정 영상을 가지고 dlc test를 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-29.png?w=1024)

저번 test를 통해 crf 31과 scale 960x540이 같이 사용되는 영상이 DLC에 사용하기 적합한 데이터라 판단하였기 때문에,  crf41과 scale 960x540의 batch size를 비교 후 crf31과 960x540의 batch size까지 비교해보는 계획을 세웠다. 먼저 위 crf와 scale 빼고는 모든 조건이 똑같아야 하기 때문에, 조건을 설정해주었다. 

1. numframe2pick = 200

2. bodyparts (hyperdrive 17, hyperdrive 8, EIB middle, Rat nose) labeling

3. train network

- shuffle = 1

- display iteration = 1000

- save iteration = 50000

- maximum iteration = 100000

- number of snapshots to keep = 5

4. training dataset = resnet_50

위 조건은 모두 동일하게 test를 진행하기로 설정했다.

먼저 학습에 걸리는 시간을 정확하게 알기 위해서, 학습에 소요되는 시간을 출력할 수 있도록 code를 수정했다. 

C:\Users\leelab\anaconda3\envs\deeplabcut\Lib\site -packages\deeplabcut\pose_estimation_tensorflow\core

위 경로에 존재하는 deeplabcut training에 사용되는 function인 train.py file을 vscode로 열어 수정해주었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-30.png?w=800)

위 code를 추가하여 anaconda prompt 창에서 학습이 완료되면 얼마나 소요되었는지 보여줄 수 있게 추가하였다. 간단하게 code를 설명한다면, 전체 소요된 시간에 시,분,초에 알맞은 변환 수로 나눠 f string으로 표현하게 만들었다. 위 code를 추가하고, crf 41로 설정한 영상을 가지고 dlc로 test를 진행했다.

DLC로 학습을 진행을 test 하기 위해 먼저 batch size를 32부터 내려가며, 학습이 처음 진행되는 batch size를 찾았다. gpu가 2개인 환경이기 때문에 batch size 32로 충분히 학습이 진행되는 것으로 예상했다. 하지만 예상 결과와는 다르게 batch size가 32,16,8이 되어도 학습으로 넘어가지 않았다. batch size를 4로 설정하니 그제서야 학습을 시작했다. crf를 내리는 것 보다, scale을 하는 것이 batch size를 더 올릴 수 있는 것인가? 아니면, crf를 더 내려야 하는 것인가? 많은 생각이 들었다.

분명 gpu는 2개가 잡힌다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-31.png?w=800)

cmd 창에 nvidia-smi 을 입력하면, gpu가 0,1로 2개가 잡히는 것을 확인할 수 있었다.

그리하여 config.yaml에 존재하는 multi gpu function을 따로 뽑아 실행시켜 보았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-33.png?w=800)

위 code를 실행시키면 traceback error가 발생한다. multi gpu function이 제대로 실행되지 않았다는 이야기이다. 그렇다면 왜 traceback error가 발생할까? error에 대해 계속 찾아보았다. error의 답은 이러했다. 

간단하게 말하자면 DLC는 multi gpu를 호환하지 않는다. 즉 1개의 gpu로만 학습이 되게 설계되어있는 모듈이다. 옛날 version인 2.11 version은 test 용도로 multi gpu 기능을 개발자들이 추가해 놓았지만, tensorflow version과 DLC version이 upgrade 되면서 multi gpu 기능을 빼버린 것이다...

현재 version에서 multi gpu를 사용하기 위해서는 tensorflow를 직접 뜯어서 code를 multi gpu에 맞게 고치는 방법밖에는 존재하지 않는다. 이 과정은 시간이 정말 오래걸릴 것으로 예상이 된다. 그리하여 아직 test를 진행할 것이 많아 test를 진행하면서, tensorflow code를 하나씩 보기로 결정했다. 그래도 scale과 crf값을 조절한다면, 학습 속도를 상향시킬 수 있다는 데이터는 유효하기 때문에 얻은 것은 있다고 생각한다. gpu가 2개이지만 1개만 사용하기 때문에 아마도 batch size가 드라마틱하게 늘지는 않을 것으로 예상된다. 가장 기대가 되는 부분은 scale을 진행 했을 때, batch size가 얼마나 늘어날지가 궁금하다. 1980x1080의 해상도로 진행했을 때는 batch size가 1밖에 되지 않았지만, 960x540 해상도는 batch size가 8만 되더라도 성공적이라고 생각한다.
