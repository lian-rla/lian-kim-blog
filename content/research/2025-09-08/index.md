---
title: "2025/9/8(월)"
date: "2025-09-08"
categories: "research"
author: "lian"
emoji: "🔬"
---

multi GPU 설정을 리셋시키고 원래 사용하던 pipeline의 version을 사용하여 정면에서 촬영한 실험 영상의 테스트를 진행하기로 결정했다. 정면에서 촬영한 실험 영상에서 어떤 부위를 labeling 할지 판단하는 것이 더 중요하다고 생각하였고, multi GPU 설정을 계속 사용하여 학습을 진행한다면, label이 튀는 문제가 GPU 설정 문제인지 아니면, 실제 신체 부위의 targeting이 어려운 부위인지 실험자가 판단하기 어렵다고 생각하였다. 그리하여 높은 정확도를 보여주었던 원래 pipeline version인 dlc 2.11.3 으로 다시 setting을 진행하였고, engine 또한 pytorch에서 tensorflow로 다시 바꾸어 설정을 진행했다. 

dlc 2.11.3 version을 설치하면서 문제는 다른 가상환경에 설치된 dlc 3.0과 계속 충돌하는 이슈가 있었다. 그리하여 conda 가상환경을 필요로 하는 환경만 두고 삭제해주기로 하였다. 

```
conda env list
```

위 명령어를 입력하면 현재 존재하는 conda의 가상환경을 보여준다. 

```
remove -n <가상환경 명칭> --all
```

<가상환경 명칭>란에 실험자가 지우고 싶은 가상환경 명칭을 넣어 실행시킨 후 conda 가상환경에서 지워준다. 

마찬가지로 cuda와 cudnn version은 pipeline과 모두 동일하게 설치를 진행해 주었고, dlc 와 tensorflow version 또한 pipeline과 동일하게 진행했다. dlc와 tensorflow 설치 과정은 전에 진행했던 과정과 똑같기 때문에 자세한 설명은 넘어가겠다. 

dlc 2.11.3 version 설치를 모두 완료하였고, labeling test를 진행하기 위해 project를 새로 만들어 주었다. multi GPU 설정에서 사용한 label 위치와 동일한 위치인 양쪽 눈, 코 3가지를 labeling을 진행하여 학습을 진행하였다. labeling 위치를 multi GPU와 동일한 위치를 labeling한 이유는 multi GPU 환경에서 정면을 촬영한 실험 영상의 label 위치가 크게 튀는 결과를 보여주었다. 크게 튀었던 이유가 multi GPU 설정이 문제인지 아니면, dlc 전이 학습이 쥐의 눈과 코를 targeting  하는데 어려움이 있는지 test 하기 위해 label의 위치를 똑같이 설정하여 학습을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-6.png?w=800)

nvidia-smi를 DLC가 학습하는 중 보게 되면 single GPU 즉 GPU 0만 GPU-Util만 올라가는 결과를 확인했다. GPU를 한개를 사용하다보니 확실히 multi GPU를 사용했던 학습과 비교했을 때 epoch가 천천히 늘어나는 결과를 확인할 수 있었다. 15시에 학습을 시작하였지만, 20시인 현재 iteration이 아직까지 29000인 점을 생각하면 확실히 학습에 많은 시간이 소요되는 것을 알 수 있다. 추가로 single GPU만 사용하기 때문에 batch size가 4로 크게 줄어들었다. multi GPU를 사용할 때는 batch size가 32를 사용할 수 있었지만, single GPU로 학습을 진행하니 4가 최대 batch size였다. pipeline 구축 했을 때 test한 결과와 똑같은 결과를 보여주었다. 

학습이 종료된다면 anaylze video를 통해 labeling된 video를 print 하여 labeling의 손상을 확인할 것이며, 추가로 multi GPU를 사용하여 print 된 label의 영상과 비교하여 만약 single GPU DLC의 label이 손상이 없기 좋은 결과를 보여준다면, multi GPU 학습 설정의 오류인 것이며, single GPU DLC의 label이 손상이 크다면, DLC가 정면에서 촬영한 실험 영상에서 눈과 코는 전이 학습하기 어려운 part 로 판단할 수 있을 것 같다.
