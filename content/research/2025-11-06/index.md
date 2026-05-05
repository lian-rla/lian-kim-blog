---
title: "2025/11/6 (목)"
date: "2025-11-06"
categories: "research"
author: "lian"
emoji: "🔬"
---

4시간 걸리던 easyOCR 처리를 45분까지 줄였다.

GPU를 사용하여 easyOCR의 딥러닝을 진행하고 있는 줄 알았지만, CPU를 사용하여 easyOCR의 딥러닝을 하고 있어 오래 걸린다는 것을 확인했다. 그리하여 easyOCR을 GPU를 사용하여 딥러닝을 진행하고 추가적으로 현재 3090 2개를 사용하고 있기 때문에 multiGPU 설정까지 진행했다. 

먼저 GPU를 설정하기 위해서 cuda와 pytorch 그리고 opencv의 설치를 다시 진행했다. 

`python -m torch.untils.collect_env`

`pip uninstall torch torchvision torchaudio -y`

위 2가지를 입력하여 원래 설치된 pytorch를 제거해 준다. 

`pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118`

`pip install --upgrade easyocr`

`pip install opencv-python`

그 후 위 3가지를 입력하여 GPU version의 torch와 openCV 그리고 easyOCR을 다시 설치를 진행한다. 
설치가 완료되었다면, GPU가 잡히는지 확인 후 원래 사용하던 code를 실행시켜 속도를 비교해 본다. 

multiGPU를 사용하기 위해서는 1개의 frame에 2개의 GPU를 사용하여 연산을 진행하는 것은 불가능 했다. 예를 들어 첫 번째 frame에서 timestamp를 추출하기 위해서는 GPU 1개만 사용하여 연산이 가능하며, 2개를 동시에 사용하여 연산하는 것은 불가능 하다는 것이다. 
위 말을 요약하자면, 2개의 GPU가 각각 다른 연산을 진행해야 한다는 것이다. 그리하여 2개의 GPU를 다른 연산을 진행하기 위해 영상 전체 frame을 scane하여 frame의 총 개수를 파악한 후 절반으로 첫 번째 frame 부터 중간 frame 까지는 GPU 0, 중간 frame 부터 마지막 frame 까지는 GPU 1이 easyOCR을 사용하여 timestamp를 출력하게 진행했다. 
33분 영상의 총 frame은 59677개이다. 그리하여 GPU 0에는 0 ~ 29838 frame을 GPU 1에는 29838 ~ 59677 frame으로 나눠 easyOCR을 진행 후 timestamp를 출력한다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-15.png?w=800)

왼쪽 사진을 보면, 각 GPU에 맞게 frame이 나눠진 모습을 확인할 수 있다. 
처음에는 각 GPU에서 easyOCR을 사용하여 출력되는 timestamp를 print문을 통해 출력하게 만들었다. 하지만 print문을 출력하면서 많은 오류가 발생하는 것을 확인했다.(렉이 심하게 걸림) 추가로 GPU 0과 GPU 1의 print 문이 충돌하여, 출력이 제대로 되지 않는 문제 또한 발생했다. 이유는 easyOCR의 연산은 GPU에서 이루어 지지만 print 문 출력은 CPU에서 이루어 지기 때문에 CPU가 GPU의 연산을 따라가지 못해 발생하는 문제였다. 그리하여 print 문을 while문 밖으로 출력하려고 하였지만, 이것 또한 렉을 유발한다고 판단하여, print문을 지웠다. 
그렇다면 GPU가 timestamp를 출력하고 있다는 것을 어떻게 확인하나? windowPowershell을 실행시켜

`nvidia-smi`

입력한다면, GPU의 실시간 사용률을 확인할 수 있다. 오른쪽 사진을 보게 되면, code를 실행시킨 후 GPU의 실시간 사용률을 캡처한 영상이다. GPU 0 과 GPU 1의 사용률이 증가한 것을 확인할 수 있었다. 
출력이 완료되면, csv file에 timestamp를 저장하여 사용자에게 보여준다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-16.png?w=800)

GPU 0과 GPU 1로 따로 출력했더라도, csv file 상 timestamp는 0 ~ 59677 frame의 순서에 맞게 출력되는 결과를 확인할 수 있었다.

전체 걸린 시간을 캡처 하지 못 했지만, 45분이라는 시간이 걸리는 것을 code에 import time하여 확인했다. 4시간 정도 걸리던 시간을 45분으로 줄인 것이다. 
multiGPU를 사용한 CNN 방식의 딥러닝 개발은 처음 진행했지만. 만족할 만한 결과를 보였다. 그리하여 월요일에 피드백 받은 부분 또한 code를 만들어 보았다.

영상을 처음부터 끝까지 easyOCR을 사용하여 판독하는 것은 45분이라는 시간으로 줄어도 긴 시간이라고 판단했다. 그리하여 사용자가 지정한 부분까지 easy OCR을 사용하여 timestamp를 추출 후 입력한 cheetah event log의 첫 번째 timestamp와 오차범위 이내의 timestamp를 출력하여 영상을 neural data를 recording 한 순간 부터 play 해주는 code 개발을 진행했다. 추가적으로 이 code 또한 multiGPU를 사용하여 개발을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-17.png?w=800)

code를 처음 실행하면 나타나는 출력물이다. 사용자가 영상에서 지정한 시간까지 easyOCR을 사용하여 timestamp를 추출한다. 이러한 형식으로 개발을 진행한 이유는 실험을 진행한 날마다 실험자는 영상을 recording한 순간과 neural data를 recording한 순간이 다르다. 어떠한 순간에는 간격이 좁을 수도 있으며, 다른 순간에는 쥐의 컨디션에 따라 영상 recording과 neural data를 recording하는 순간이 길 수 도 있다. 이러한 이유로 사용자가 지정한 영상의 시간까지 easyOCR을 사용하여 timestamp를 출력하게 개발했다. 
출력물 3번째 줄을 보게 되면 cheetah event log에서 최상단 timestamp를 입력 받아 출력되는 것을 확인할 수 있다. 
또한 사용자가 지정한 시간대까지 frame을 계산하여 절반으로 나누고 첫 번째 frame부터 절반까지의 frame은 GPU 0, 절반 frame부터 사용자가 지정한 시간의 frame까지는 GPU 1이 나눠 딥러닝을 진행하도록 설계했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-19.png?w=800)

code의 결과물을 보게 되면, timestamp를 출력하고, 가장 유사한 timestamp를 찾아 영상을 재생한다. 오른쪽 사진을 보면 실험자가 neural data를 recording 한 순간부터 영상이 재생되는 것을 확인할 수 있다. 

금일 multiGPU를 사용하여 easyOCR의 딥러닝 속도를 높히는데 성공한 부분이 아주 큰 결과라고 생각한다. 4시간 걸리던 timestamp 출력 방식을 45분까지 줄일 수 있어, 여러가지 GUI로 나타낼 수 있게 되었다.
사용자가 원하는 timestamp부터 영상을 출력해 줄 수도 있으며, neural data 및 behavior를 판독하는데도 daily data로 활용할 수 있을 것이라고 판단한다.
