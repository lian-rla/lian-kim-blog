---
title: "2025/6/20(금)"
date: "2025-06-20"
categories: "research"
author: "lian"
emoji: "🔬"
---

**JC discussion 정리**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-1.54.46.png?w=1024)

cluster의 설계 미스 -> 위 논문의 Figure 3의 C를 보면 cluster template(유사한 신경 시퀀스들의 패턴들의 모음)가 burst event안에서 뉴런들이 활성화 되는 시간을 의미한다. 그러나 오늘 JC에서 이 Figure에 대해 논쟁이 있었다. 필자가 이해한 바로는 learning과 learned condition간의 시컨스 클러스터 변화를 분석하는 부분이 설계가 잘 못 되었다고 이해했다. 설명하자면, 학습 단계가 다름에도 모든 sequence data를 함께 clustering하여 하나의 고정된 cluster set를 만들고 그 세트에 sequence의 빈도를 비교하는 방식이 잘 못 되었다는 것이다. 아마도 이러한 cluster 비교방식은 학계에서 많이 사용하지 않는 방식 인 것 같다.

correct Trial rate의 불확실성 ->Supplementary Figure 1을 보면 correct trial rate의 데이터가 5일째 되는 시간에 learning보다 learned가 비이상적으로 확연하게 차이가 난다. 금일 JC에서 교수님의 말씀으로는 확연하게 차이가 날 수 없다고 하셨다. 아마도 중간 날짜를 뛰고 만들어진 Figure이며 잘 못 설계된 실험이라고 하셨다. 필자가 논문을 읽었을 때는 위 논문의 연구 실험이 어느정도 타당성이 있고, 문제점 정도라면 mPFC의 활동 상당 부분을 차지하는 non-SI sequence가 어떤 ability를 발휘하는지 서술되어 있지 않다 정도로 생각하여 높은 점수를 주었다. 하지만 위 논문은 저자의 가설을 입증하기위해 어느정도 짜집기를 한 연구라는 것을 선배들의 JC토론을 보고 알았다. 어느 부분이 정확히 잘 못 되었는지는 확실히 이해하지 못 했지만, 필자가 앞으로 읽어야 하는 paper를 생각해 본다면 이렇게는 쓰면 안된다는 좋은 본 보기가 된 것 같다.

**Test Deeplabcut **

명일 진행하였던, Deeplabcut을 install을 완료 후 deeplabcut을 직접 test해보았다.

먼저 jpeg 파일인 사진 한장을 가지고 test를 진행해보았다.

deeplabcut을 먼저 실행시켰다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-4.11.32.png?w=1024)

`conda activate DEEPLABCUT
python -m deeplabcut`

terminal에 명령어를 입력하여 conda로 가상환경을 만들어 주고 deeplabcut을 실행시켜 주었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-4.10.15.png?w=1024)

config.yaml file을 visual studio를 통해 열어주고 

`image_based: true`

video_set: 위에 추가하여 image diretor를 만들어준다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-3.57.10.png?w=1024)

그 후 creative project를 눌러 project를 만들어 준다. 

*jpeg 파일과 location 파일의 위치가 같아야 한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-4.07.19.png?w=1024)

manage project창에서 edit config.yaml을 눌러 image_base가 생성되었는지 확인한다.

생성이 된걸 확인 했다면 label frame에 들어가 원하는 위치에 labeling 후 저장해준다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-4.28.09.png?w=1024)

영상 파일은 여러장의 사진이 겹쳐서 만들어진 파일이다. 그리하여 영상 파일도 deeplabcut을 통해 labeling을 진행해 보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-5.56.48-1.png?w=1024)

youtube에 올라와있는 쥐 영상을 finalcut 영상 편집 프로그램을 사용하여 24초짜리 영상으로 만들어 test용 동영상 file을 만들었다.

위 영상을 통해 쥐의 tail을 직접 labeling하여 필자의 device인 Mac os apple silicon에서 pyTorch로 학습시켜 쥐 tail이 labeling된 영상을 얻어보겠다. 

처음 과정은 위 jpeg과정과 똑같아 설명은 넘어가겠다. 추가적으로 다른 부분은 ai가 학습할 수 있도록 parameter을 여러장 만들어 줘야 한다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-4.47.59.png?w=1024)

labeling을 완성했다면 skeleton까지 만들어 준다.

그 후 train network에서 create training dataset을 눌러 learing을 진행해주면

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-5.23.41.png?w=1024)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-5.24.49.png?w=1024)

위 터미널 창 처럼 learing한다. 필자는 약 20분 정도 소요되었다.

learn이 완료가 되었다면 analyze videos에서 csv를 만들어 좌표값을 받아준다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-5.50.41.png?w=1024)

위 좌표값을 토대로 pyTorch가 learning을 진행하였고, 영상에 learing과정을 입혀 labeling된 영상을 추출한다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-6.08.50.png?w=1024)

labeing 된 영상 추출 과정이 담긴 terminal 창이다. 필자는 약 1시간 반 정도 걸렸다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img0014_bodypart.png?w=1024)

쥐 tail 부분에 labeling이 된 모습을 확인 할 수 있다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-20-ec98a4ed9b84-7.34.49.png?w=1024)

추가적으로 csv data 도 함께 나온 모습이다. 위 데이터를 가지고 추우에 matplotlib을 활용하여 data 그래프를 그려보려고 한다.
