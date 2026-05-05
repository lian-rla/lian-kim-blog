---
title: "2025/8/9(토)"
date: "2025-08-11"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-83.png?w=1024)

데일리 퍼포먼스 figure의 재구성 및 업그레이드를 진행했다. 사용자가 원하는 폴더를 지정하면 폴더 안에 존재하는 csv 파일을 자동으로 인식하여 figure를 그리도록 만들었다. 추가로 figure 구성을 삭제 및 추가를 하였다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-36.png?w=1024)

사용자가 원하는 폴더를 지정하면, 폴더 안에 존재하는 csv 파일을 자동으로 인식한다. 폴더 선택을 완료하게 되면 GUI가 출력된다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-37.png?w=1024)

GUI에는 LE번호, current weight, pellet, day를 사용자가 금일 실험을 진행한 데이터를 입력받는다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-38.png?w=1024)

GUI에서 입력받은 데이터는 출력물 오른쪽 상단에 금일 진행한 실험에 대한 정보를 알 수 있게 출력된다. 또한 LE 번호에 맞게 총 제목이 수정되어 출력되게 만들었다. 예를들어 LE49는 LE49(reward vs no reward)로 출력되며 LE50은 LE50(reward vs quinine)으로 출력되게 만들었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-39.png?w=1024)

새롭게 데일리 figure를 구성하였고, 최종 출력물이다.
figure A - 아래 점 figure에 zebra scene만 회색으로 표시하여 scene 구분을 할 수 있게 추가하였다. 회색 테두리는 zebra scene 테두리가 없는 점은 pebbles scene을 의미한다.
figure B - 는 total trial과 choice bias를 합쳤습니다. 왼쪽 y축은 total trial 오른쪽은 bias를 나타낸다.
figure C - 각 scene별 정답률을 나타낸다.
figure D -  날짜별 총 latency를 나타내며, 빨간점은 wrong 파란점은 correct 나타낸다.
figure E -  알파 베타 감마 구간의 latency를 각 trial 마다 구간의 비율을 계산하여 나타낸 figure 입니다.
(알파 - start box에서 첫 번째 센서 / 베타- 첫 번째 센서에서 두 번째 센서 / 감마 - 두 번째 센서에서 reward zone)
figure F - 알파 베타 감마 구간의 latency를 box plot으로 나타낸 것이며 노란색 점은 각 trial에서 가장 높았던 latency를 가진 구간을 나타낸다.

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 440g(-6g) Pellet/Water : 11g
time : 10:20 ~ 11:05 
stage : main task - DAY 11
suger water : 1.8ml fruit ring : 1

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-40.png?w=1024)

금일 49번은 bias가 심한 모습을 보였다. 왼쪽은 거의 선택하지 않는 모습을 보였다 총 repetition을 13번을 사용했지만 normal trial로 돌아와 진행했지만 bias는 계속 편향된 모습을 보였다. 추가로 repetition trial을 진행하느라 40trial을 채우지 못하고 실험이 끝났다. T-maze arm 부분에서 고민하는 모습을 보였지만, 선택한 방향은 오른쪽이 많았다. 

#Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 418g(-6g) Pellet/Water : 9g
time : 11:20 ~ 12:05 
stage : main task - DAY 10
suger water : 1.8ml fruit ring : 1

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-41.png?w=1024)

금일 50번은 bias가 줄어든 결과를 보여주었다. 초반에는 왼쪽을 bias가 심했지만, repetition 사용 후 normal trial을 진행해보니 오른쪽을 선택하는 모습을 많이 보여주었다. 하지만 정답률은 어제와 비교했을 때 낮아졌다. 추가로 start box 부분에서 많은 시간을 소요했다. 실제로도 trial을 진행하기 위해 문을 열어주어도 start box에서 나와 고민하는 모습을 많이 보였다.
