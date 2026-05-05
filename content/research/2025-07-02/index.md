---
title: "2025/7/2(수)"
date: "2025-07-02"
categories: "research"
author: "lian"
emoji: "🔬"
---

**mouse medical check**

금일 필자의 쥐인 LE49,LE50번의 몸무게 측정 및 103B 이사를 완료했다. 이사를 할 때는 카트를 이용하여 이사를 하는데, 카트에 존재하는 가림막을 꼭 쳐줘야한다.(동물을 이동할 때는 꼭 가려서 이동해야 된다고 말씀하셨다.) 103B를 도착하고 쥐들을 약 30분 동안 방치했다. 새로운 환경에 적응하는 시간을 주기 위해 30분동안 적응 시간을 준 것이다. 

30분의 시간동안 필자의 연구복을 세탁했다. 이제부터 본격적으로 동물실험에 들어가기 때문에 연구복을 먼저 세탁시켜주는 시간을 가졌다. 추가적으로 핸들링 타월 또한 새로 받고 세탁을 진행했다. 세탁은 지하 B104호에 있는 세탁기를 사용하여 세탁을 진행했다. 핸들링타월 보관 공간도 지정받았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/img_9853-2.jpeg?w=766)

103B에 있는 서랍 2번째 칸에 배정받았으며, 세탁이 완료된 핸들링타월을 넣어 놓았다.

그 후 LE49, LE50의 medical check를 진행했다.(몸무게 및 상태 체크)

**LE49**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-02-ec98a4ed9b84-5.47.05.png?w=670)

LE49의 금일 몸무게는 462g이었다. 어제 30g 밥양이 많았는지 49번의 몸무게가 더 늘어났다. 추가적으로 금일 핸들링 할때 어제처럼 49번이 소리를 내지 않았다. 아마도 필자의 손이 이제 익숙한 듯 보였다. 추가적으로 금일 밥은 17시에 배분했다. 어제와 똑같은 30g을 배부했는데, 오늘은 추가적으로 설탕물도 넣어 주었다. 설탕물통은 반출입실에 있으며 설탕물은 103B 앞에 냉장고에 있다. 15ml씩 넣어주었다. 49번은 넣어주자마자 기다렸다는듯이 설탕물을 계속 먹었다. 나중에 확인해보니 설탕물이 금방 바닥을 드러냈다. 이 신호는 나중에 실험에 들어가 reward를 줄때 좋은 신호라고 하셨다. 확실히 49번은 무엇이든지 적극적이고 적응력이 빠른 것 같다. 어제 배딩을 청소해주었는데,  배변도 정말 많이 쏴놓았다. 케이지에는 완벽하게 적응한 모습을 많이 보여주었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/img_9857.jpeg?w=766)

**LE50**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-02-ec98a4ed9b84-5.47.16.png?w=618)

LE50은 겁이 정말 많다. 첫 날에도 핸들링 할때 가만히 있어주었고, 저울로 옮길때도 정말 온순하게 옮겨졌다. 50번은 103B에 이사를 하고 난 후 케이지 배드를 한 곳에 몰아놓는 행동을 많이 보였다. 지금도 확인해 보니 배드를 한 곳에 많이 몰아놓았다. 저울로 옮길때 50번은 정말 온순하게 옮겨졌다. 어제 준 30g의 밥은 다 먹었으며, 금일도 49번과 마찬가지로 30g을 주었다. 추가적으로 설탕물 15ml를 배부했다. 50번은 설탕물을 보고 한참을 바라보더니 먹기 시작했지만 금새 먹는 것을 그만두었다. 아직까지 케이지에 완벽하게 적응하지는 못 한 것 같다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/img_9858.jpeg?w=768)

(LE50 배딩을 많이 밀어놓은 모습)

몸무게 변화 및 특이사항을 빠르게 확인하기 위해 필자는 excel로 medical checklist를 만들었다. 이 excel 파일에 매일 몸무게와 밥량 그리고 기타사항을 기입할 예정이다. 

**Deeplabcut project**

Deeplabcut project를 금일부터 시작했다. 백업이 정말 오래걸려 많은 시간이 지났다.(아직 백업이 끝나지 않았다.) 

금일은 deeplabcut에 사용할 영상 파일의 확장자를 변환하는 작업을 했다. 선배님들께서 촬영하신 쥐들의 영상 파일은 확장자가 .sec이다.(*.sec - CCTV 전용 확장자) 이 .sec를 deeplabcut이 읽을 수 있는 .mp4나 .avi 파일로 확장자를 변환시켜줘야 한다. 원래 확장자를 변환시키기 위해서는 이름바꾸기를 통해 확장자명을 변경해주면 되지만 .sec는 경우가 달랐다. 확장자를 변환시켜주기 위해서는 다른 방법을 사용해야 했다.

**process**

.sec 확장자를 .mp4로 변환하기 위해서 필자는 ffmpeg을 사용했다. ffmpeg은 확장자를 변환시켜주는 tool이라고 보면 된다. 

먼저 [ https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/) 이 주소에서 ffmpeg-release-essentials.zip을 다운받아 주었다.  그 후 압축을 풀고 윈도우 왼쪽 하단 찾기에 "환경 변수"를 입력하여 실행시켜준다. 그러면 시스템 속성이 열린다. 여기서 환경 변수를 눌러주고 사용자 변수와 시스템변수에 존재하는 path를 편집하기를 눌러준다. ffmpeg 압축을 푼 경로를 추가해 주고, 새로만들기를 눌러준다. 아래 시스템 변수또한 똑같이 진행해준다. 이 path등록 과정을 진행하는 이유는 ffmpeg을 사용할때마다 폴더의 경로를 cd로 들어가 체크해 줘야 하기 때문에 모든 폴더의 경로에서 사용하기 위해 등록을 진행해 주었다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/img_9860.jpeg?w=766)

(path에 등록된 모습)

등록이 완료되었으면, ffmpeg이 실행이 잘 되는지 test를 진행한다. cmd 창에

**ffmpeg -version**

을 입력하여 에러가 발생하지 않는지 test를 진행한다. 에러가 뜨지 않고 version이 나온다면 ffmpeg의 path 등록이 잘 된 것이다. 

ffmpeg의 실행에 앞서 ffmpeg의 명령어들을 설명하고 들어가겠다. 

ffmpeg -i input.sec -c:v libx264 -crf 23 -preset medium output.mp4

cmd창에 .sec 확장자를 .mp4 확장자로 변경하기 위해 입력하는 명령어이다. 여기서 -i input.sec은 입력파일을 의미한다. 필자가 .mp4파일로 바꿔야 하는 파일을 의미한다. ex)1140106_0100.sec -c:v libx264는 비디오 코덱을 의미한다. 여기서 사용되는 코덱은 mp4에 적합한 H.264이다. -crf 23은 영상 품질을 의미한다. 0,23,51로 값을 조절할 수 있으며 0은 무손실 23은 기본 51은 최저를 의미한다. -preset medium은 인코딩 속도 및 품질 균형 속도를 의미한다.  medium 부분을 ultrafast, fast, medium, slow 로 조절 하여 인코딩 속도와 품질 균형 속도를 조절할 수 있다. output.mp4는 출력될 파일의 이름을 말한다. 

ffmpeg의 변수 설명이 마무리 되었으니 ffmpeg을 가지고 .sec를 .mp4로 확장자 변환하는 방법에 대해 설명하겠다.

1. cmd 창에 자신이 원하는 경로를 입력한다. 

- ex cd F:rat923\SEC_2024011_1148

- 이 경로를 제대로 입력하지 않으면 ffmpeg이 사용자가 원하는 파일을 찾지 못한다.

2. ffmpeg -i input.sec -c:v libx264 -crf 23 -preset medium output.mp4 

- 사용자가 원하는 파일명을 input에 입력하고 output에 원하는 출력명을 입력한다

- 추가적으로 변수를 설정하여 사용자가 원하는 영상 품질을 얻게 설정한다.

3. 출력된 영상 결과물을 확인한다.

위 과정을 통해 .sec 확장자 명을 변경할 수 있었다. 하지만 cmd창이 익숙하지 않는 분들이 사용한다면 어려운 과정이며 필자는 파일 하나를 통째로 확장자 명을 변경해야 했기 때문에 .sec 확장자를 .mp4로 변경해주는 Tool를 개발했다.

**solution**

먼저 개발 환경을 구축하기 위해 필자는 컴퓨터에 visual studio code를 설치해주었다. 다른 개발 tool을 사용해도 되지만 필자는 visual studio code가 익숙했기에 visual studio code를 설치했다. 

설치가 되었다면, python과 한글을 설치해준다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ecbaa1ecb298.png?w=675)

GUI를 사용하기 위해  filedialog, scrolledtext, messagebox를 import해 주었다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/1.png?w=580)

cmd창에 입력한 ffmpeg의 변수를 선언해주고, list로 받았다. 
(위에서 설명한 사용자 변수이다. 이 변수를 list에 넣어 저장해 준 것이다.)

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/3-edited.png)

추가적으로 input하는 폴더를 선언해주고 사용자가 원하는 위치에 저장가능가능 하게 선언했다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/4.png?w=935)

GUI를 만들어 주기 위해 실행 버튼 및 출력 로그 창 그리고 출력 폴더를 선택할 수 있는 버튼을 만들어 주었다. 

이후 실행을 진행하면,

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/5.png?w=701)

위 사진과 같이 필자가 개발한 GUI가 나타난다. 위 GUI에서 변환할 .sec폴더 선택 버튼을 눌러 원하는 .sec가 묶여있는 파일을 고른다. .mp4 저장 폴더도 선택하여 원하는 위치에 저장경로를 지정한다. 변환 시작 버튼을 누르면

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/6.png?w=700)

위 사진처럼 변환이 진행되고 .sec 파일이 .mp4파일로 사용자가 원하는 위치의 폴더에 저장된다.

**error**

필자가 변경해야 될 파일은 0100~0600이다. 그리하여 필자가 개발한 변환기로 변환을 진행하니 error가 발생했다. 0100파일은 변환이 진행되지만, 0200,0300파일은 변환이 진행되지 않았다 또한 0400부터는 변환이 잘되었다. 다른 파일도 마찬가지였다. 필자가 개발한 변환기가 문제일까 생각하여 다시 cmd 창으로 돌아가 명령어를 입력해 보았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/img_9859.jpeg?w=766)

cmd 창에서도 여전히 error가 발생했다. error에 대해 찾아보니 .sec 파일을 찾을 수 없다라는 뜻이었다. 0200와 0300의 특징을 알아내기 위해 파일을 뜯어보았다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-02-ec98a4ed9b84-7.08.44.png?w=1024)

위 파일이 .mp4로 변환되는 0100파일의 HxD (헤더 바이트 패턴)을 분석한 사진이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/ec8aa4ed81aceba6b0ec83b7-2025-07-02-ec98a4ed9b84-7.08.51.png?w=1024)

위 사진은 .mp4로 변환되지 않는 HxD이다.

차이가 보이는가? 필자는 차이를 보지 못했다. 변환되는 파일과 변환되지 않는 파일의 HxD구성이 거의 같은데 왜 error가 발생할까?

속성을 통해 0200과 0300의 용량을 보니 안되는 이유를 유추할 수 있었다. 0200,0300의 크기가 변환되는 파일과 비교했을 때 현저히 작은 용량을 가지고 있었다. 이것으로 보았을 때, 아마도 CCTV를 통해 쥐들을 촬영한 setup에서 무엇인가 0100파일과 다른 점이 존재하여 ffmpeg로 확장자가 변환되지 않는 것이라 유추한다. 아직 이 error을 해결하지 못해 모든 영상을 deeplabcut영상소스로 사용할 수 없지만, 제일 중요한 0100과 0400의 영상파일을 쓸 수 있게 되어서 프로젝트를 진행할 수 있을 것 같다. 명일 자료를 더 찾아서 error을 해결해 보려고 한다. (.sec 확장자에 대한 자료를 좀 더 찾아봐야 될 것 같다.)
