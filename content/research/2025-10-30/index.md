---
title: "2025/10/30 (목)"
date: "2025-10-30"
categories: "research"
author: "lian"
emoji: "🔬"
---

easyOCR을 사용한 영상 timestamp 알고리즘의 신뢰도 검증 단계를 진행했다.

현재 가지고 있는 cheetah event log를 기준으로 영상에서 추출한 timestamp의 차이를 비교해 보았으며 추가적으로 영상에서 추출한 timestamp의 현재 timestamp와 이 후 timestamp의 추출값의 차이를 분석하여 어느정도 차이를 가지며 timestamp가 일정하게 출력되는지 분석했다. 

먼저 지정한 timestamp와 이 후 timestamp의 차이들을 비교했다. 

지정한 timestamp - 이 후 timestamp = +- 로 나타나게 되는데 - 가 나타날 시 지정한 timestamp가 이 후 timestamp에 비해 증가 했다는 것을 나타내며, + 를 나타낼 시 지정한 timestamp의 값이 이 후 timestamp의 값보다 감소했다는 것을 나타내며, 이는 영상에서 timestamp의 인식이 제대로 되지 않은 data 임을 의미한다. 33분의 영상에서 총 59677개의 timestamp를 추출했다. 결과를 figure로 보게되면,  

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-24.png?w=800)

-50000 ~ -30000 의 차이의 구간을 가진 timestamp가 가장 많은 분포를 나타냈다. 양수 구간에서 총 timestamp의 개수를 합하면 1354개로 카운트 된다. 59677개의 timestamp 중 숫자가 깨져 timestamp가 제대로 출력되지 않은 data의 개수는 약 1354개로 추정된다. 또한 -50000의 차이를 넘은 data 또한 숫자가 깨져 timestamp가 제대로 출력되지 않아 두 timestamp의 차이가 크게 나타난 것으로 유추된다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-25.png?w=800)

-50000 ~ -30000 구간을 더 자세히 본다면, -32000 ~ -31000의 차이를 나타낸 timestamp의 구간이 가장 많은 분포를 나타냈다. 다음으로는 -33000 ~ -32000이 많은 분포를 나타냈는데, 이를 통해 각 timestamp의 차이는 약 -33000 ~ -31000 으로 차이를 나타내야 일정한 timestamp를 출력하고 있다는 것을 알 수 있다. 이를 총 timestamp의 총 개수에서 -33000 ~ -31000 구간에 존재하는 timestamp의 비율을 나타내 본다면 약 90.81%이다. 나머지 10%는 숫자 오류로 인해 잘 못 출력된 timestamp로 인해 나타나는 것이라고 예상된다. 

그렇다면 cheetah event log와 easyOCR을 사용하여 출력한 timestamp를 비교해 본다면 어떠한 차이점이 있을까? 

먼저  cheetah event log와 easyOCR을 사용하여 출력한 timestamp를 비교했을 때 16자리 모두 동일할 수 는 없다. 

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-26.png?w=800)

이러한 이유를 설명하자면, VR 실험 setting의 한계 때문이라고 말할 수 있다. 먼저 실험자가 실험 영상의 녹화를 시작한다. main task에 들어가기 전 부터 녹화가 시작되기 때문에 녹화 영상을 판독하는 방법이 아니라면, main task의 시작 부분의 timestamp를 알지 못 한다. 그 후 실험자가 cell recording을 시작하면 이때부터 cheetah log와 unreal log의 recording이 30Hz 시작된다. 녹화 영상의 timestamp와 cheetah log, unreal log의 timestamp 시작 부분이 서로 다르게 시작되며, 독립된 30Hz로 recording되기 때문에 timestamp의 16자리 숫자가 모두 맞는 것은 어려운 일이다. 

두 timestamp를 비교해본 결과 11자리 숫자까지는 거의 일치하는 결과를 보여주었다. 영상으로 timestamp가 재생되는 것을 확인해 본다면 11번째 자리의 숫자는 ms를 의미하는 것을 확인할 수 있다. 그러므로 easyOCR 알고리즘으로 추출한 timestamp와 cheetah log에 존재하는 timestamp는 ms까지는 맞출 수 있다는 것으로 해석할 수 있다. 
그리하여 ms를 맞추기 위해  cheetah log에 존재하는 timestamp는 " TTL Input on AcqSystem1_0 board 0 port 2 value (0x0004)" 인 부분만 걸러주었고, easyOCR에 존재하는 timestamp는 cheetah log의 timestamp의 시작부분과 거의 유사한 부분을 시작점으로 잡고 마지막 끝 부분 또한 cheetah log의 유사한 timestamp로 잡아 잘라주었다. 그 후 각각의 timestamp를 비교해본 결과...

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/10/image-27.png?w=800)

timestamp의 총 개수가 맞지 않았다. 정확히 말하자면 easyOCR로 추출한 timestamp가 cheetah log의 timestamp보다 개수가 적었다. 실험자의 예상으로는 easyOCR의 timestamp가 recording을 더 먼저 진행했기 때문에 timestamp의 출력 개수가 더 많을 것이라고 예상했다. 또한 easyOCR의 timestamp가 더 많아야 cheetah log의 timestamp를 맞추는데 더 용이할 것 이라고 생각했었다. 56개 정도의 차이가 나타나는데 easyOCR에서 부족한 56개의 timestamp는 cheetah log timestamp 어느 부분에 연결해줘야 할지 고민해 보아야 할 것 같다. 또한 cheetah log의 timestamp와 unreal log의 timestamp의 개수가 맞지 않는 문제 또한 발견되었다. 

금일 test로 timestamp의 균일한 출력에 대한 차이를 수치화 할 수 있었기 때문에 다음에 있을 test에 유용하게 사용할 수 있을 것이라고 생각한다.
