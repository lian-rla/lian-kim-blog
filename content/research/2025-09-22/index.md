---
title: "2025/9/22(월)"
date: "2025-09-22"
categories: "research"
author: "lian"
emoji: "🔬"
---

DLC project meeting

금일 DLC project meeting을 진행했다. 먼저 수민선배님의 CA1 target으로 진행한 실험 영상을 DLC test에 사용한 이유에 대해 설명드렸다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-18.png?w=800)

수민 선배님의 실험 촬영 영상은 다른 분들의 실험 영상과는 다르게 5마리의 실험 영상을 보유하였고, 각 rat 별 7일 이상의 데이터를 보유하고 있었다. 추가적으로 쥐의 신체부위가 식별 가능한 정도의 화질을 보유하고 있어 DLC test에서 수민 선배님의 실험 영상을 사용하게 되었다고 설명을 드리며 project meeting을 시작했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-19.png?w=800)

수민 선배님의 실험 촬영 영상은 총 3가지의 카메라로 쥐를 촬영했다. 1번은 위에서 촬영한 영상이며, 2번은 정면, 3번은 측면에서  촬영한 영상이다. 3가지의 카메라 중 위에서 촬영한 1번 영상의 화질이 가장 좋았지만 hyperdrive에 쥐의 신체부위가 가리는 문제가 존재하여 신체부위 labeling에 어려움이 존재한다는 단점이 존재했다. 2번 정면에서 촬영한 영상은 1번 카메라의 화질은 아니지만 쥐의 신체 부위를 사용자가 식별 가능한 정도의 화질을 가지고 있었고, 다른 분들의 정면 영상에 비해 대비의 변화가 적었다. 3번인 측면에서 촬영한 영상은 대비가 너무 낮은 문제가 존재했다. 추가로 화질도 너무 낮아 쥐가 port licking 유무를 알 수 있을 정도의 화질을 가지고 있어 사용하기 어렵다고 판단했다. 그리하여 2번 카메라로 촬영한 영상을 가지고 test를 진행하였다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-20.png?w=800)

저번 labnote에 서술해 놓았지만, 다시 설명해 보자면 이번 test에서는 눈,코,입의 bodypart를 세분화하여 labeling을 진행했다. 눈은 쥐의 동공의 크기에 맞게 동서남북으로 labeling을 진행하였고, 코는 양쪽 콧구멍 그리고 인중 마지막으로 인중 끝 부분에 labeling 하여 총 4개로 나누어 진행했다. 마지막으로 입은 윗입술과 아래 입술을 labeling 해주었고 port를 licking 할 때만 혀를 추가로 labeling 해 주었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-21.png?w=800)

마지막으로 설명할 project의 방향성이다. DLC로 labeling 된 영상을 가지고 moseq를 사용하여 행동 분류를 진행해볼 계획을 가지고 있었다. figure에는 나와 있지 않지만, 쥐가 port를 licking 하기 전 고개를 왼쪽을 오래 보다가 오른쪽을 향하는지 아니면 오른쪽을 오래 보다가 왼쪽을 향하는지 등 고민하는 듯한 행동을 moseq를 사용하여 행동 분류를 진행해 볼 예정이었다. 

위 내용까지 project meeting에서 설명드린 내용이다. 교수님께서 feedback주신 내용을 정리해 보자면, 다음과 같다. 

moseq같은 행동분류 tool을 사용하는 것 보다는 DLC로 추출된 labeling csv data를 가지고 쥐의 behavior을 측정할 수 있는 tool을 만드는 것으로 방향성을 잡아주셨다. 특히 head direction을 강조해 주셨다. 쥐가 vr 환경에서 실험을 진행하면서 학습 시 head direction이 어느 곳에 위치에 있는 지 알아내는 것이 중요하다고 말씀해주셨다. 

그리하여 head direction 및 쥐의 behavior data를 사용자가 시각적으로 확인할 수 있는 알고리즘을 개발하는 것으로 방향성을 잡았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-22.png?w=800)

간단한 head direction 및 쥐의 behavior data GUI를 그려본다면 왼쪽에는 쥐가 실험하고 있는 영상을 넣었고, 오른쪽에는 좌우와 위아래 2가지로 나눠 쥐의 head direction을 알 수 있도록 계획했다. csv 좌표에 맞게 빨간색 화살표가 움직일 수 있도록 코딩해볼 예정이다. 여기서 가장 큰 문제는 영상과 frame rate를 맞춰야 한다는 점이다. 영상에서 보여지는 head direction이 figure에도 실시간으로 반영되어야 하기 때문에, csv에서 frame의 개수를 파악하고 영상의 frame rate에 맞게 다음 frame으로 csv data를 넘겨줘야 하는 작업이 중요할 것으로 판단된다. 

또한 locomotion이라고 표현했지만, head direction 아래 data는 어떠한 것을 넣어야 할지 아직 확정되지는 않았다. csv 상 label의 좌표를 사용하여 처음 GUI를 구성하는 작업이라, 코딩을 진행하면서 이러한 시각적인 data도 필요하다고 판단되면 추가해볼 예정이다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/555.png?w=1024)

현재 아직 완성은 아니지만 출력된 label data를 가지고 head direction을 표현할 수 있는 figure를 만들어 보았다. 아래 frame rate를 계산하여 영상의 재생 시간을 보여주며, reset 버튼을 만들어 처음부터 다시 시작하도록 만들었다. 실시간으로 영상과 비교해 본 결과, csv file의 label data는 영상에서 label이 찍히는 시점부터 1 frame으로 측정하여 영상과는 time이 다른 결과를 보여주었다. 그리하여 영상 첫 부분 실험을 준비하는 부분은 편집하여 없애고 다시 dlc를 돌려 label data를 얻은 후 head direction figure에 넣어 비교해볼 예정이다.
