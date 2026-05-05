---
title: "2025/6/27(금)"
date: "2025-06-27"
categories: "research"
author: "lian"
emoji: "🔬"
---

**install deeplabcut(window os)** 

금일 104호에 있는 window os 기반 computer에 deeplabcut install을 진행하였다.

어제 lab note에 작성한 방법을 참고하여 deeplabcut install을 진행하였다. 먼저 computer에는 anaconda prompt가 깔려있어 conda install은 건너 뛰어 설치를 진행하였다.

(104호에는 선배님들이 연구를 진행중이라 사진을 많이 찍지 못하였다. 금일 lab note에 사진이 많이 없어도 이해해 주길 바란다.)

먼저 dxdiag를 실행하여 computer사향을 체크해 주었다. computer의 사향은 nvidia gtx 3090이었다.
* pytorch 연동에 알맞은 그래픽 드라이버를 설치하기 위해 사향 체크는 필수다. 
추가적으로 computer에 이미 그래픽 드라이버가 설치되어 있어, update만 진행해주었다.

그 후 anaconda prompt를 관리자 권한으로 실행시켜준다.

anaconda prompt 창에서 아래의 명령어들을 입력하여 cuda toolkit, pytorch, gpu 활성화, deeplabcut 등을 install 해준다.

1. cuda toolkit install 명령어

conda install pytorch-cuda=11.8 -c pytorch -c nvidia  # nvidia 그래픽카드 pytorch cuda 설치
conda create -n deeplabcut python=3.10
conda activate deeplabcut
conda install -c conda -forge pytables=3.8.0
conda install pytorch pytorch-cuda=11.8 torchvision -c pytorch -c nvidia

2. GPU 활성화 명령어

python -c "import torch; print(torch.cuda.is_available())"

*True가 나오면 GPU가 활성화 된 것이다.

3. conda 환경 생성 명령어

conda create -n deeplabcut python=3.10
conda activate deeplabcut
conda install -c conda -forge pytables=3.8.0
conda install pytorch cudatoolkit=11.3 -c pytorch

4. deeplabcut GUI install 명령어

pip install deeplabcut[gui,tf]

위 과정을 토대로 anaconda prompt에서 install을 진행하였다.

추가적으로 deeplabcut을 실행시키는 방법은

conda activate deeplabcut
python - m deeplabcut

을 입력하면 실행되게 된다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9791.jpeg?w=766)

deeplabcut GUI가 잘 실행되는 모습을 볼 수 있다. test를 진행해 보고 싶었지만 아직 백업된 파일이 존재하지 않아 test는 진행하지 못 하였다. 추가적으로 월요일부터는 104호에 있는 computer system을 가지고 deeplabcut project를 진행할 예정이다. 아직 영상들은 백업하고 있고, 주말동안에도 진행한다고 하셔서 월요일에 백업이 끝날지는 의문이지만 deeplabcut setup이 마무리된 시점에서 다음주부터는 project를 시작할 수 있을 것이라고 예상한다.

**Thionine imaging**

금일 histology는 thionine imaging을 진행했다. 어제와 같이 DAPY imaging과 준비 과정은 똑같지만 다른 부분이 한 가지 존재한다. 형광램프를 사용하지 않고 light를 사용한다는 것이다. 형광램플를 사용하지 않기 때문에 ignite를 키지 않아도 된다. 설명하자면,

1. 컴퓨터 2. 현미경 3. 카메라 4. NIS 만 작동시키면 된다는 것이다.

금일 thionine imaging은 어제 초점을 잘 맞추지 못했다는 feedback을 받고 초점을 맞추려고 노력했다. 추가적으로 glass에 이물질이 있는지 더 자세히 확인했다. 

thionine은 100ms에 gain은 1로 주고 촬영을 시작했다. 

LE 30, LE31을 촬영했고, LE30 thionine 1~8, LE31 thionine 1~9번까지 촬영을 진행했다.
소요 시간은 약 2시간이다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9796-1.jpeg?w=766)

(LE30 thionine 촬영본)

필자가 직접 찍은 thionine이다. 특징으로는 보라색 빛을 띄며 hippocampus에 virus발현이 잘 되어 있는 것을 볼 수 있다. 추가적으로 hippocampus 윗 부분에 구멍이 뚫려 있는 샘플들이 있는데, 이는 virus를 주입할 때 생긴 구멍이다. 현미경으로 관찰했을 때, 구멍이 존재한다면 구멍이 보이게 촬영해야 하며 hippocampus가 최대한 잘 보이게 촬영해야 한다.

LE30은 3번부터 크기가 커 하나의 샘플을 2번 촬영했다.(왼쪽 오른쪽 따로 촬영) LE31번은 마찬가지로 3번부터 크기가 커지기 시작하여 3번부터 2번 촬영했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9797.jpeg?w=766)

(LE31 thionine 촬영본)

촬영을 다 맞춘 뒤 현미경 청소를 진행했다. 어제 현미경 정리에 대한 설명이 부족한 것 같아 다시 설명해 보자면,

1. 모든 전원을 켰던 순서의 역순으로 끈다.

2. 알콜로 plate를 청소한다.

3. 현미경 렌즈를 4X(빨간줄)로 바꿔준다.

4. 현미경 덮게를 씌운다.

5. 클립보드에 사용시간과 현광물질 사용량을 작성한다.

6. google sheet를 작성한다.

추가적으로 현미경을 사용하기 전과 후의 plate 사진을 찍는다. (보고서 작성용)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9793.jpeg?w=768)

(금일 현미경 사용전 찍은 plate)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9795.jpeg?w=768)

(사용 후 청소를 진행하고 찍은 plate)

일주일동안 histology과정에 대해 거의 처음부터 끝까지 보았다. 일주일 histology 과정을 정리해 보자면, 

1. gel embedding(쥐의 뇌를 동그랗게 다듬는 과정)

2. sectioning(기계를 사용하여 쥐의 뇌를 0.4마이크로 로 자르는 과정)

3. mounting(자른 쥐의 뇌를 glass위에 올려주는 과정)

4. staining(glass 위에 slice glass를 올리는 과정)

5. imaging(현미경을 사용하여 촬영 진행)

위 과정으로 histology가 이루어지며, 많은 절차들이 존재한다. 아직까지는 모든 절차를 완벽하게 숙달하지 못 했지만, 다음주에 있을 또 다른 DAPY imaging을 통해 어제와 금일 배운 과정을 반복하여 숙달해 보겠다. 

*6월 30일(월) 수정본

feedback 받은 부분이 있어 추가해본다.

- thionine은 virus를 염색하는 것이 아닌, neruron의 세포핵을 염색시키는 것이다. (nissl staining이라고도 불림) hippocampus에 thionine 염색이 진하게 나타나는 이유는, neuron의 세포가 hippocampus에 많이 모여있기 때문이다.(cell layer라고 불림 <- 세포가 모여있다.)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/kakaotalk_photo_2025-06-30-09-28-24.png?w=750)

hippocampus에 cell layer가 촘촘히 모여있다.

**JC discussion**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-25-ec98a4ed9b84-1.51.42.png?w=1014)

DD와 PCD의 차이 -> 필자는 위 논문을 읽으면서 DD와 PCD의 정확한 차이가 사실 무엇인지 몰랐다. (얼추 다르다는 것만 이해했다.) 금일 JC에서 은수민 RA가 설명해주었다. 설명 내용을 필자가 이해한 방식으로 설명해 보자면, DD는 시작에서 몇 발자국 땠는지를 말한다. 즉 쥐를 놓았을때 가까운 반경범위를 의미한다. PCD는 high value zone과 low value zone의 시작 부분을 원으로 이어 그린 범위를 의미한다. 저자는 DD와 PCD를 만들어 쥐의 이동반경을 측정했다. 추가적으로 circular statistics(원형 통계)를 사용하여 쥐들의 이동 반경을 표현했다고 까지 교수님께서 설명해주셨다.

muscimol -> muscimol은 mus의 원어로 처음으로 버섯에서 발견했다고 한다.

**brain extension**

금일 brain extention을 볼 수 있는 기회가 생겨 참관했다. brain extentiond은 쥐의 뇌를 분리하는 과정을 의미한다. 처음 봤을 때는 쥐의 머리가 호르말린에 담겨 있었다. 선배님께 여쭤보니 단두대로 쥐의 뇌를 잘라 뇌만 따로 보관하셨다고 하셨다. 실험 과정을 촬영하고 싶었지만 오티시간에 배운 동물 윤리과정으로 인해 촬영이 어렵다는 배움이 생각나 촬영을 하지 못해 사진이 없다. 그리하여 글로 과정을 잠깐 설명해보자면,

1. purfusion을 한다.(피를 빼고 굳힌다.)

2. 그 후 듀라 라는 쥐의 뇌에 붙어있는 장치의 나사를 풀어준다. (27개가 존재한다.)

3. 랑주르(두개골을 자르는 가위, 벤치같이 생겼다.)로 쥐 머리의 뒷 부분을 잘라준다.

4. 랑주르로 자를때는 twist하지 않게 주의한다. (twist를 하지 않는 이유는 뇌 조직까지 뜯어지는걸 방지하기 위해서이다.)

5. 쥐의 가죽이 벗겨지면 더 두꺼운 랑주르로 아래 두개골을 가로로 잘라 쥐의 눈과 가죽을 제거한다.

6. 뇌 조직에 붙어있는 근육을 랑주르로 조심히 때준다.

7. 근육 조직을 다 때어내면 듀라와 뇌를 손으로 땐다.

위 과정으로 brain extention이 이루어 지는데, 필자가 의아했던 부분은 듀라에 존재하는 번들의 깊이를 어떻게 설정하는지 였다. 선배님께 여쭤보니 방법은 간단했다. 아틀란스라는 쥐의 뇌 조직도를 보고 먼저 깊이를 설정한다. 그 후 듀라를 쥐의 뇌에 시멘트로 붙힌 뒤 뇌 조직의 지표(아마도 뇌 세포의 소리인거 같다.)를 들으면서 연결이 잘 되었는지 확인하신다고 하셨다. 추가적으로 번들은 한 바퀴를 돌릴 때마다 0.3마이크로씩 조여진다고 알려주셨다. 

필자는 듀라가 붙어있는 쥐를 처음봤을 때 저렇게 무거운게 쥐의 뇌에 붙어있으면 쥐의 motion grade가 떨어지지 않을까? 추가적으로 실험을 하다가 줄에 걸려 떨어진다면 끔찍한 일이 발생하지 않을까?라는 의문점이 존재했다. 답은 간단했다. 듀라에 존재하는 벨크로가 해답이었다. 실험 중 벨크로에 안전장치(전선을 잡아주는 장치)를 붙여 쥐가 움직여도 듀라가 떨어지지 않게 만들었다고 설명해주셨다. 

필자가 진행하는 histology에 사용되는 쥐의 뇌는 어떻게 추출될까가 의문이었다. 금일 **brain extension**과정으로 그 의문점이 해결되었다. brain extension으로 쥐의 뇌를 얻고 그 후 위에서 설명한 histology 과정을 통해 조직을 보게 되는 것으로 필자의 지식이 확정되었다.

*6월 30일(월) 수정본

듀라 -> 쥐의 뇌에 붙어있는 장치 명이 아니다. 뇌를 덮은 막의 이름이다. 뇌의 막은 pia, arachnoid, dura로 이루어져 있으며 dura는 가장 질긴 막이라고 한다. 쥐의 뇌에 붙어있는 장치의 명칭은 hyperdrive이다.
