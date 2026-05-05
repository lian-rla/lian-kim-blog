---
title: "2025/6/26(목)"
date: "2025-06-26"
categories: "research"
author: "lian"
emoji: "🔬"
---

**Fluorescence imaging**

금일은 필자가 어제 진행한 staining한 histology샘플들을 가지고 Imaging을 진행했다. 지하 1층에 존재하는 현미경을 가지고 촬영을 진행했다.

imaging을 설명하기 전 준비하는 단계를 설명하겠대.

1. 시작 전 현미경 전체샷, 플레이트샷 총 2장을 촬영한다. - 보고서 제출용

2. 컴퓨터 본체를 킨다.

3. 현미경을 킨다. 이때 렌즈가 4x(빨간줄)로 맞추어져 있는지 확인한다.

4. 수은램프를 킨다. ignition도 켜준다.

5. 카메를 킨다.

6. 컴퓨터에서 NIS를 실행한다. *카메라를 먼저 킬 것

위 단계를 마무리하면 imaging할 준비가 되었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9784.jpeg?w=768)

(금일 필자가 사용한 현미경)

현미경을 가지고 촬영하는 방법을 설명해보자면,

1. NIS에서 Edit -> option -> save next에 들어가 자동저장을 설정해 준다.

- 위 내용을 해야 사진의 이름이 원하는 이름으로 자동저장되어 찾기 편하다.

- ex) LE 30 -1-1

2. glass를 위 아래로 한번 뒤집고 plate에 올려준다.

3. 촬영에 맞는 형광램프를 선택한다.

- DAPI는 5번

- EYFP는 4번

4. 그 후 setting 값을 형괄램프에 맞게 맞춰준다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9783.jpeg?w=768)

(필자는 DAPI는 AE를 800ms, gain은 1.0을 주었고, EYFP는 2s gain은 2.8을 주었다.)

      5.  DAPI램프를 먼저 선택하고, 초첨을 맞춰준다.

      6.  %를 69로 맞춰준다.

      7.  burn scale을 눌러 배율을 삽입한다. (처음 사진에서만 진행)

      8. 카메라 버튼을 눌러 촬영한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9788.jpeg?w=1024)

금일 필자가 촬영한 DAPI 이다. 촬영이 깔금하게 된 거 같진 않지만 세포 핵의 염색이 잘 되어있는 것을 확일 할 수 있다. 추가적으로 DAPI를 촬영 후 plate를 건드리지 않고 형광램프를 5번에서 4번(EYFP램프)으로 변경하여 촬영를 한 번 더 진행한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9789.jpeg?w=1024)

위 사진은 형광램프만 4번으로 변경하여 촬영을 진행한 결과이다. hipocampus에 virous가 초록색으로 잘 보이는 모습을 볼 수 있다. virous는 쥐를 sacrifice하기 전 hipocampus에 virous를 주입하여 며칠 동안 기다린 후 쥐가 완전히 virous를 흡수하면 sacrifice를 진행하여 histology과정을 진행한다. 

result

금일은 DAPI와 EYFP로 LE 30의 1~9번까지 촬영을 진행했다. 추가적으로 7번부터는 크기가 커 왼쪽 오른쪽 나누어서 촬영을 진행했다. 중간에 EYFP 촬영 결과값이 잘 보이지 않아 이예빈 선배님과 상의 후 AE값을 800ms에서 2s로 변경하였다. 변경하니 확실히 잘 보이는 결과를 얻을 수 있었다.  

**window os deeplabcut install**

명일 computer가 setting되어 deeplabcut project를 진행할 수 있을 것 같다. 그러기 위해서 필자는 apple slicon환경에서만 deeplabcut을 install해봤기 때문에, window os 환경에서도 install하는 방법에 대해 정리해보고 명일 바로 실행 할 수 있도록 준비해보았다.

1. 먼저 anaconda를 window용으로 설치해준다.

- 설치 시 관리자 권한(admin)으로 설치한다.

2. anaconda설치 후 anaconda prompt를 관리자 권한으로 실행시킨다.

3. NVIDIA 사이트에서 GPU모델에 맞는 드라이버 설치 후 **nvidia-smi** 명령어로 정상 작동하는지  확인한다.

4. cuda toolkit을 설치한다. <- conda에서 설치 

- conda install pytorch-cuda=11.8 -c pytorch -c nvidia

- conda create -n deeplabcut python=3.10

- conda activate deeplabcut

- conda install -c conda -forge pytables=3.8.0

- conda install pytorch pytorch-cuda=11.8 torchvision -c pytorch -c nvidia (GPU 전용 명령어

5. GPU 활성화를 확인한다.

- python -c "import torch; print(torch.cuda.is_available())"

- True 이면 성공

6. conda 환경을 생성한다.

- conda create -n deeplabcut python=3.10

- conda activate deeplabcut

- conda install -c conda-forge pytables=3.8.0 <- 필수 패키지 설치

- conda install pytorch cudatoolkit=11.3 -c pytorch

7. deeplabcut GUI를 설치한다.

- pip install --pre deeplabcut[gui]

- pip install deeplabcut[gui,tf]

명일 위 과정을 통해 setup한 window os 환경에서 deeplabcut install을 진행해 보겠다. 우려하는 부분은 필자가 GPU를 통한 cuda를 사용해 보지 않아 우려스럽지만, 명일 setup을 진행하여 test를 진행해 보겠다.
