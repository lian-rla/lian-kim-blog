---
title: "2025/11/13 (목)"
date: "2025-11-13"
categories: "research"
author: "lian"
emoji: "🔬"
---

금일 진행한 progress meeting을 통해 정해진 사항들과 지금까지 진행했던 내용들을 정리해보는 시간을 가졌다.

**Progress meeting**

먼저 unreal log를 통해 영상 정보를 사용자에게 보여줄 수 있는 실시간 figure를 만들고자 영상에 출력되는 timestamp를 easyOCR을 활용하여 개발을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-20.png?w=800)

결과물을 보게 되면, 영상에 함께 출력 되는 timestamp의 추출에 성공하였고, 추출된 timestamp는 CSV file 형태로 저장되어 사용자에게 제공된다.  

이번 미팅에서 논의된 가장 중요한 내용은 위 timestamp 추출 알고리즘을 활용하여, 추후 프로젝트의 방향성을 결정하는 것이 가장 중요한 논재였다. 교수님에게 총 2가지의 방향성을 제시해 드렸고, 컨펌을 받았다. 

**1.GUI 구성**
첫 미팅에서 결정된 사항으로 timestamp를 통해 unreal log와 동일한 frame을 추출하는 알고리즘의 설계에 성공했기 때문에 GUI에 여러가지 사항들을 추가해 볼 수 있다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-22.png?w=800)

timestamp가 출력되는 영상(측면영상)만 가지고 쥐의 behavior를 판단하는데 한계가 존재한다고 생각했다. 영상판독은 여러 각도에서 촬영된 영상을 같이 볼 수록 판독률이 올라가고 특정 행동을 파악하는데 더 용이하다고 생각한다. 그리하여 timestamp가 출력되는 영상을 기준으로 다른 각도의 영상들도 측면영상과 동일한 시점에서 재생되는 GUI 구성을 하는 것으로 방향성을 잡아보았다. 재생 뿐만 아니라 사용자가 원하는 timestamp를 입력하면 모든 영상이 그 구간의 frame을 출력하여 영상이 재생되는 기능을 추가하는 것도 좋은 방향이라고 생각했다.
또한 영상 뿐만이 아닌, unreal log를 사용했기 때문에 실험에서 알 수 있는 정보(몇 번째 trial을 진행중인지, 어느 port를 licking 했는지)를 GUI 구성에 추가하여 사용자가 실험 정보를 한 눈에 볼 수 있도록 만드는 것도 가능하다고 생각했다. 

2. task structure를 인식하고 있는 행동 분석
위 방향성은 수민 선배님께서 먼저 제시해주셨다. 쥐가 task를 진행하는 중에 ITI화면이 나오기 전에 멈추는 행동과 ITI화면이 끝나고 main task 화면이 나오기 전에 먼저 출발하는 행동을 보였고 이러한 행동은 쥐가 task structure를 인식하고 있는 행동이며 학습이 되었다는 증거로 사용될 수 있다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-23.png?w=800)

위 행동을 분석하기 위해서는 쥐가 달리고 있는 속도를 알아내는 것이 중요하다. unreal log에 쥐의 속도가 나타나지만 수민 선배님의 실험 설계상 ITI화면으로 넘어가게 되면 unreal log에 쥐의 달리는 속도가 출력이 되지 않는다. 이러한 이유로 ITI 화면이 나타나게 되면, 쥐가 달리는 속도를 판별하지 못 하기 때문에 unreal log의 데이터 만으로는 task structure를 인식하고 있는 행동을 판단하기에는 어려움이 존재한다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-24.png?w=800)

해결방안으로는 DLC를 사용하여 쥐의 발 부분에 labeling을 진행하고, label 데이터를 얻어 ITI화면 상에서의 쥐의 달리는 속도를 label 데이터의 이동으로 간접적으로 얻는 방법을 생각했다. 추가적으로 timestamp 추출 알고리즘을 통해 unreal log와 매핑한 데이터까지 사용하게 된다면 영상에서 어느 구간이 몇 번째 trial을 진행중 인지도 알 수 있을 것이라고 판단했다.

2가지 방향성 중 교수님께서는 task structure를 인식하고 있는 행동에 대해 더 분석해 보라고 말씀하셨다. 추가적으로 쥐의 발 부분만 labeling하여 속도만 구하는 것이 아닌 추후에 head 부분 또한 labeling 하여 head direction도 판단해 보는 방향성을 제시해 주셨다. 또한 timestamp출력 알고리즘은 수민 선배님의 실험 영상 데이터의 timestamp가 CSV file의 형태로 출력이 되지 않는 문제가 있기 때문에 개발한 알고리즘이다. digitalynx에서 timestamp가 csv file의 형태로 출력 후 저장이 된다면 온전한 timestamp를 알 수 있기 때문에 VR setup에서 digitalynx로 출력되는 timestamp를 온전한 text data로 출력하는 방법을 찾아보라고 말씀해 주셨다.

그리하여 다음 프로젝트는 DLC 와 timestamp 추출 알고리즘을 활용하여 task structure를 인식하고 있는 행동에 대해 분석하는 것으로 방향성을 잡고 계획을 수립했다.

**Plan**

현재 text structure를 인식하고 있는 행동을 보인 쥐는 1008이며 약 2trial 정도가 이러한 행동을 보였다.(LE1008- 15 - trial15,25) 여러 쥐들의 영상을 아직 판독해보지는 않았지만, test 데이터로 LE1008의 DAY 15영상을 사용하는 것으로 잡았다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-25.png?w=800)

영상판독
영상 판독을 진행 후 어떠한 영상의 구간의 data가 task structure를 인식하고 있는 행동인지 파악해 볼 예정이다. 현재까지 1008의 DAY 15만 인식하고 있기 때문에 test를 진행할 data가 부족하다고 판단되어 먼저 위 계획을 진행할 예정이다.

DLC
완료된 test 영상을 기준으로 labeling을 진행 후 DLC 학습을 진행시켜 각 frame에 존재하는 label의 좌표를 출력할 예정이다. 계획으로는 쥐의 측면에서 촬영한 영상을 사용 할 것이며, 쥐의 발 부분 labeling을 진행해 볼 예정이다.

Label data 활용
DLC로 출력된 label data를 가지고 쥐의 속도를 계산하는 알고리즘의 로직을 짜볼 예정이다. 현재 계획중인 부분은 label data만을 가지고는 쥐의 절대속도를 출력하기는 어렵다. 하지만 label이 언제 움직이고 다시 그 구간에 돌아오는지는 판단이 가능하기 때문에 쥐의 상대속도를 label의 좌표를 통해 계산해 본다면 충분히 쥐의 속도를 상대적으로 알 수 있을 것이라고 생각한다.

알고리즘 개발
label data를 통해 쥐의 상대속도를 알아내는 방법을 알았다면, python code를 통해 쥐의 상대속도를 출력하는 알고리즘을 개발해볼 예정이다. 예상으로는 csv file의 형태로 label data를 받고 csv file의 형태로 상대속도를 각 frame 당 기록해 저장 후 사용자에게 보여주는 형태의 code로 개발을 진행할 예정이다.

visualization
알고리즘을 통해 쥐의 상대속도를 숫자화 했다면, 이 데이터를 가지고 figure로 시각화하는 작업까지 진행해 볼 예정이다. 예상으로는 쥐가 ITI화면 전에 속도가 급격하게 감소하는 그래프를 보여주거나, ITI화면에서 main task 화면으로 넘어갈 때 속도가 급격하게 증가하는 그래프의 결과를 보여주면 이상적인 visualization이라고 판단한다.
