---
title: "2025/9/29(월)"
date: "2025-09-29"
categories: "research"
author: "lian"
emoji: "🔬"
---

head direction figure와 mp4영상의 frame rate를 맞추는 작업을 진행했다. mp4영상의 시간대를 정해주면 csv file에서 동일한 frame의 label 좌표를 가져와 실시간으로 figure를 그리도록 설계했다. 가장 신경을 써줬던 부분은 영상의 frame 과 csv file의 frame 개수가 맞는지 의문이었다. 서현님께서 영상 frame 추출 코드를 만드셨을 때 영상의 frame 과 csv file의 frame 개수가 동일하다고 발표한 정보를 토대로 30fps의 영상과 csv file을 code로 받아 실시간 figure를 그리는 head direction GUI code를 개발했다.

 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-30.png?w=800)

VIDEO_PATH 와 CSV_PATH를 선언하여 mp4영상의 경로와 csv file의 경로를 설정해주었다. 여기서 csv file은 사용자가 VIDEO_PATH에 입력한 영상의 csv file을 넣어주어야 한다. 추가로 figure에 사용된 label의 좌표는 저번과 동일하게 양쪽 눈 앞 label의 사이를 구해 입력하도록 만들었다.

추가로 출력창에 영상을 play 할 수 있는 버튼과 30fps를 계산하여 play bar를 선택하면 원하는 시간대로 움직일 수 있도록 영상 하단에 기능을 추가하여 코딩을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-31.png?w=800)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-32.png?w=800)

동영상으로 올릴 수 없어 사진으로 대체하여 결과물을 보여주자면, 사용자가 지정한 mp4 영상은 왼쪽에 출력되고, 영상 하단에 원하는 시간대로 움직일 수 있는 bar를 추가하였다. 원하는 시간대를 지정하면 오른쪽 head direction을 표현하는 figure가 frame을 계산하여 실시간으로 화살표의 방향이 바뀐다. 

영상의 frame rate와 figure의 frame을 동일선상에 두어 비교분석하는 code까지 완료하였으니 이제는 head direction figure의 visualization에 몰두해볼 예정이다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-33.png?w=800)

현재 작업중인 3D 형태의 head direction figure이다. 완성본은 아니지만 지금까지 만들어본 결과물을 본다면, 화살표를 저번과는 다르게 그림자 기능과 head direction의 크기에 맞게 화살표의  크기도 움직이도록 만들었다. 그림자 기능을 추가하니 3D처럼 보이지만 화살표 뒤에 존재하는 구의 모형과 보조선이 아직까지는 부족하다. 가시성이 크게 증가한 것 같지는 않다고 판단된다. 3D figure는 계속 작업을 진행할 것이며, 다른 visualization 아이디어로는 항공 계기판 처럼 head direction을 표현해보면 어떨까 생각이 들었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/09/image-34.png?w=800)

항공 계기판을 보게 되면 비행기의 수평수직 각도를 표현할 수 있게 되어있다. 아마도 위 아이디어로 figure를 제작해 보려면 DLC에서 쥐의 다른 신체 부위의 label 위치가 필요할 것 같다. 쥐 head의 수평 수직을 알아내야 하기 때문에, 눈과 코의 위치만으로는 수평 수직을 알아내기는 어려울 것이라고 판단된다. 

mp4 영상의 frame rate와 csv file의 frame을 맞추는 작업은 처음 진행해 보았고, 많은 시간을 소모했다. 사실 가장 중요한 작업 중 하나라고 생각하여, 구글링과 github에서 수만은 정보를 모두다 긁어 모아 개발을 진행했다. 5분 영상으로 test를 진행해보았을 때 frame rate code가 완벽하게 구동하는 것을 확인해보았고, 더욱 나아가 30분 40분 같은 긴 영상을 사용하여 test도 진행해 보아야 할 것 같다.
