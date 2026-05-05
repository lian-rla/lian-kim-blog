---
title: "2025/10/27(월)"
date: "2025-10-27"
categories: "research"
author: "lian"
emoji: "🔬"
---

easyOCR을 사용한 timestamp 알고리즘은 code 출력물에서는 16번째 자리의 숫자까지 출력이 되지만 저장된 CSV file에서 timestamp를 확인하면 16번째 자리의 숫자는 모든 셀에서 0으로 출력되는 문제가 있었다. 이를 해결하고자 code에서 추출된 timestamp를 문자열로 저장하여 CSV file에 저장하는 것으로 수정해 보았지만 소용없었다. 결과적으로 code에서는 16번째 자리의 숫자까지 추출 후 출력되기 때문에 code에는 이상이 없다. 그리하여 excel 내에서 문제를 해결해 보고자 하였다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-17.png?w=800)

먼저 excel에서 데이터에 들어가 텍스트/CSV를 눌러준다. excel은 아무 파일이나 실행시켜도 상관 없다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-18.png?w=800)

그 후 위 그림처럼 이러한 창이 나타나게 된다. 여기서 데이터 변환을 눌러준다. 
추가적으로 파일의 원본이 65001: 유니코드(UTF-8)로 되어있는지 확인 후 데이터 변환을 눌러준다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-19.png?w=800)

데이터 변환을 누르게 되면 이러한 팝업창이 나타난다. 여기서 timestamp의 행을 클릭해주고, 변환 - 데이터 형식 정수 - 텍스트로 들어가 텍스트를 클릭해준다. 그 후 홈에 존재하는 닫기 및 로드를 클릭해준다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-20.png?w=800)

위 과정대로 CSV file의 데이터 변환을 진행해준다면, timestamp의 16번째 자리의 숫자가 0이 아닌 원래 데이터로 입력되어 있는 결과를 확인할 수 있다. 

위 CSV file 변환 과정을 통해 10초 영상을 가지고 timestamp를 출력한 CSV file의 timestamp와 30frame 단위로 출력되는 영상을 사진으로 저장하는 tool을 사용하여 사진의 timestamp를 비교 분석하였다.
여기서 조건은 2가지로 timestamp가 사진의 timestamp와 CSV file의 timestamp와 동일한지,
그리고 사진의 순서와 CSV file의 timestamp 순서가 동일한지 비교하였고, 2가지를 모두 만족한다면 O를 주고 한 가지라도 만족하지 못 한다면 X를 주었다. 

  결과적으로 10초 영상에서 총 frame 314개중 X는 13개가지 존재했다. 각 X의 특징을 본다면, 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-21.png?w=800)

57번째 frame에서 14번째 자리의 숫자인 6의 아래부분이 깨져있는 것을 확인 할 수 있었다. 14번째 자리의 숫자인 6의 아래부분이 깨져있어 CSV file 상에서 6이 아닌 5로 인식하여 출력되어 있었다. 그렇다면 깨져있는 모든 timestamp가 다 잘 못 인식된 것인가? 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-22.png?w=800)

110번 frame을 보게 되면 13번째 자리의 숫자인 5의 아래부분이 깨져있는 것을 확인할 수 있었다. 하지만 CSV file 상 13번째 자리의 숫자가 5로 정확하게 인식 후 출력된 결과를 확인할 수 있었다. 이처럼 timestamp의 숫자가 깨졌다고 해서 CSV file의 timestamp가 다른 숫자를 출력하는 것은 아니였다. 
추가적으로 깨져있는 부분이 없는 timestamp의 frame들은 모두 CSV file의 timestamp와 순서 및 숫자가 모두 동일했으며, 이는 frame의 timestamp가 크게 깨져있지 않으면 CSV file에서 동일한 timestamp를 출력한다는 말로 해석할 수 있다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-23.png?w=800)

209번에서 212번 frame을 보게 된다면, 209번 frame의 timestamp는 동일하지만 210번의 timestamp는 "170663772897747"이 출력되어야 하지만 209번과 동일한 "1705663772833779"가 출력되었다. 마찬가지로 211번 frame 또한 "170663772897747"이 출력되야 하지만 212번 frame과 동일한 "1705663772928949"가 출력되었다. frame의 timestamp가 손실된 부분은 314개의 frame 중 위 사진에 존재하는 2 frame이다. timestamp가 출력되는 Hz가 뒤로 밀렸더라면 위에 존재하는 frame 모두 밀리거나 손실되야 하지만 단 2 frame만 손실된 것이 아이러니 하다. 아마도 210번의 frame을 인식하지 못하고 뛰어넘어 209번의 timestamp와 212번의 timestamp를 출력한 것 같다.

이 부분은 원본 영상을 easyOCR을 사용하여 timestamp를 출력 후 frame 손실의 빈도수를 체크해 보아야 할 것 같다. 그리하여 33분 원본영상을 알고리즘에 넣어 timestamp 출력을 진행했다. 13:07에 시작한 알고리즘은 17:30분에 종료하여 CSV file로 timestamp가 저장되었다. 약 4시간 반이 소요된 것이다. tesseract를 사용한 알고리즘으로 원본 영상의 timestamp 출력을 진행했더라면 더 많은 시간이 소요됐을 것이다. 하지만 33분짜리 영상이 4시간 반이 소요된 것은 정말 많은 시간이 소요된 것이라 생각된다. 원본 영상 timestamp의 판독과 timestamp의 출력 시간을 줄이는 방법을 생각해 보아야 할 것 같다.
