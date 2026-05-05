---
title: "2025/6/23(월)"
date: "2025-06-23"
categories: "research"
author: "lian"
emoji: "🔬"
---

**How can i get a good resu**lt?

쥐  tail을 deeplabcut을 활용하여 labeiling 후 data를 얻고, 그 후 labeling된 mp4 file까지 출력해 보았다.  20일(금)에 test한 데이터를 토대로 labeling 된 mp4 file을 출력해보았다.

출력된 mp4 file은 초반 labeling은 제대로 되었지만, 쥐가 움직이기 시작하자 tail2,3의 label은 소실되어 제대로된 data를 얻을 수 없었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-23-ec98a4eca084-9.07.43.png?w=954)

(mp4 file 초반... tail1,2,3,4의 labeling이 잘 된 모습을 볼 수 있다.)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-23-ec98a4ed9b84-1.40.15.png?w=482)

(mp4 file 후반... tail2,3의 labeling이 소실되어 쥐 tail의 data를 알 수 없다.)

필자는 위 project를 진행 할 때 

numframe 2 pick : 20 (frame 학습 갯수)

maximumepochs : 20 (에포크 : data 반복 학습 횟수)

dotsize : 8 (labeling 크기)

body part : 4 (tail 1,2,3,4)

로 수치를 주었고, train network는 8minute 이 소요 되었으며, analyze video 과정은 1 hour이 소요되었다. 필자는 위 project가 왜 labeling이 제대로 되지 않았는지 이유를 알고 싶었다. 그리하여 위 수치들을 조정하고 비교하여 labeling된 결과를 뽑기 최적의 수치를 알아보는 목표를 잡았다.

먼저 24초나 되는 영상을 10초 영상대로 줄였다. 24초의 영상을 learing하고 labeling을 하기에는 너무나 큰 data가 필요하여 조정했다. labeling이 잘 된 result를 얻기 위해서 수치조정을 해주었다.

numframe 2 pick(사용자가 직접 labeling하여, parameter을 지정해주는 수치)를 20에서 100으로 증가 시켰다. 필자가 직접 labeling하는 수치가 많아지지만, Pytorch가 학습할 수 있는 데이터가 많으면 많아질 수록 좋은 result값을 얻을 수 있기 때문에 5배 증가시켰다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-23-ec98a4ed9b84-3.40.54.png?w=1024)

maximumepochs(data 반복 학습 횟수)는 20에서 1000으로 증가시켰다. 학습을 계속 반복할 수록 labeling이 잘 된 데이터를 얻을 수 있다. 필자의 개발 환경에서 epoch를 최대로 쓸 수 있는 1000으로 잡았다. 

test1(수치를 변형하기 전 project)의 result를 보았을 때 labeling된 dot가 너무 커 쥐의 tail이 잘 보이지 않았다. 그리하여 test2(수치를 변헝한 후 project)에서는 dot size를 8에서 2로 수치조정 해주었다. 

추가적으로 body part는 test1과 동일하게 4개로 적용하여 명칭을 각 각  tail1, 2, 3, 4,로 지정하였고, 색깔을 purple, mint, yellow, red로 지정해 주었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/ec8aa4ed81aceba6b0ec83b7-2025-06-23-ec98a4ed9b84-6.18.51-1.png?w=1024)

epoch를 1000으로 잡고 진행한 결과 금일 9시 부터 18시까지 진행하였지만 557정도 밖에 수행하지 못하였다.
시간이 많이 걸리는 관계로 명일 epoch수치를 다시 수정하여 test2를 진행하려 한다. 추가적으로 numframe 2 pick 은 100이라는 수치가 적당한 것 같다. 예상 외로 labeling에 걸리는 소요시간이 크지 않았다. 명일 진행할 test2에는 똑같은 수치를 적용하여 진행하겠다.

**Histology**

추가적으로 금일부터 이예빈 선배님과 함께 Histology 연구에 참여하게 되었다. 

쥐의 뇌를 광학 현미경을 통해 조직을 분석하고 실험하는 과정이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_1529.png?w=1024)

위 사진은 Histology schedule이다. 아마도 필자는 6월 26일에 DAPI를 진행할 것 같다. (중간에 이예빈 선배님께서 하시는 Histology schedule 과정에도 참여하여 배워볼 예정)

Histology 과정을 설명해 본다면, gel embedding을 통해 쥐의 뇌를 고정시키고 얼린 후 sectioning(micro 단위로 써는 과정)을 한 뒤, mounting(sliceing 된 쥐의 뇌를 PBS 용액으로 glass에 놓고 현미경으로 관찰 할 수 있게 만드는 과정)을 하고 DAPI 형광염색을 진행한다. 그 후 세포핵 주변을 푸른색으로 염색하여 원하는 위치의 조직을 관찰 할 수 있게 만든다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9764-1.jpeg?w=768)

(금일 필자가 진행한 mounting 결과물이다.)

mounting과정을 설명하자면,

1. glass에 붙어있는 테이프 부분에 정보를 작성한다.

- 쥐의 종(LE : Long Evans), 쥐의 번호(30)

- 염색 종류(DAPI), glass 순서(3)

- 성함(LYB), 날짜(25,06,23)

2. slice 된 쥐의 뇌를 붓으로 조심히 떠서 PBS 용액에 옮긴다 *PBS - 체내와 비슷한 전해질

3. PBS에 담궈진 뇌를 구멍이 오른쪽으로 오게 설정한다.

4. 붓을 가지고 glass에 쥐의 뇌를 조심히 mounting한다.

5. 위 과정을 반복하여 6개를 glass에 mounting한다.

6. 6개가 완료되었다면, 빛을 가려 보관한다.(염색을 하기 위해 빛을 받으면 안됨)

위 과정을 통해 mounting이 이뤄진다.

추가적으로 뇌를 glass에 올릴때 gel이 붙어 올라와 gel을 붓으로 제거해 줘야 하는데 gel을 제거하다 뇌가 찢어질 수 도 있다. 이 부분을 조심해서 gel을 제거해주어야 한다.(금일 필자는 하나를 찢어먹었다.)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/06/img_9766-1.jpg?w=768)

추가적으로 sectioning하는 과정 또한 참관하였는데, 3시간 정도 지나면 경화가 진행된다. 그 후 2개의 핀셋을 제거후 플라스틱을 제거해 경화된 쥐의 뇌를 빼낸다. 나이프를 사용하여 뇌가 없는 부분을 조심히 제거한다. 제거되면 직육면체의 모양을 가지게 되는데 모서리 부분을 뭉특하게 만들면서 뇌 부분에 근접하게 sectioning 해준다.

histology과정을 처음 접한 입장으로 필자는 모든게 신기했다. 금일 진행한 mouting과 sectioning과정은 정밀한 손재주가 필요로 했다. 진행하면서 필자의 손이 많이 떨렸는데 손떨림을 조금 고쳐야겠다고 생각했다. 추후에 진행할 histology의 과정에도 많은 궁금증이 생기는 시간이었다. 앞으로 명칭 및 과정을 많이 배워 원하는 위치의 data값을 현미경을 통해 측정하고 분석하는 과정을 완벽하게 수행해 내겠다.
