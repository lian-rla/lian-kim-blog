---
title: "2025/10/23(목)"
date: "2025-10-27"
categories: "research"
author: "lian"
emoji: "🔬"
---

tesserat를 사용하여 영상에서 timestamp를 출력 후 csv file로 저장하는 python code 개발을 계속 진행했다. 그러나 정확도 면에서 한계가 명확하게 들어났다. 한계를 극복하기 위해서는 영상에 알맞은 threshold를 여러번의 test를 진행하여 찾아야 하며, 수많은 threshold를 test 하기 위해서는 timestamp가 출력되는 시간이 길기 때문에 비효율적인 시간이 소요될 것이라고 판단했다. 또한 tesseract에 직접 학습시킬 학습데이터를 뽑아 사용자가 입력 후 학습하여 사용하게 되면 정확도가 올라가지만, 이 또한 많은 시간이 소요될 것이라고 판단했다. 

그리하여 tesseract의 속도 및 정확도에 대한 한계를 극복하고 영상에서 timestamp를 출력하기 위해 다른 tool 사용을 찾게 되었다. 

naver ai lab에서 clova ai 문자 인식에 사용한 easyOCR을 사용하여 영상에서 timestamp를 출력하는 것으로 방향성을 잡았다. easyOCR은 tesseract와 다르게 pytorch 기반 딥러닝 모델로 CRAFT(character region awareness for text dection) 딥러닝에 사용되는 문자 인식열 전용 인공 신경망을 사용하여 80여개의 문자를 인식할 수 있게 설계된 문자인식 딥러닝 pythorch 오픈소스이다. 또한 tesseract와 다르게 gpu를 사용할 수 있도록 설계되었기 때문에 cpu를 사용하는 tesseract보다 속도 면에서 장점이 있을 것이라고 판단했다. 
 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-13.png?w=800)

easyOCR의 CRAFT 방식에 대해 더 설명해 보자면,  먼저 주어진 이미지 및 영상에서 word box 단위로 이미지를 crop한다. 그 후 interim model을 이용하여 crop 된 이미지의 region scroce를 예측하여 watershed algorithm을 이용해 문자 영역을 분리하여 character box를 결정한다. 마지막으로 분리된 character box들이 crop되기 이전의 원본 이미지 좌표로 이동시켜 원본 이미지에서 character box로 나눠진 문자들을 학습한다. 
현재 실험자가 사용중인 timestamp의 영상의 timestamp에 적용 시켜 본다면, 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-14.png?w=800)

먼저 16자리의 숫자를 크게 인식 한 뒤 easyOCR CRAFT가 region score를 계산하여 각각의 16자리 숫자를 인식하는 것이다. tesseract는 timestamp가 존재하는 ROI 좌표를 입력하여 pixxel 단위로 숫자를 입력 받았다면, easyOCR은 각 자리의 숫자를 한 번에 입력받는 것이다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-15.png?w=800)

알고리즘 또한 tesseract를 사용했을 때 보다 더 간단해졌다. 원래는 tesseract에서 여러가지 for문을 사용하여  threshold를 사용하여 가장 높은 신뢰도를 보인 threshold의 결과값을 print 값으로 채용했다. 하지만 easyOCR은 threshold를 사용하지 않고 각각의 문자의 region score을 계산하는 deeplearning data를 사용한다. deeplearning data 값이 높은 신뢰도를 보이기 때문에 여러 threshold를 사용하지 않아도 될 것으로 판단했다. 추가적으로 timestamp가 출력되지 않는 frame은 이전의 frame의 timestamp를 출력하도록 code를 설계했다. 마지막은 전 code와 동일하게 pandas를 사용하여 print된 timestamp의 값을 csv flie에 저장하도록 설계했다. 

먼저 easyOCR을 사용하기 위해서는 anaconda prompt에서 easyOCR을 다운받기 위한 명령어와 pythorch를 다운 받는 명령어, gpu에 맞는 cuddn 명령어를 입력 후 vscode에서 연결시켜 주어야 사용 가능하다. 
먼저 ananconda prompt에서 새로운 가상환경을 만들어 준다. (원래 사용하는 가상환경을 사용해도 무관하다.) 그 후 사용자가 원하는 가상환경에 들어가 준다.

`conda activate (사용자가 원하는 가상환경 명칭)`

그 후 GPU에 사용할 deeplearning engine인 pytorch를 다운받아 준다.

`conda install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia`

실험자는 4090ti가 2개인 환경에서 실험을 진행하기 때문에 4090ti에 맞는 cuda version과 pythorch를 다운받아 주었다.
그 후 easyOCR을 다운받아 준다.

`pip install easyocr`

추가적으로 영상 frame 분석에 사용할 openCV와 CSV file 저장에 사용할 numpy 또한 다운받아 준다,

`pip install opencv-python-headless pandas numpy tqdm`

위 명령어를 모두 입력했다면 easyOCR을 pythorch를 사용할 GPU 환경에서 사용 가능한 세팅이 완료된다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-16.png?w=800)

code를 실행시켜 본다면 먼저 gpu가 설정되었는지 출력되며, gpu 경로가 출력되었다면, gpu를 사용하여 영상에서 timestamp를 추출하기 시작한다. 10초 영상을 기준으로 약 3분이 소요되었다. tesseract를 사용한 알고리즘과 비교했을 때 속도가 많이 증가했다. 또한 아직 제대로 된 timestamp검증을 해보지는 않았지만, 영상과 출력된 timestamp를 비교해 본다면, 거의 차이가 없는 것을 확인할 수 있었다.  

easyOCR이라는 deeplearning data 소스를 사용하여 영상의 timestamp의 출력에 성공은 하였지만 한계는 존재했다. 먼저 timestamp의 16자리 숫자 중 마지막 1자리의 숫자가 CSV file 내에서 data를 열게 되면 0으로 입력되어 나타난다. excel 자체에서 이진법으로 15자리의 숫자까지만 입력이 안되기 때문에 16번째 자리의 숫자는 항상 0으로 출력되는 문제가 있다. code에서 timestamp를 출력한 결과물을 보게 되면 16번째 자리의 숫자 또한 인식이 되는 것으로 출력되지만, CSV file 상에서 출력이 안되는 문제이기 때문에 code 수정이 아닌 excel 내에서 숫자 데이터를 텍스트로 출력하는 기능을 찾아보거나, code에서 CSV file을 저장할 때 숫자 데이터가 아닌 문자열 데이터로 저장할 수 있는 방법을 찾아 해결해 보아야 할 것 같다.
