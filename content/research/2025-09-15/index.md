---
title: "2025/9/15(월)"
date: "2025-09-15"
categories: "research"
author: "lian"
emoji: "🔬"
---

DLC 2.11.3 version으로 백업과 tensorflow engine으로 gpu를 setting하는 과정을 완료하였다. 그 후 test를 위해 2.11.3 version에서 학습 test를 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-7.png?w=800)

test를 진행한 결과 학습을 진행하게 되면 iteration이 증가는 하지만 maximum iteration에 도달하게 되면 RuntimeError가 발생했다. 처음에는 batch size의 문제인가 싶어 batch size를 최소 범위인 1로 잡아 학습을 다시 진행했지만, 결과는 똑같았다. error을 해결하기 위해 conda 가상 환경으로 돌아가 tensorflow 설정을 다시 진행했다. tensorflow 설정을 다시 진행하던 중, multi GPU 설정에서 사용중이던 pytorch 리소스 팩이 GPU 0과 GPU 1이 충돌중인 것을 확인 하였고, pytorch 설정 즉 multi GPU 설정을 완벽하게 지우는 과정을 진행했다. 

pytorch engine 설정을 지운 뒤 다시 tensorflow engine 환경에서 학습을 진행하니 RuntimeError가 발생하지 않았다. 그리하여 multi GPU 환경에서 진행한 쥐의 눈과 코를 labeling한 learning test를 출력시켜 보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-8.png?w=800)

영상의 결과는 label이 크게 튀지 않는 결과를 보여주었다. 원래 사용하던 pipeline 설정과 동일하기 때문에 label이 튀거나 엉뚱한데 찍히는 결과는 거의 보여주지 않았다. multi GPU 설정에서 크게 튀던 영상의 부분도 tensorflow engine(single GPU) 설정에서는 label이 튀지 않는 결과를 보여주었다. 추가로 쥐가 심하게 달리는 부분에서도 label이 잘 따라가는 결과를 보여주었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-9.png?w=800)

tensorflow(single GPU) 설정에서 pipeline test와 같이 보이지 않는 쥐의 신체부위를 실험자가 위치를 추론하여 labeling을 진행 후 DLC에서 학습을 진행하여 출력을 진행해 보았다. 위 사진처럼 쥐의 왼쪽 눈이 보이지 않지만 사용자가 추론한 위치를 잘 따라가 labeling을 진행한 모습을 확인할 수 있었다. 원래 사용하던 pipeline과 성능이 똑같아진 것이라고 확인할 수 있는 결과라고 생각한다.

그렇다면 다시 정확도가 높은 pipeline으로 돌아왔기 때문에 정면에서 촬영한 쥐의 실험 영상을 가지고 어느 위치에 labeling을 진행하여 behavior 데이터를 뽑을 것인지 고민해 보아야 했다. 먼저 정면 영상과 측면영상을 같이 사용하여 쥐가 port를 licking 할때 tongue와 어떠한 행동을 보이는지 확인해 보려고 했다. 하지만 측면에서 촬영한 영상은 대비가 너무 낮고, 화질이 너무 낮아 육안으로 쥐의 신체 부위를 확인하고 labeling을 진행하기는 어려운 영상이라고 판단했다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-10.png?w=800)

또한 모니터 빛만 존재하는 실험 환경이기 때문에 영상의 대비가 심하게 변화하는 문제도 존재했다. 이러한 문제로 인해 일단은 측면에서 촬영한 영상은 잠시 놔두고 정면에서 촬영한 영상을 가지고 test를 더 진행하기로 결정했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-13.png?w=800)

왼쪽 오른쪽 눈, 코 3가지로 labeling을 진행했다면 이번에는 여러 bodypart로 나눠 labeling을 진행해 보았다. 양쪽 눈은 동서남북 4가지 방향으로 동공의 크기에 맞게 labelling을 진행하였고, 코 부분은 실험 중 쥐가 항상 코를 통해 냄새를 맞거나 환경에 적응하는 모습을 보이는 것 같아 코 윗 부분, 왼쪽 오른쪽 콧구멍, 인중으로 4가지 bodypart 로 나눠 labeling해 주었다. 또한 입은 윗 입술과 아랫 입술로 나눠 labeling 하였고, licking 할때 tongue이 나타날때만 tongue은 labeling해 주었다. 추가적으로 whisker도 labeling을 진행하고 싶어 학습에 사용할 영상을 ffmpeg을 사용하여 화질을 최대한으로 높혀 whisker가 보이는지 test를 해보았지만, 아쉽게도 whisker는 잘 보이지 않았다. 카메라의 물리적인 한계로 인해 잘 보이지 않는 것이다. ai를 사용하여 화질 개선을 시도를 해볼까 생각했지만, 사용하게 된다면 영상의 pixel 갯수가 증가하기 때문에 원본영상과는 많이 달라져 분석과정에서 문제가 발생할 수 있을 것이라고 생각하여 진행하지 못하였다. whisker를 어떠한 방법으로 labeling을 진행할지 좀 더 고민해 보아야 할 것 같다.
