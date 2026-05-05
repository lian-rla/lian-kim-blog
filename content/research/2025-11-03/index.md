---
title: "2025/11/3 (월)"
date: "2025-11-03"
categories: "research"
author: "lian"
emoji: "🔬"
---

easyOCR을 활용한 영상의 timestamp 출력 알고리즘의 신뢰도 분석이 충분히 사용 가능할 정도라고 판단하였고, 그리하여 easyOCR 알고리즘을 더 활용하여 GUI로 출력되는 timestamp player를 만드는 과정을 진행했다. 

먼저 timestamp player의 목표는 사용자가 event log를 보고 영상판독을 원하는 구간의 timestamp를 timestamp player에 입력하게 되면, 사용자가 입력한 timestamp 부터 영상이 play되도록 하는 것이 목표이다.

그리하여 먼저 easyOCR을 활용하여 timestamp player의 개발을 진행했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image.png?w=800)

영상을 code에 넣게 되면 사용자가 원하는 timestamp를 입력하게 만들고. 그 후 easyOCR을 사용하여 영상의 timestamp를 출력하게 만든다. 다음으로 easyOCR로 출력한 timestamp와 입력한 timestamp를 비교하여 가장 오차가 없는 영상의 timestamp의 구간부터 play되는 영상을 출력한다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-1.png?w=800)

code를 실행시키면 나타나는 GUI로 사용자가 원하는 영상을 넣어주고, ROI 좌표를 드래그하여 선택 후 원하는 timestamp를 입력한다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-2.png?w=800)

그 후 '타임스탬프 찾기' 버튼을 누르게 되면 사용자가 입력한 timestamp를 찾게 되며, 사용자가 입력한 timestamp구간의 영상부터 재생을 시작한다. 

하지만 위 code에는 큰 문제가 존재했다.  easyOCR만 사용한 알고리즘을 가지고 33분 영상의 timestamp를 출력했을 때 약 4시간 반의 시간이 소요되었다. 위 timestamp player의 easyOCR도 마찬가지로 원하는 구간의 timestamp를 출력할 때마다, easyOCR을 사용하여 처음부터 끝까지 timestamp를 출력 후 사용자가 입력한 timestamp와 오차범위 이내인 값을 출력하기 때문에 많은 시간이 소요되는 문제가 있었다. code를 실행시킬 때마다 많은 시간이 소요되니 위 timestamp player의 알고리즘은 사용하기 어려울 것으로 판단했다. 

그리하여 easyOCR을 먼저 사용 후 영상의 총 timestamp를 추출하고, 출력된 CSV file을 가지고 timestamp player의 code를 실행시키도록 설계했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-7.png?w=800)

추가로 timestamp player v1은 영상 timestamp를 기준으로 잡았다면, v2는 event log의 timestamp를 기준으로 잡고 출력되는 timestamp를 맞췄다. 그러기 때문에 영상에서 사용자가 원하는 timestamp를 지정하는 것이 아닌 event log에서 timestamp를 골라 입력해 주어야 한다. 
사용자가 원하는 cheetah log timestamp를 입력해 주었다면, 출력 된 영상의 timestamp에서 입력 받은 cheetah log timestamp와 오차 범위 이내인 timestamp 구간을 출력하여 사용자가 입력한 timestamp가 존재하는 영상을 play 해준다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-8.png?w=800)

왼쪽 사진은 test에 사용된 event log이다. 먼저 사용자는 code에 입력할 timestamp를 event log file에서 timestamp를 뽑고 code에 입력한다. 추가로 event log의 데이터는 column18이 "TTL Input on Acgsystem 1_ 0 board port 2 0x0004 "인 부분만 사용하였다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-6.png?w=800)

event log의 timestamp의 입력을 완료했다면, 왼쪽 상단의 사진처럼 사용자가 입력한 timestamp와 easyOCR log를 비교하여 차이가 가장 없는 timestamp를 추출하고, easyOCR에서 추출된 timestamp를 기반으로 영상의 재생 시간을 설정한다. 그 후 오른쪽 사진처럼 사용자가 입력한 timestamp 구간의 영상이 출력된다. 
추가적으로 Q를 누르면 프로그램이 종료되는 것으로 설계했다. 

그렇다면 timestamp player v2로 출력되는 영상은 unreal log의 data와 비교하였을 때, 사용자가 원하는 behavior을 나타내는 구간의 영상을 play 해주는지 검증해 보았다. 먼저 unreal log의 데이터 개수와 event log의 timestamp 개수가 정확하게 맞기 때문에 unreal log의 behavior data를 event log의 timestamp와 동일 선상에 두고 code에 넣어 출력을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-9.png?w=800)

behavior 중 가장 눈에 띄게 분석이 가능한 행동은 licking 하는 것이라 생각한다. 영상으로 판단하더라도 쥐가 licking 하는지는 쉽게 판단이 가능하다고 판단했다. 그리하여 쥐가 licking한 순간의 센서 데이터의 unreal log 순서를 파악하여 event log의 순서에 맞추고, 맞추어진 순서의 timestamp를 code에 넣어 test를 진행했다. 
위 사진으로 예시를 들어본다면, 쥐가 licking한 데이터의 unreal log 데이터 순서상 52481번째 순서였다. 이 52481 data 순서를 event log에 들어가 52481 번째의 timestamp인 '1705665581244364' 를 code에 넣어 출력되는 영상에서 licking 하는 순간이 나오는지 확인하는 것이다.  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-11.png?w=800)

code에 '1705665581244364' 를 넣어 주었고, easyOCR log에서 가장 가까운 구간인 1814.10s 구간이 나타났다. 영상이 출력된 결과를 보면. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-14.png?w=800)

1705665581244364의 timestamp에서 쥐가 port를 licking하는 모습이 영상에 나타난다. 

unreal log상 모든 behavior을 아직 test 해보지는 않았지만, port를 licking하는 behavior은 완벽하게 영상의 구간을 출력하는 것을 확인했다. 하지만 아직까지 해결해야 할 부분이 존재한다.

1.easyOCR의 timestamp 추출 속도
  위 code를 쓰기 위해서는 easyOCR을 사용하여 영상의 timestamp 출력을 진행해야 한다. 33분 영상 기준 약 4시간이 소요된다. 많은 시간이 소요되기 때문에 다른 사람들이 쓰기에는 접근성이 너무 떨어진다고 생각된다. 해결 방법으로는 영상의 모든 timestamp를 출력하는 것이 아닌 영상의 초반 부분만 easyOCR을 사용하여 timestamp를 출력하고 event log의 timestamp 시작부분을 맞추어 영상을 play하는 것이다. 저번 test 진행 과정에서 약 90%의 정답률을 easyOCR이 보였기 때문에 event log와 easyOCR의 timestamp 시작부분을 맞추어 30FPS로 실행시키더라도 크게 오차가 벌어지는 일은 거의 없을 것이라고 판단된다. 

2. timestamp가 출력되는 영상이 아닌 다른 각도에서 촬영한 영상 또한 재생 속도를 맞추어 넣어주어야 한다.
  현재 측면에서 촬영한 timestamp 영상만 사용하여 behavior를 관찰하고 있다. 측면에서 촬영한 영상가지고 behavior을 판단하는 것은 한계가 존재한다. 또한 측면에서 촬영한 영상은 화질이 많이 떨어지기 때문에 다양한 각도에서 촬영한 영상을 함께 넣어 behavior를 관찰해야 한다. 이 문제를 해결하기 위해서는 다양한 각도에서 촬영한 모든 영상은 30FPS로 맞추어 놓았고, timestamp가 찍힌 측면 영상을 기준으로 영상이 실행되는 시간을 맞추어 play 한다면 다양한 각도에서 촬영한 실험 영상을 timestamp가 맞추어진 영상으로 볼 수 있을 것이라 판단된다.
