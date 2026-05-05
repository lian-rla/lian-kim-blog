---
title: "2025/10/13 (월)"
date: "2025-10-13"
categories: "research"
author: "lian"
emoji: "🔬"
---

연휴가 시작되기 전 영상의 frame rate와 neural data의 timestamp를 맞추어 실험영상의 fps에 맞는 neural data를 보여줄 수 있는 GUI를 구성하는 프로젝트를 시작했다. 프로젝트 시작에 앞서 흥렬 선배님에게 lab의 VR neural data setup이 어떻게 되어 있는지 설명을 들었다. 정리해 보자면 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image.png?w=800)

아두이노를 통해 unreal 센서 데이터와 cheetah에 각각 30Hz로 데이터를 전송한다. 이때 아두이노는 digitalynx에 연결되어 unreal log 와 cheet event log의 timestamp를 맞추어 준다. 실험이 종료되고 neurla data recording까지 종료되었으면, unreal log의 data 개수와 cheetah event log의 data 개수를 비교한다. 만약 비교했을 때 data의 개수가 다르다면 neural data recording이 잘 못 되었다는 것을 보여주며, 개수가 맞다면 recording이 잘 되었다는 결과를 보여준다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-1.png?w=800)

cheetah에 입력되는 timestamp는 측면 촬영 영상 상단에 같이 녹화가 되어 사용자가 timestamp를 확인할 수 있게 구성되어 있다. 

문제점으로는 영상으로 timestamp를 확인 할 수 있지만, 영상과 함께 녹화되어 나타나기 때문에 timestamp를 data로 따로 출력하지 못하여, neural data에 입력된 timestamp와 연동하기 어렵다는 문제점이 존재한다. 당장 떠오르는 해결 방법으로는 영상을 1frame 씩 출력하여 오른쪽 상단에 존재하는 timestamp를 알맞은 neural data와 연결시켜주는 방법이 있고, 아니면 하나의 영상 오른쪽 상단의 timestamp를 인식하게 만들어 실시간으로 timestamp에 맞는 neural data에 연결시켜주는 방법이 있다.

두 가지 방법 다 크게 좋은 선택이 아니라고 판단되었고, neural data를 직접 만저보기 전에 생각한 해결방법이기 때문에 먼저 neural data를 직접 만저보고 해결방법을 찾아보기로 했다. 현재 가지고 있는 수민 선배님의 실험에서 neural data도 recording했기 때문에 영상에 맞는 neural data를 가져와 분석해 본 뒤 해결방법에 대해 고민해보았다. 

neural data를 분석하기 전에 거쳐가는 여러 단계가 존재한다. 금일 2가지 단계에 대해 배웠기 때문에 lab note에 2가지 방법에 대해 정리해보고 lab note를 마치려 한다.

먼저 recording된 neural data는 32KHz라는 대역폭으로 recording 된다. 32KHz로 recording되기 때문에 데이터의 용량이 크며 불필요한 주파수 또한 존재하기 때문에 분석에 어려움이 존재한다. 그리하여 CSC file program을 사용하여 32KHz의 데이터를 2KHz로 down sampling 한다. 그렇다면 Hz가 16배 정도 낮아진 것인데 그렇다면 원본 데이터와 비교했을 때 별 차이가 없는 건가?  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-2.png?w=800)

신기하게도 32KHz와 2KHz는 별 차이가 존재하지 않았다. 노란색이 32KHz이며 빨간색이 2KHz이다. 사진을 보면 차이가 크게 존재하지 않는 것 처럼 보인다. 하지만 timestamp를 보면 2KHz의 timestamp는 32KHz의 timestamp와 비교했을 때 timestamp가 소실된 결과를 보여주었다. 분석에는 큰 차이가 없다. 하지만 녹화된 실험 영상의 timestamp는 32KHz의 timestamp가 출력되고 있기 때문에 2KHz의 timestamp를 사용해도 이상이 없을지는 추후 test를 진행해 보아야 할 부분 중 하나라고 생각한다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-3.png?w=800)

neuralview의 record data 기능을 보게 되면 각 timestamp에 맞는 data를 볼 수 있다. record data를 보게 되면 가로로 긴 시트를 보여준다. 여기서 neural data는 32KHz로 recording 되기 때문에 한 timestamp 에서 512개의 data를 recording 한다. 그렇다면 한 칸단 recording하는데 걸리는 시간은 **1/32KHz×512** 이며 현재 timestamp에서 다음 timestamp로 이동하는데 걸리는 시간은 32KHz이다. timestamp가 이동하는데 걸리는 시간이 1초 언저리라고 생각했지만, 32KHz 라고 알 수 있는 정보였다. 추가로 한 timestamp에 512개의 data를 recording하는 것도 알 수 있었다. 한 timestamp에 512개의 data를 recording하기 때문에 data의 크기가 큰 이유 중 하나이기도 하다. 

추가로 cheetah에서 timestamp를 알기 위해서는 neuralynx data converter를 사용하여 event file을 csv file로 변환해 주어야 한다. cheetah에는 3가지 data가 존재한다. event, neural data, VTI이다. event file은 변환기를 사용하여 csv로 변환하게 되면 timestamp를 확인할 수 있다. VTI는 비디오 포지션 정보를 나타내는데 수민 선배님의 실험에서는 사용되지 않았다고 한다. 그리하여 변환기를 사용하여 timestamp를 확인하는 작업도 진행해 보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-4.png?w=800)

왼쪽 converter를 사용하게 되면 최대 12개 까지 event file이 들어가게 되며,  convert를 누르게 되면 csv file로 변환되고, csv file을 실행시키면 timestamp를 확인할 수 있다. 추가로 csv file에 behavior end -> 4 라고 입력되어 있는 부분은 실험자가 직접 입력한 내용이고 behavior가 종료되었다는 의미이기도 하다. 

금일 처음으로 neural data를 분석하기 전 준비하는 단계들을 알아보았다. 아직 제대로 분석하는 단계를 하지는 않았지만, 연속적인 data를 가지고 있는 LEP를 분석해 보는 시간을 가져보려고 한다. 또한 VR 실험을 진행 시 neural data의 수집 방법과 관리 그리고 분석 방법에 대해 더 자세히 알아봐야 할 필요성을 느꼈다. 기회가 된다면 다른 선배님들의 VR setup에서 neural data 수집 방법과 방식 그리고 분석 방법에 대해 설명을 들으면 좋을 것 같다.
