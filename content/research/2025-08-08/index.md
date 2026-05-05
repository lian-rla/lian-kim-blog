---
title: "2025/8/8(금)"
date: "2025-08-08"
categories: "research"
author: "lian"
emoji: "🔬"
---

1.**Rat Training**

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/07/image-83.png?w=1024)

#Rat No. 49
Group : comparison study of no reward vs negative feedback on learning
Current weight : 446g(+13g) Pellet/Water : 13g

금일은 실험을 따로 진행하지 않고, 몸무게만 체크해 주었다. 오전 jc 일정과 오후 work shop일정으로 오전에 실험을 진행하기 어렵다고 판단하여 금일 실험은 진행하지 못 했다. 그리하여 어제 pellet을 20g을 부여했다. 원래는 11g을 주면 몸무게가 늘지 않고 유지되는 49번이었지만 확실히 어제 20g을 주어서 인지 13g이 찐 446g이 되었다. 추가로 cage cleaning을 진행 후 pellet을 부여했다. 금일 pellet은 실험을 하지 않아 reward를 먹지 못 한 것을 감안하여 원래 주던 pellet의 양에서 2g 더준 13g을 주었다.

#Rat No. 50
Group : comparison study of no reward vs negative feedback on learning
Current weight : 427g(+17g) , Pellet/Water : 11g 

금일 50번도 마찬가지로 실험을 따로 진행하지 않고 몸무게만 체크해 주었다. 어제 pellet을 20g을 주었기 때문에 금일 몸무게는 어제와 비교했을 때 17g이나 찐 427g이었다.  50번은 어제 pellet을 준 뒤 바로 먹기 시작하다가 좀 남기는 모습을 보여주었다. 아침에 확인해 보니 지급한 pellet은 다 먹었다. 추가로 49번과 마찬가지로 cage cleaning을 해준 뒤 금일은 실험을 하지 않아 reward를 먹지 못한 것을 감안하여 원래 주던 pellet의 양에서 2g 더 준 11g을 주었다.

2. BCS Summer Workshop

금일 25동에서 BCS summer workshop을 진행했다. 우리 lab의 연구주제 뿐만 아니라 다른 lab에서 어떠한 연구를 하고 있는지 알 수 있는 시간이었다. 많은 발표를 보았지만 필자의 흥미를 끌었던 주제는 서정우 선생님께서 연구하신 fMRI foundation 개발에 관한 주제의 발표였다. 사실 fMRI에 관해 본 학교에서 많은 시간을 들여 공부했기 때문에 재밌게 발표를 들은 것도 있다. 하지만 필자의 흥미를 끌었던 부분은 뇌 데이터를 'transformar' 를 사용하여 AI를 학습 시킨 부분이다. 발표자 분께서 'transformar'를 개발하여 'transformar'이라고 칭하셨는데 이 'transformar'에 대해 간단하게 설명해 보자면, foundation model 방식을 활용하여 학습하지 않던 데이터도** **generalizable한 데이터를 출력시켜주는 tool같은 것 이다. 10분 발표라 자세한 개발 과정에 대해서는 알려주시시 않았지만, biobank와 abcd에서 데이터를 가져와 AI를 학습 시키셨다. brainflow나 openeuro에서 open된 뇌 신호를 데이터로 가져오는 것은 알았지만, biobank와 abcd는 금일 발표에서 처음 들어서 찾아보았다.

![](https://minjaekimlabnote.wordpress.com/wp-content/uploads/2025/08/image-25.png?w=800)

biobank와 abcd는 대규모 뇌영상 데이터를 포함한 생의학 정보를 제공하는 대표적인 연구 프로젝트이다. 각각 자세히 설명해 보자면, biobank의 데이터는 40~69세 성인 약 50만 명의 대상의 뇌 데이터를 연구한 프로젝트이며 10만 명의 피험자에 대한 뇌영상을 제공하는 곳이다. 제공하는 뇌 정보는 MRI와 IDPs(imaging-dervied phenotypes) 그리고 뇌영상을 제공한다. 주로 노화, 인지감퇴,유전. 뇌질환을 연구하는 연구자들이 biobank에서 데이터를 얻어 연구를 진행한다. ABCD는 Adolescent Brain Cognitive Development의 약자로 미국 전역의 9~10세 아동 약 12,000명을 장기 추적한 프로그램이다. 그러기 때문에 아동 청소년의 뇌 발달에 대해 연구를 할 때 적합한 데이터 이다. 그리하여 발달신경과학을 연구하는 연구자들은 abcd를 많이 사용하여 연구 데이터를 얻는다. 이처럼 뇌 영상을 통해 뇌를 연구하는 연구자들은 자신의 연구에 맞는 open data를 선정하여 연구를 진행한다는 것을 알 수 있었다. 금일 workshop에서 biobank와 abcd에서 데이터를 얻어 ai를 학습시킨 후 fMRI foundation을 개발했다고 말씀하셨다. 발표를 들으면서 들었던 의문은 필자가 옛날 진행하던 PPG를 활용한 맥박 측정 model 개발을 위해 physionet에서 PPG 데이터를 가져와 개발을 진행했는데 여기서 문제는 physionet에서 제공하는 PPG 데이터는 모두 중환자실에 있는 환자들의 데이터였기 때문에, APG가 매우 높았다. 일반 사람들의 PPG 데이터는 얻기 어려워 많은 케이스를 얻기 위해 직접 측정하는 방법으로 개발을 진행했었는데 biobank와 abcd의 데이터를 사용한 발표자분의 연구는 이러한 문제가 없을지 궁금했다. 아마도 유추해 보자면, biobank는 40~69세 즉 노인기로 접어드는 분들과 abcd는 9~10세의 아동 뇌 데이터를 제공하기 때문에 biobank와 abcd 데이터로 개발을 진행하고 마지막 검증으로 일반인들의 뇌 데이터를 가지고 검증을 진행하면 좀 더 좋은 연구 결과나 나올 것이라고 생각한다. 

금일 workshop을 통해 여러 연구들을 접할 수 있었다. 특히 처음 듣는 zone incerta나  RSC에서 측정하는 도파민 신호등 여러가지 신기한 주제들의 연구들을 볼 수 있었다. workshop이 필자는 처음이었는데, 자신의 연구에 대한 여러 사람들의 의견과 질문을 통한 아이디어를 얻어 가는 자리는 필자 눈에 정말 멋있게 느껴졌다. 제일 잘한 사람을 뽑아보자면 그래도 우리 lab의 성원 선배님의 PPT가 제일 깔끔하고 눈에 들어왔다. 다른 lab의 PPT의 figure는 글이 너무 작아 보이지 않아 내용 전달이 잘 되지 않았다. 또한 발표 연습 때 보여주신 발표 내용보다 workshop에서의 발표 내용이 수정되었는지 정보전달이 더 잘 되었다.
