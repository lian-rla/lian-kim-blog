---
title: "2025/10/20 (월)"
date: "2025-10-20"
categories: "research"
author: "lian"
emoji: "🔬"
---

분석 컴퓨터 window 11 update를 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-5.png?w=800)

약 6시간 정도 소요되었고 c 드라이브에 있는 데이터가 백업 되어 바로 사용 될 수 있도록 update 되었다.

 영상에 존재하는 digitalynx timestamp를 추출 후 출력하고 출력된 timestamp를 csv file에 저장하는 tool 개발을 진행했다. 가장 큰 문제는 cheetah log와 unreal log가 30Hz로 출력되기 때문에 개발할 timestamp 출력 tool도 0.033초에 한번 씩 timestamp를 추출하여 출력해야 했다. 추가로 데이터로 존재하지 않고 영상 내에 존재하기 때문에 영상에서 timestamp가 찍힌 공간의 좌표를 추출하고 tool이 인식하여 timestamp를 추출해 주어야 했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-8.png?w=800)

먼저 open cv 와 tesseract라는 function을 사용하여 코딩을 진행했다. open cv는 dlc에서도 사용되는 function으로 영상의 프레임을 추출해 주거나, 영상에서 사용자가 원하는 위치의 좌표를 출력해주는 기능을 가지고 있다. 그리하여 open cv를 사용하여 영상에서 timestamp가 존재하는 위치의 좌표를 출력하고, 영상의 프레임을 추출 후 여러가지 threshold 방식을 사용하여 숫자를 추출하는 것으로 방향성을 잡았다. 
open cv에는 여러가지 threshold가 존재한다. (어두운 배경 + 밝은 글자용, 밝은 배경 + 어두운 글자용, 자동 임계값, 영역별 임계값) 하나의 threshold를 사용하여 숫자를 출력하는 것 보다는 여러가지 threshold를 사용하여 숫자를 출력 후 tesseract라는 function을 사용하여 confidence가 가장 높은 숫자로 출력하는 것이 정확도를 더 높히는 방법이라 생각했다. tesseract는 컴퓨터가 문자 인식의 정확도를 출력해 주는 function이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-9.png?w=800)

위 사진은 영상에 출력되는 digitalynx timestamp를 가져온 것이다. 사람이 본다면 왼쪽에서 3번째 존재하는 문자는 0이라고 단 번에 인식할 수 있지만, 컴퓨터가 threshold 된 데이터를 인식할 때는 알파벳 'O'로 인식할 수 도 있다. 그리하여 tesseract를 사용하여 4가지 threshold에서 출력된 숫자의 confidence를 구하고 비교 후 가장 높은 confidence를 출력하는 timestamp를 출력하여 csv file내 저장하는 것으로 코딩을 진행했다.  

코드를 총 2가지를 만들었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-10.png?w=800)

첫 번째 코드는 영상 내 timestamp의 좌표가 어느 곳에 위치하는지 알기 위해 개발한 tool이다. 코드를 실행시키면 위 사진처럼 영상의 한 frame이 나타난다. 이를 사용자가 timestamp가 존재하는 위치를 마우스로 drag하면 파란색 박스가 씌워진다. 그 후 enter를 누르면 ROI 좌표가 나타난다. 좌표값은 총 4가지로 (x,y,w_roi,h_roi)이다. x,y는 drag된 파란색 박스의 좌측 아래 모서리가 영상 최 좌측 기준 x,y 값으로 몇 정도 떨어졌는지를 의미하며, w_roi와 h_roi는 파란색 좌측 아래 모서리를 기준으로 박스가 x축, y축 값으로 몇 정도 씌워졌는지를 의미한다. 4가지 좌표값을 위 코드를 통해 알아냈다면, 두 번째 코드로 넘어가 좌표를 입력해준다.  그 후 두 번째 코드의 로직을 거친다면, 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-11.png?w=800)

위 사진처럼 출력물을 얻을 수 있다. 두 번째 code를 실행하면 FPS, 총 프레임, 영상의 길이가 먼저 출력되게 만들었으며, 다음 줄 부터 각 초에 맞는 timestamp가 찍힌다. 그 후 모든 timestamp가 terminal 창에 출력되면, csv file에 저장되어 사용자가 timestamp를 한 눈에 볼 수 있도록 만들었다. 

timestamp를 출력 후 저장하는 것 까지는 성공했지만 아직 한계는 존재한다. 
1. digitalynx의 timestamp와 code timestamp의 오차 
2. timestamp의 인식률 

1번의 한계는 현재 test로 진행한 10초짜리 영상으로 code test를 진행했기 때문에, 확인하기 위해서는 cheetah log의 timestamp 개수와 원본 영상을 code에 넣어 출력된 csv file의 timestamp 개수를 확인해 보는 작업으로 한계를 극복할 수 있을 것으로 생각한다. 하지만 문제는 timestamp를 출력하는데 많은 시간이 소요된다는 것이다. 10초 영상의 timestamp를 출력하는데도 약 4분 정도가 소요되었기 때문에 원본 영상을 넣게 된다면 많은 시간이 걸릴 것으로 예상한다. 하지만 code의 정확도 검증을 위해서는 꼭 필요한 작업이라 생각한다. 

2번의 한계는 code를 더 손 봐야 될 것 같다. 현재 출력된 csv file의 timestamp를 영상과 비교해본 결과 timestamp의 숫자가 많이 다른 것으로 나타났다. 16자리 숫자가 정확히 맞아 떨어져야 되는 것은 아니지만, 16자리 숫자를 2등분 하여 보게 된다면, 앞의 6자리 숫자는 0.033초가 지나도 크게 변화되지 않는다. 그리하여 앞에 있는 6자리 숫자는 꼭 맞아야 된다고 판단했다. 해결 방법으로는 tesseract의 숫자 인식률에 사용하는 학습 데이터를 직접 만드는 것이다. training folder를 만들어 영상의 frame을 추출하고 각 frame에 맞는 timestamp를 직접 입력하여 학습을 진행시키는 것이다. 장점으로는 높은 인식률을 보일 것으로 예상되지만, 단점으로는 학습 데이터를 만드는데 많은 시간이 소요될 것으로 예상된다. 두 번째로는 threshold를 좀 더 정밀하게 손 보는 것이다. 현재 4가지의 방식을 사용하지만, test를 진행하여 영상에 알맞은 4가지 threshold의 값을 찾고, 지정해 준다면 높은 인식률을 보일 것으로 예상한다.
