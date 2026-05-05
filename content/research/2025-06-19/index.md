---
title: "2025/6/19(목)"
date: "2025-06-19"
categories: "research"
author: "lian"
emoji: "🔬"
---

Install Deeplabcut GUI

**1.summery**

deeplabcut은 동물이나 곤충의 자세를 추정할 수 있는 딥러닝 python tool이다.오늘은 deeplabcut을 필자의 Mac OS체제의 apple silicone(M1) macbook에 install 후 deeplabcut testing을 진행하였다.

> deeplabcut github : [https://deeplabcut.github.io/DeepLabCut/docs/installation.html](https://deeplabcut.github.io/DeepLabCut/docs/installation.html)^[1](http://localhost:8888/wordpress/?p=19#b292a786-45f8-4095-85e6-9e9eab58a2f0)^

> 
> 
> 
> 
> - github에 존재하는 deeplabcut 정보를 참고

> 
> 
> 
> 
> **2.Process**

> 
> 
> 
> **2.1 Tool Install**

deeplabcut을 실행시키기 위해 몇 가지 tool들이 필요하다.

1. python 

2. conda

3. PyTorch

**2.1.1 Python**

필자의 MacBook Pro에는 python이 이미 install 되어 있어 version만 확인 후 python install stage는 넘어가겠다.

terminal에 

```
python --version
```

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-2.26.02.png?w=972)

을 입력하여 python version을 확인한다.

python version을 확인하는 이유는 다른 tool들과 version이 맞지 않으면Compatible이 되지 않기 때문에 check는 필수다. 

(python version을 change 하는 방법은 1.2 conda에서 설명)

**2.1.2 Conda**

가상환경을 만들고 관리하기 위해 conda를 사용해준다.

terminal에 

```
conda --version
```

을 입력하여 conda –version을 확인한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-2.51.24.png?w=1024)

- conda version – 25.5.1

deeplabcut용 가상환경을 구축하기 위해 conda 환경을 만들어준다.

```
conda create -n dlc python=3.10
       conda activate dlc
```

terminal에 입력하여 가상 환경을 생성한다.

(이때 deeplabcut의 python version 과 compatibility되는 version으로 구성할 것)

**2.1.3 PyTorch **

- 필자의 notebook 운용체제는 Mac os이기 때문에 PyTorch를 install 했지만, window 운용체제를 사용한다면 TensorFlow를 설치해야 한다.

Pythorch는 AI,ML,DL을 위한 open source DL frame work이다. 

`conda install PyTorch torch vision torchaudio - c PyTorch`

terminal에 입력하여 Pytorch를 install 해준다.

**2.2 Install Deeplabcut**

`pip install "deeplabcut[gui]`

terminal에 deeplabcut를 gui version으로 install 해준다.

**2.2.1 error**

deeplabcut을 install하는 과정에서 error가 발생했다.

`error : no module named deeplabcut`

위 error는 conda 환경이 활성화 되지 않았을 때 발생하는 error이므로 conda 환경을 다시 check 했다.

`conda activate dlc`

terminal 에 입력하여 conda 환경을 확인하고,

`pip show deeplabcut`

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-3.32.43.png?w=1024)

terminal에 입력하여 설치를 확인 했다. 

하지만 아무 결과도 나오지 않아 deeplabcut의 install이 제대로 되지 않은 상태라고 판단하여 deeplabcut의 install을 다시 진행했다.

`ERROR: Could not find a version that satisfies the requirement steuptools (from versions: none) `

`ERROR: No matching distribution found for steuptools`

deeplabcut의 install을 다시 진행했지만, error가 발생했다.

conda 환경에서 pip 설치 과정에서 나타나는 channel 과 network error로 판단하고, conda 환경 설정 및 channel setting update를 하기로 결정했다. 

`conda config --add channels conda-forge
conda config --set channel_priority strict
conda update --all`

terminal에 입력하여 conda channel setting을 update 시켰다.

`conda install pip setup tools wheel`

설치 오류가 있는 현재 환경에서 pip와 setuptools을 재설치 한다. 이렇게 하면 pip와 setuptools이 conda의 안정적인 channel을 통해 설치된다.

모든 환경을 다시 install 했지만 error가 발생해 deeplabcut의 GUI는 포기하고 CLI로 구성을 해볼까 생각했지만, 처음부터 모든 환경을 제거하고 다시 install 했다.

**2.2.2 solution**

필자가 Mac OS라는 환경이 window os와 지식이 충돌하여 error가 발생한 것 같다.

Mac OS의 환경 특징을 확인하여 conda를 miniconda로 설치하고 deeplabcut 전용 conda환경을 만들어 준 후 wxPython을 설치해주고자 하였다.

1. miniconda 설치

2. deeplabcut 전용 conda 환경 생성

3. 환경 활성화 후 wxPython 설치

4. deeplabcut GUI 실행

**2.2.2.1 miniconda 설치**

`wgethttps://repo.anaconda.com/miniconda/Miniconda3py310_4.12.0-MacOSX-arm64.sh -O ~/miniconda.shbash~/miniconda.sh -b -p $HOME/miniconda
source "$HOME/miniconda/bin/activate"conda init zsh`

terminal에 위 명령어로 Apple silicon용 Miniconda를 설치한다.

**2.2.2.2** **deeplabcut전용 conda 환경 생성**

`git clone https://github.com/DeepLabCut/DeepLabCut.git
cd.DeepLabCut/conda-environments
conda env create -f DEEPLABCUT.yaml`

deeplabcut 공식 DEEPLABCUT.yaml 환경 파일을 사용하여 deeplabcut의 GUI를 포함한 기본 설치를 진행한다.

**2.2.2.3환경 활성화 후 wxPython 설치**

`conda activate DEEPLABCUT
conda install -c conda-forge wxpython`

환경을 활성화 하고 GUI 관련 wxPython을 설치한다.

**2.2.2.4 deeplabcut GUI 실행**

`python -m deeplabcut`

GUI를 실행하여 GUI탭이 정상적으로 열리면 된다.

**3. result**

**3.1 deeplabcut** **action**

`conda activate DEEPLABCUT
python -m deeplabcut`

terminal에 입력해 deeplabcut GUI를 실행시킨다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-4.23.17.png?w=1024)

terminal에 입력이 완료되면 GUI가 실행된다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-1.44.02.png?w=1024)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-1.54.38.png?w=1024)

create new project를 통해 영상을 넣으면 동물의 부위별 위치에 labelling을 얻을 수 있다.

하지만 github에서 sample 영상을 찾아 봤지만 sample 영상이 존재하지 않아 테스트를 진행하지는 못하였다. 영상이 있다면, project를 생성하여 부위별 labelling위치가 잡히는지 테스트 할 수 있을 것 같지만, 필자의 development 환경의 한계로 labelling이 제대로 잡히지는 않을 것 같다.(GUI의 무가 가장 큰 이유) 

**3.2 similary project**

필자가 진행했던 project중에 deeplabcut과 similary 한 tool인 mediapipe를 설명하고자 한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-19-ec98a4ed9b84-4.49.32.png?w=1024)

mediapipe는 Google에서 개발한 livetime multimodule로 ai computer vision에 특화된 open source이다.

위 사진처럼 손의 21개의 관절을 추적하여 제스처를 인식할 수 있다. mediapip와 deeplabcut은 둘다 pose estimation을 할 수 있는 frame work이지만 차이가 존재한다. 필자는 mediapipe를 python을 통해 수화 언어 인식 program을 개발했을 때는 mediapipe는 이미 pretrained 된 AI라 수화(카메라로 수화 spelling을 학습)를 직접하여 data를 얻어 개발환경을 구축했다. deeplabcut는 사용자가 직접 원하는 위치를 labeling후 학습시켜야 된다는 차이가 존재한다. AI 학습으로 인해 GPU가 필요로 한 것이고, 이러한 이유때문에 필자의 Mac OS 환경에서 deeplabcut를 활용하여 data를 얻기 어려울 것이라고 판단된다.
