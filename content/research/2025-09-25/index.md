---
title: "2025/9/25(목)"
date: "2025-09-25"
categories: "research"
author: "lian"
emoji: "🔬"
---

head direction을 visualization하는 GUI test를 진행했다. 먼저 정면에서 촬영한 실험 영상에서 실험을 준비하는 부분을 편집해 5분 영상으로 rendering을 진행해 주었다. 
실험 앞뒤 부분을 자른 이유는 CSV file이 label이 찍히는 frame부터 1 frame으로 count한다. 쥐가 실험을 준비하고 있는 초반 부분은 label이 찍히지 않아 영상의 frame rate를 맞춰 test를 진행하는데 어려움이 존재했다. 그리하여 영상의 초반과 뒷 부분을 편집하여 test용 영상을 만들었다. 

번외로 test용 영상을 만들다 쥐의 새로운 행동을 발견하여 적어본다. 실험자가 사용한 test 영상은 LE 952를 사용했다. 원래부터 952를 보면 tesk 중간에 눈이 커졌다 작아졌다 하는 행동이 보였다. test 영상을 만들기 전까지는 그냥 넘겼지만, 눈이 튀어나오는 행동이 극명하게 보이는 부분을 찾았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-23.png?w=800)

비유하자면 개구리가 울음소리를 낼 때 배가 팽창되는 것 처럼 쥐의 볼이 크게 부풀어 오르고 눈이 튀어 나올 정도로 커지는 행동을 발견했다. 처음 보았을 때는 쥐가 아픈 것 처럼 보였다. 선배님께 여쭤보니 명칭이 있는 쥐의 행동이었다. boggling 이라는 행동인데 bruxing 하면서 쥐의 턱 근육이 수축하고 수축한 눈 주위 근육까지 영향을 주어 눈이 빠르게 움직이는 것이었다. boggling은 쥐가 편안할 때 나오는 행동이라고 나와있지만 한편으로는 스트레스나 불안을 나타내는 행동이다. grooming은 쥐가 정말 편할 때 하는 행동이지만, boggling은 앞 뒤 상황을 보고 쥐가 정말 편할 때 하는 행동인지 아니면 스트레스를 받고 있어 행하는 행동인지 실험자가 판단해야 된다는 것을 알았다.

test 영상을 가지고 DLC에 넣어 labeling된 영상과 csv file을 얻었다.  먼저 nose label의 데이터를 가지고 test를 진행했다.  

head direction visualization code를 설명하자면, 가로로 긴 figure가 쥐의 좌우 head direction을 나타내는 것이고 세로로 긴 figure가 쥐의 상하 head direction을 나타낸다. 영상을 넣고 싶지만 영상이 들어가지 않아 캡처본으로 대신하지만, 아래 출력되는 time을 test 영상과 맞춰 실행한다면 영상의 head direction을 실시간으로 확인할 수 있다. 쥐 머리의 방향에 따라 화살표가 움직인다. 추가로 code를 실행하고 R을 누르면 처음으로 돌아가 다시 실행하고, Q를 누르면 종료, space bar를 누르면 일시정지 할 수 있도록 만들었다. 아직은 사용자가 head direction visualization GUI와 test 영상의 time을 직접 맞춰 육안으로 test를 진행해야 하지만 추후에 영상을 GUI로 입력받아 frame rate를 자동으로 맞춰 실행시킬 수 있도록 만들 예정이다.

code를 만들면서 가장 어려웠던 부분은 frame rate를 맞춰주는 부분이었다. matplib을 사용하여 1 frame 씩 label의 좌표를 찍고 다음 frame 좌표를 찍도록 처음에 code를 구성했지만, 시간이 지날 수록 data 처리가 밀려 영상과 시간이 맞지 않는 문제를 보여주었다. code의 frame rate를 2배정도 올려 영상과 맞춰볼까라는 생각을 했지만, 그렇게 된다면 추후에 영상 data를 GUI로 받아 출력할 때 문제가 발생할 것이라고 생각했다. 그리하여 figure를 그리는 tool을 matplib에서 openCV로 교체했다. openCV는 실시간 data figure를 그리는데 더 적합하다는 정보를 얻고 교체를 진행하였고, test는 python의 openCV를 import하여 진행하였다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-24.png?w=800)

위 사진이 실험자가 head direction visualization test를 진행한 캡처본이다 왼쪽이 code의 실행창이며 오른쪽이 test 영상이다. 좌우 head direction은 첫 번째 figure가 잘 따라가 주는 결과를 보였다. 하지만 캡처본을 보게 되면 무엇인가 이상한 점이 있다. y축 즉 세로로 긴 figure가 계속 아래 방향을 보고 있는 것을 확인할 수 있었다. 쥐가 정면을 응시하고 있어도 빨간색 화살표가 아래를 보고 있었다. 영상에서 nose의 label은 대부분 아래에 존재한다. 쥐가 정면을 응시하고 있어도 nose는 아래에 있기 때문에 화살표가 아래를 출력하는 결과를 확인할 수 있었다. 실험자의 생각으로는 nose의 label 좌표를 가지고 충분히 head direction을 확인 할 수 있을 것이라고 판단했다. 하지만 nose label의 좌표는 생각보다 아래에 존재하여 상 하 head direction을 표현하는데 적합하지 않는 data라고 판단되었다. 그리하여 nose label 좌표를 사용하는 대신 양쪽 eye label의 중앙값을 사용하기로 결정했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-25.png?w=800)

양쪽 눈  front label의 중앙값을 계산하게 알고리즘을 만들어  head direction visualization code에 접목시켰다. 추가로 고개를 좌우로 틀어 한쪽 눈이 보이지 않을 때는 보이는 눈 좌표로 출력 될 수 있게 수정했다. 

수정된 code의 test 결과를 보면

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-27.png?w=800)

nose label을 사용하여 head direction을 측정했을 때와  쥐가 정면을 응시하고 있어도 상하 화살표가 아래를 보는 빈도수가 크게 줄었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-28.png?w=800)

또한 쥐가 head를 크게 돌려도 각 방향의 화살표가 잘 따라오는 결과를 확인할 수 있었다. test를 진행하며 결과물을 확인하니 2D상의 head direction은 굳이 code가 없어도 영상으로 판단할 수 있는 data라고 생각이 들었다. frame rate를 실시간으로 맞춰본 노하우와 open CV를 사용하여 figure를 그린 결과물을 바탕으로 x축과 y축의 data를 사용하여 3D 상에서 쥐의 head direction을 볼 수 있도록 만들어 보고자 했다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-29.png?w=800)

2D 구체에 x축과 y축을 사용하여 3D처럼 보이게 만들고 쥐가 바라보고 있는 방향으로 화살표를 출력하게 만들 계획이다. 처음에는 쥐의 정면에서 바라본 방향으로 3D head direction을 만들어볼 계획이었지만, head direction을 더욱 직관적으로 보이게 만들고 싶어 3D의 방향을 쥐의 후방에서 바라본 방향으로 구상하였다. 오른쪽이 현재 설계를 진행하고 있는 3D head direction code 이다. 아직 완성을 하지 못 했지만 3D로 구상하기 위해서 시간이 더 걸릴 것으로 예상한다.
