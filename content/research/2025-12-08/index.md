---
title: "2025/12/4 (목)"
date: "2025-12-08"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-5.png?w=1024)

금일 중앙 label의 pixel 이동 거리를 gitter 이하로 움직였다면 stop(0) 을 출력하도록 code를 짜고 test를 진행했다. 하지만 수치화된 data가 없어 다른 figure로 표현하기 어려움이 존재했다. 그리하여 중앙 label의 pixel이동 거리를 수치화 하는 code 수정을 진행했다. 

그 전에 dist 값을 smooth를 진행 후 stop과 run을 판단하는 data로 사용했다. 그렇다면 smooth를 사용하지 않고 0과 1을 판단한다면, 또한 dist와 dist를 smooth한 값을 비교한다면, 얼마나 차이나며 추후에 실험자가 dist 값을 비교했을 때 stop과 run을 비교하기 위한 값으로 어떠한 data를 사용할지 비교해 볼 필요성이 있다고 판단했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-6.png?w=1024)

첫 번째 그래프에는 dist와 dist smooth 된 data를 각 frame 단위로 표현한 것이며 두 번째 그래프는 dist를 기준으로 stop과 run 구간을 점으로 찍었으며 세 번째 그래프는 dist smooth 된 data를 사용하여 stop과 run 구간을 점을 찍은 것이다. 그래프를 확대해 보면,

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-7.png?w=1024)

첫 번째 그래프에서 dst와 smooth dist 값이 flat 한 부분 stop한 구간이며 이 구간에서 두 번째 그래프(RAW dist) 세 번째 그래프(smooth dist)가 어떠한 구간에 점을 찍었는지 비교해 보았다. 첫 번째 그래프에서 flat 한 부분에서 stop에 점을 찍어야 tesk structure를 인식하고 있는 행동 구간을 더 자세히 출력하는 data인 것이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-8.png?w=1024)

여러 구간을 분석해본 결과 RAW dist는 dist와 dist smooth가 flat 한 부분에서도 run 구간을 출력하는 구간이 많다는 것을 확인할 수 있었다. smooth를 사용한 dist data를 stop과 run을 판단하는 data로 사용해야 된다는 것을 판단할 수 있었다. 

그렇다면, smooth 된 dist data를 사용하여 csv file에 출력하도록 방향성을 잡았다.

추가적으로 smooth 된 dist data에 시간 즉 fps를 계산하여 중앙 label의 이동 속도를 계산해보는 시도를 진행했다.

1초에 30프레임 즉 1프레임의 시간은 = 1/30초 = 약 0.033333초
즉, 프레임 간 시간 간격은

Δt=1/fps​Δt=1/fps
	​

​​
​
​

speed=dist×fpsspeed=dist×fps

이기 때문에 dist에 30 fps를 곱해서 pixel간 이동 속도를 계산하는 code를 구성해 보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/12/image-9.png?w=1024)

csv file에 smooth 된 dist와 smooth dist를 기준으로 stop과 run을 0과 1로 출력하고 중앙 label의 frame 이동 속도를 출력하도록 만들었다. 추후 이 속도 data를 가지고 검증을 진행해볼 예정이다.
