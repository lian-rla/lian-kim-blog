---
title: "2025/9/4(목)"
date: "2025-09-04"
categories: "research"
author: "lian"
emoji: "🔬"
---

**DLC multi GPU**

Deeplabcut에서 gpu 2개를 학습에 모두  사용하기 위해서는 multi gpu 백엔드 개발이 필수적이다. 현재 사용중인 gpu의 환경은 3090이 2개인 환경과 tensorflow를 사용하여 deeplabcut을 사용중인데, 이 tensorflow에서 multi GPU를 사용하기 위해서 많은 test를 진행했다. 

결론을 말하자면, tensorflow에서 mulit GPU를 사용하여 학습하는 것은 실패했다. tensorflow에 대한 정보가 부족할 뿐만 아니라, tensorflow 자체가 single GPU 전이 학습에 특화되어 있는 인공신경망(engine)이다. 그리하여 tensorflow에서 multi GPU를 setting하기 위해서는 처음부터 끝까지 모두 손 봐야하는 대공사가 이루어져야 한다. 그렇다면 multi GPU를 사용할 수 있는 방법이 없는 것 인가?

multi GPU를 사용하기 위해서는 Engine을 교체하여 deeplabcut을 사용하는 방법으로 multi GPU setting을 시도해 보았다. 또한 Engine에 맞는 deeplabcut version 또한 맞추어 주는 작업을 진행했다. 실험자가 사용한 engine은 pytorch이다. pytorch는 facebook에서 개발한 engine인데 deeplabcut에서 사용되는 resnet image 전이학습 또한 facebook에서 개발한 것이기 때문에 호환성이 좋을 것이라고 판단하였고, tensorflow보다 설정의 난이도가 어렵지 않다고 생각되어 pytorch를 선택하게 되었다.

먼저 pytorch를 사용하기 위해서 deeplabcut 최신 version인 3.0을 conda 가상환경에 새로 설치해 주었다.

```
**conda create -n DEEPLABCUT python=3.11 -y
conda activate DEEPLABCUT**
```

위 명령어를 통해 새로운 conda 가상환경을 생성하여 설치를 진행해주었다.

추가로 pip에 사용될 기본 도구들 또한 한번 업그레이드를 진행하여 최신 version을 사용해 주었다.

python -m pip install --upgrade pip setuptools wheel

pytorch도 tensorflow와 마찬가지로 gpu에 따른 cuda version을 맞춰야 하기 때문에 cuda 또한 따로 설치를 진행해 주었고, pytorch에 RTX 3090과 호환이 될 수 있도록 연동시켜 주었다. tensorflow때와 똑같이 cunda는 11.8 version을 사용하여 진행했다. 

conda install -c conda-forge tables==3.8.0 -y
python -m pip install "torch==2.3.1" torchvision --index-url https://download.pytorch.org/whl/cu118

마지막으로 deeplabcut 최신 version인 3.0 version을 새롭게 만든 conda 가상환경에 version을 입력하여 설치를 진행해 준다.

```
python -m pip install --pre "deeplabcut&#091;gui]==3.0.0rc10"
```

그 후 deeplabcut을 실행시켜 준다. 

새로운 version의 deeplabcut의 가장 큰 장점은 create training dataset을 진행하게 되면, 각 engine에 맞는 yaml file을 생성하여 training setting을 진행할 수 있다는 것이다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image.png?w=800)

 왼쪽과 오른쪽의 차이를 본다면, 오른쪽에는 dlc-models-pytorch라는 folder가 생성되었다. 반면 왼쪽 project folder에는 존재하지 않는다. dlc에서 자체적으로 train folder를 만들어 주어, train에 사용될 데이터를 사용자가 원하는 설정을 할 수 있게 만들어 준 것이다. dlc-models-pytorch 안에는 pytorch_config.yaml file이 존재한다. 위 file에 multi gpu를 사용할 수 있도록, github의 코드를 참고하여 코딩을 진행한다면, multi GPU를 사용할 수 있을 것이라 판단했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-1.png?w=800)

다른 dlc-models-pytorch folder내에 존재하는 설정을 GPU에 맞추어 진행해 주었다. 가장 중요한 부분은 config.yaml 파일의 수정이라 생각한다. 리스트 값으로 컴퓨터에 설치된 2개의 GPU(0,1)을 잡아주었고, train_settings에서 학습에 사용될 hyper parameter를 조정해주었다. 추가로 tensorflow의 dlc에서는 batch size 가 4 혹은 8이 최대였지만, pytorch에서는 그 보다 더 증가한 32로 학습을 진행해 보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-3.png?w=800)

학습을 진행하며 powershell을 통해 GPU util을 비교해 본다면, single GPU의 학습은 학습 중 0 GPU의 util 값만 올라가는 결과를 보여주지만, multi GPU의 학습은 학습 중 0,1의 GPU 모두 util값이 증가하는 결과를 보여주었다. 아직까지는 전이학습의 GPU 학습 값을 제대로 설정하지 못 하였지만, 위 multi GPU의 학습 코드를 가지고 학습을 진행 후 labeling 된 영상 출력을 진행해 보았다. 

이번 test는 실험하고 있는 쥐를 정면에서 촬영한 영상을 가지고 test를 진행하였고, labeling은 쥐의 양쪽 눈과 코를 labeling 후 skeleton까지 그리는 test를 진행했다. 

multi GPU로 학습한 training data를 가지고 labeling된 영상을 출력해 본다면, 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-4.png?w=800)

쥐가 행동을 보이지 않고 멈춰있을 때는 높은 정확도의 labeling 결과를 보여주었다. 하지만 쥐가 달리기를 시작했을 때, label이 손실되거나 크게 이동하는 모습을 보였다. label이 튀는 결과가 한 두번만 존재하는 것이 아닌 쥐가 달릴때마다 계속 발생했고, 심지어는 가만히 있는 코의 label도 제대로 되지 않는 결과를 많이 보여주었다. 그렇다면 multi GPU 설정의 문제일까? 문제의 원인을 알기 위해 single GPU로 설정을 변경한 뒤 학습 후 labeling된 영상을 출력하여 비교해 보았다.   

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-5.png?w=800)

마찬가지로 single GPU 또한 labeling이 좋지 못한 결과를 보여주었다. 쥐가 멈춰 있을 때는 3 부위의 labeling과 skeleton이 제대로 그려지지만, 쥐가 뛰기 시작하는 순간 label이 없어지며 심지어 label이 크게 튀는 결과 또한 보여주었다.  위 test를 통해 알 수 있었던 사실은 multi GPU data 처리에는 크게 문제가 없어 보인다. 기본 single GPU 설정을 사용하여 multi GPU의 학습 label의 위치와 설정을 동일하게 두어 test를 진행했지만, single GPU 설정에서도 좋지 못한 결과를 보여준 것을 보았을 때 DLC 3.0 version의 문제이거나 아니면, analyze video  설정과 training 설정이 충돌하는 것일 수도 있겠다고 추측했다. 추가적으로 다음 test는 label의 위치를 변경해야 될 것 같다고 판단했다. 위 test에서 numframe2pick을 200을 주어 학습에 사용할 영상에서 200개의 frame을 뽑아 눈에 labeling을 진행하였다. 이때 쥐가 눈을 감은 frame이 몇개 존재하지 않는데, 이를 ai가 학습을 잘 못하는 것인지 출력된 영상을 보면 쥐가 눈을 감으면 label이 없어지거나 크게 튀는 결과를 보여주었다. 실험하는 쥐를 위에서 촬영한 영상은 쥐의 신체부위가 가려지더라도 실험자가 위치를 추론하여 labeling을 진행하더라도 label이 잘 손실 되지 않는 결과를 보여주었지만, 정면에서 촬영한 영상은 쥐가 고개를 완전히 틀어버리거나 licking port에 잠시 가려지는 frame들이 존재했다. 정면에서 촬영한 실험의 영상을 가지고 어떠한 위치에 label을 찍을 지에 대한 고민을 해봐야 될 것 같다.
