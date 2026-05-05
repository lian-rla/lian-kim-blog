---
title: "2025/8/5(화)"
date: "2025-08-06"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-83.png?w=1024)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-11.png?w=1024)

main task의 프로그램이 업그레이드 되었다. 원래는 총 Latency만 측정되었지만, starbox에 가까운 센서와 다음으로 가까운 센서인 inter부분에서 측정된 latency가 csv 파일에 저장되게 변경되었다. 그리하여 T-maze에서 구간별 세세한 Latency를 비교 분석할 수 있게 되었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-12.png?w=1024)

필자는 먼저 구간을 나눴다 alpha, beta, gamma로 구역을 나눴다. alpha는 csv에서 Latency_stbox의 측정 값으로 지정했다. beta 값은 Latency_inter 에서 Latency_stbox를 뺀 값으로 beta 구역을 지나는데 걸리는 시간으로 정했다. T-maze arm(방향을 선택하기 전 구역)까지 도착하는 시간을 알 수 있다. gamma 구역은은 Latency에서 Latency_inter의 값을 뺀 값으로 지정했다. T-maze arm에서 reward zone까지 선택하는데 걸리는 시간을 알 수 있다. 이렇게 구간을 나눈 이유는 alpha, beta, gamma 구역을 각 trial 마다 비교하여 쥐가 선택할 때 어느 구역에서 멈춰서 고민했는지 알 수 있는 지표를 만들고 싶었기 때문이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-13.png?w=1024)

그리하여 figure를 한 번 만들어 보았다. 왼쪽 figure는 y축은 trial을 의미하고 x 축은 alpha, beta, gamma 구역을 나타낸다. 각 trial 마다 정규화를 사용하여 높은 데이터를 가질 수록 노란색으로 칠해진다. 추가로 파란색 별은 correct한 trial을 나타낸다.  figure를 이렇게 그린 이유는, correct한 trial에서 어느 구역에서 쥐가 고민했는지 알기 위해 그려보았고, 가시성을 높이기 위해 색을 통해 표현해 보았다. 

오른쪽 그래프는 각 구역을 모아 box plot을 그린 figure이다. 노란색 점은 각 trial에서  가장 높은 구역을 나타낸 것이다. 며칠동안 고민해서 figure를 그렸다. 필자의 생각으로는 각 구역의 latency를 한 눈에 비교 분석 하고 싶어 box plot을 사용하여 그려 보았다. 하지만 아직까지는 위 figure에 문제가 많다고 판단된다. 좀 더 고민해 보아야 할 필요성이 있다고 판단된다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-14.png?w=1024)

또한 전체 코드를 수정해 보았다. scene 별로의 정답률을 나타내게 수정해 보았고, choice bias를 따로 그려보았다. 그 후 위 figure를 같이 출력할 수 있도록 추가해 보았다. 문제는 한 장면에 figure가 너무 많다는 것이다. 필자가 해보고 싶은 figure를 많이 만들다 보니, 결과창이 더러워지는 문제가 발생했다. figure를 빼야할 것은 빼고, 합칠 수 있는 figure를 합쳐 압축과정을 진행해 보아야 할 것 같다. 추가로 구역별 latency도 어떻게 하면 더 가시성 높은 figure를 그려볼 수 있을지 고민을 좀 더 해봐야 할 것 같다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-17.png?w=800)

현재로는 각 구역별로 figure를 나눠 평균을 구하고 그 평균에서 얼마나 멀어졌는지를 계산한 후 꺾은선 그래프로 한 번 그려보면 어떨까 라는 생각도 해보았다. 아니면, 구역별 비율을 계산하여 막대 그래프로 표현 후 각 trial에서 어느정도의 비율을 차지하고 있는지 볼 수 있게 figure를 만들어 볼까 생각 중이다.

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 438g(-2g) Pellet/Water : 11g Experiment time : 10:25 ~ 11:10
Stage : Main task DAY 8

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-15.png?w=1024)

금일 49번은 40trial을 완료했다. bias가 어제와 비교했을 때 떨어진 결과까지 보여주었다. 또한 정답률 또한 어제와 비교했을 때 증가했다. 초반 trial 에서는 오른쪽을 선택하는 비중이 많았지만 실험을 진행할 수록 왼쪽을 선택하는 비중이 점차 많아졌다. 금일 towel handling에서는 suger water를 0.4ml에서 0.2ml 로 줄였다. 점차 towel handling에서 주는 suger water를 줄일 예정이다. 금일 suger water은 총 2.7ml 를 먹었으며 푸룻룹은 1개를 섭취했다. pellet은 어제와 동일한 11g을 주었다. 어제와 비교했을 때 motivation이 똑같았고, 몸무게는 어제봐 비교했을 때 2g 정도 빠졌기 때문이다. 

#Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 408g(-6g) , Pellet/Water : 10g Experiment time : 11:30 ~ 12:15
Stage : Main task DAY 7

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-16.png?w=1024)

금일 50번은 32trial을 진행했다. 왼쪽으로 bias가 심한 행동을 보여주었다. 초반 trial에서 10번 연속 왼쪽을 선택하여 repetition을 5번을 주고 correction을 1번을 주었다. 그래도 bias가 잡히지 않아 원래 trial로 돌아와 계속 진행했지만, 또 한번 10번 연속으로 왼쪽을 선택하여 repetition을 4번을 주었을 때 반대 방향을 선택하는 행동을 보여주었다. 그래도 bias를 어제와 비교해 본다면 조금 줄어든 결과를 보여주었다. 하지만 정답률은 떨어지는 결과를 보여주었다. 명일 bias가 한번 더 심한 행동을 보인다면, 교정에 대해 좀 더 고민해 보아야 할 것 같다. 금일 suger water은 49번과 마찬가지로 towel handling에서 0.2ml로 줄였다. 그리하여 금일 총 1.4ml를 주었다. 푸룻룹은 1개를 먹었으며, pellet은 어제보다 1g 더준 10g을 주었다. 50번도 몸무게가 빠지더라도 1~2g 씩 빠지는 몸무게를 찾기 위해 pellet을 조금씩 늘리면서 찾아보려고 한다.
