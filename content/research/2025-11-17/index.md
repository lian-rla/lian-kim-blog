---
title: "2025/11/17 (월)"
date: "2025-11-17"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-27.png?w=800)

금일 영상판독을 시작으로 task structure behavior distinction algorethem develop project를 시작했다. 
먼저 수민 선배님께서 보내주신 자료에서 task structure behavior가 나타나는 쥐는 rat 1008 이었기 때문에 1008을 중점적으로 영상판독을 진행 후 task structure behavior가 나타나는 구간을 찾으려고 시도했다. 

trial 종료 -> (쥐가 계속 달리고 있어도) -> ITI화면으로 넘어감 -> 2틱 stop(쥐가 달리고 있어도 속도는 측정 x) -> start 지점으로 텔레포트 -> trial 시작

위 사항은 수민 선배님 실험의 세팅이며, ITI 화면으로 넘어가면 약 500ms 동안 unreal log에서 속도를 측정하지 않아 쥐의 task structure behavior를 측정하지 못 하는 이유이다. ITI로 넘어가면 scene이 멈추기 때문에 이러한 부분을 DLC를 사용하여 labeling을 진행 후 label이 움직이는 data로 간접적으로 속도 측정을 시도해 보려고 했다.

먼저 rat 1008의 측면 영상을 보며 task structure이 나타나는 행동이 어느 구간인지 판독했다.
완벽하게 나타나는 구간은 총 3가지였다. rat1008-20250201의 12:23, 24:23 그리고 20250202의 02:57분 구간이 ITI이 끝나기 전에 쥐가 휠을 굴리는 행동을 보인 구간이었다. 현재 가지고 있는 영상만 보았을 때 3번 정도가 보이지만, 수민 선배님께 영상을 더 받아 판독을 진행해볼 예정이다. 

또한 추후 dlc data를 가지고 속도를 구해야 하기 때문에 labeling test를 진행했다. 
왼쪽 다리 3개 오른쪽 다리 3개로 총 6개의 labeling을 진행했고, csv file까지 뽑아보았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-28.png?w=800)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-31.png?w=800)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-32.png?w=800)

csv file의 label data 개수가 59677이다. unreal log는 57016개로 cheetah event log와 똑같았지만, frame rate가 30인 원본 영상을 사용하여 DLC를 사용했지만, data의 개수가 59677 로 unreal log의 data 개수와 다르게 나타났다. DLC label data는 30fps로 영상에서 프레임을 추출해 label의 좌표를 진행하는 것으로 예상했지만, 다른 방법으로 label data 추출을 진행하는 것으로 판단된다. DLC에서 label data를 추출하는 방식을 알고 unreal log의 data 개수와 맞춰주는 작업 및 test를 진행해 보야아 할 것 같다. unreal log와 맞아야, ITI 화면으로 넘어갔을 때의 label data 좌표를 알아 task structure behavior을 알아낼 수 있기 때문이다.
