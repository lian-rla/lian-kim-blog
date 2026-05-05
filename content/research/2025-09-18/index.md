---
title: "2025/9/18(목)"
date: "2025-09-18"
categories: "research"
author: "lian"
emoji: "🔬"
---

월요일부터 학습시킨 정면에서의 세부적인 bodypart의 학습이 완료되어 labeling 된 video 출력을 진행했다. 결과를 본다면,

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-14.png?w=800)

우려했던 것 보다 label이 쥐의 신체 부위를 잘 따라가 주는 결과를 보여주었다. 쥐가 달리기 시작했을 때도 label이 잘 따라가주는 모습을 보였다. 하지만 부족한 부분은 존재했다. labeling된 영상을 출력하기 위해 input한 영상에서 약 12초정도 쥐가 그루밍을 하는 부분이 존재했다. 이 부분의 labeling의 결과를 본다면

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-15.png?w=800)

label이 쥐의 신체부위를 잘 따라가 주지 못하는 결과를 보여주었다. 손으로 그루밍을 심하게 하지 않을 때는 그나마 label이 잘 따라가지만 손으로 그루밍을 크게 진행할 시 label이 많이 없어지는 결과를 보였다. 12초 가량 짧게 그루밍을 진행한 것이지만, 그루밍은 쥐의 behavior를 판단 시 중요한 지표라고 생각되기 때문에 쥐가 그루밍을 할 때도 labeling이 잘 따라가주는 결과를 보여주어야만 behavior를 측정할 수 있다고 판단했다. 그렇다면 왜 그루밍시 label이 많이 없어지는 결과를 보여주었을까?

세부적인 bodypart를 학습시킬 때 실험자는 200개의 frame을 가지고 labeling 데이터를 만들어 DLC에 학습시켰다. 이때 200개의 labeling 중 쥐가 그루밍을 하고 있는 frame은 2개 밖에 존재하지 않았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-16.png?w=800)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-17.png?w=800)

학습에 사용한 영상에서 그루밍을 하고있는 frame의 갯수가 현저히 적었다.  위 2개의 사진이 학습에 사용된 frame 중 그루밍을 하고 있는 frame이다. 왼쪽은 DLC 학습시 사용한 frame이며 오른쪽은 DLC가 학습 후 그루밍한 frame에서 label의 위치를 나타낸 사진이다. 2개라는 적은 frame으로 그루밍을 배웠기 때문에, 출력한 영상에서 그루밍의 label을 잘 찍어내지 못 했을 것이라고 판단된다. 그렇다면 그루밍 같은 특정 행동은 어떻게 labeling을 진행하여 학습시켜야 할까?

당장 생각나는 해결법은 2가지이다. 첫 번째로는 사용자가 직접 frame을 선별하여 원하는 행동을 학습시키는 방법이다. DLC의 num frame 2 pick의 기능을 사용하여 학습에 사용할 frame을 출력했다면, 사용자가 frame을 직접 확인하여 원하는 frame을 사용하고, 특정 행동의 frame이 부족하다면 영상에서 직접 촬영하여 파일에 넣어 학습시키는 것이다. 상공에서 촬영한 실험영상으로 test를 진행했을 때는 쥐가 그루밍을 하거나 특정 행동을 보여도 hyperdrive에 가려 labeling을 하는데 큰 상관이 없었다. 또한 상공에서 촬영한 영상은 labeling을 진행할 hyperdrive를 가리는 문제가 없어 labeling을 진행하는데 문제가 없었지만, 정명에서 촬영한 영상은 쥐의 행동과 실험장비의 유무 그리고 위치에 따라 labeling을 해야하는 위치가 크게 변화하는 문제가 있었다.  

현재 1마리의 쥐만 사용하여 test를 진행하였기 때문에 가지고 있는 5마리의 쥐를 한 번에 학습시킨 뒤 labeling된 영상을 출력하여 비교 분석 해보기로 결정하였다. label의 위치는 위 test와 똑같이 진행하고 5마리의 쥐 실험영상을 사용하여 학습을 진행하고 있다. 학습이 완료되는 대로 다시 분석해보겠다.
