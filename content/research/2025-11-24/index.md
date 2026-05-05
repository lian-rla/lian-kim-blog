---
title: "2025/11/24 (월)"
date: "2025-11-24"
categories: "research"
author: "lian"
emoji: "🔬"
---

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-39.png?w=800)

금일은 DLC를 활용하여 출력된 label data를 가지고 unreal log와 cheetah event log와 동기화 시켜주는 작업을 진행했다. 

현재 test data로 사용중인 LE1008의 영상에는 문제점이 3가지가 존재했다. 
1. 측면에서 촬영한 영상에 digitalynx timestamp가 존재하지 않고, 다른 CAM 화면에 timestamp가 존재한다.
2. timestamp가 존재하는 CAM 녹화 영상과 측면에서 촬영한 녹화 영상의 길이가 다르다.
3. DLC label data의 개수와, cheetah event log(unreal log)의 개수가 다르다.  

**1.측면에서 촬영한 영상에 digitalynx timestamp가 존재하지 않고, 다른 CAM 화면에 timestamp가 존재한다.**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-40.png?w=800)

 timestamp 추출 알고리즘을 개발할 때는 timestamp와 쥐를 측면에서 녹화한 영상이 같은 영상으로 존재했지만, 이번 test에 사용할 영상은 timestamp가 다른 CAM으로 분리되어 있어 CAM 06에서 추출한 timestamp를 CAM 02의 영상과 동기화를 진행할 필요가 있다고 판단했다.동 시간에 촬영한 영상이기 때문에 다른 CAM에 timestamp가 존재하더라도 frame의 개수가 똑같기 때문에 충분히 쉽게 맞출 수 있을 것이라고 판단했다. 

**2. timestamp가 존재하는 CAM 녹화 영상과 측면에서 촬영한 녹화 영상의 길이가 다르다.**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-41.png?w=800)

동시간에 촬영한 영상이기 때문에 끝나는 시간이 동일해야 정상이다. 하지만 CAM 02와 CAM 06의 영상 길이가 다른 문제점을 발견했다. frame rate도 30FPS로 동일한 것을 확인했다. 수민 선배님께 여쭤보니, VR 실험실의 세팅 문제로 인해 영상의 길이가 다르다는 답변을 들을 수 있었다. 각 영상의 frame 개수를 확인해 보니 CAM 02는 62950개 CAM 06은 63303개로 353개의 frame 차이가 나타난 것을 확인할 수 있었다. 353개의 frame 차이는 약 12초의 차이가 나타는 것이기 때문에 CAM 06에서 추출한 timestamp를 기준으로 영상을 맞춘다고 해도 정확한 영상의 출력 시간을 맞출 수 없을 것이라고 판단했다. 

**3. DLC label data의 개수와, cheetah event log(unreal log)의 개수가 다르다.  **

DLC로 출력한 label 좌표의 개수를 확인해본 결과 cheetah event log와 unreal log의 data 개수가 다르다는 것을 확인했다. DLC에서 출력을 하기 위해 따로 사용하는 frame rate가 존재하는지 찾아본 결과 입력한 원본영상의 frame rate를 따라 출력되기 때문에 frame rate에는 문제가 없다는 것을 확인했다. 그렇다면, DLC는 neural data를 인코딩 하기 전 즉 실혐 녹화를 시작하는 시점부터 끝나는 시점까지의 영상 좌표를 출력한 것이기 때문에 cheetah event log의 timestamp와 비교했을 때 data의 개수가 많은 것은 당연한 것이다. 하지만 DLC label data 에는 timestamp가 따로 존재하지 않기 때문에 cheetah event log 와 DLC label data를 어떠한 기준을 가지고 맞추어 주어야 할지 결정해야 했다. 

**solution **

easyOCR log(추출한 timestamp)  -> cheetah event log(digitalynx timestamp) -> unreal log -> DLC label data
순서로 동기화 작업을 진행해 주었다. 먼저 easyOCR로 추출된 timestamp를 cheetah event log의 첫 번재 timestamp와 비슷한 timestamp를 easyOCR log에서 찾아 편집을 진행했다. 
위 작업을 진행한다면 easyOCR log 그리고 cheetah event log, unreal log의 시작 지점은 거의 비슷하게 맞춘 것이다. 하지만 DLC label data가 문제인데 전체 영상을 가지고 DLC label data를 사용하여 시작 지점을 다른 log들과 동일하게 맞춰 주는 것은 불가능하다고 판단했다. 그리하여 easyOCR log에서 cheetah event log의 timestamp와 비슷한 timestamp를 편집한 frame 구간부터 영상이 저장되도록 하는 python code 개발을 진행했다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/11/image-42.png?w=800)

code를 실행시키면 사용자가 편집을 시작할 frame을 받게 된다. 그 후 저장을 시작할 frame을 사용자에게 받고 편집된 영상이 따로 저장된다. 오른쪽 사진을 보면 34분 58초였던 영상이 34:34초로 줄어들어 cheetah event log의 timestamp와 동일한 시간대로 맞추어져 영상이 재생된다. 
이 영상을 통해 DLC를 사용하여 DLC label data를 출력하였고, DLC label data를 통해 task structure를 인식하는 behavior가 존재하는 구간 출력을 진행해볼 예정이다.
