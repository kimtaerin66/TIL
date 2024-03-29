# 인코딩
파일을 저장할때 보안, 처리속도, 메모리 절약 등을 위해 다른 형태로 변환하는 것을 인코딩이라고 한다.

인코딩 <-> 디코딩



# Base64 / Blob / ArrayBuffer 
많이 쓰이는 파일 인코딩의 방법에는 이 세가지가 있는데

### Blob(Binary Large Object)

컴퓨터는 0,1만 읽을 수 있기때문에 모든 데이터를 0과 1로 저장한다.

두개를 뜻하는 이 binary는 이진데이터를 뜻하며, 1과 0만 사용하여 데이터를 표현하는 것을 말한다. 

그러므로, Binary Large Object는 멀티미디어 파일 바이너리를 객체 형태로 저장한것.

용량이 큰 멀티미디어 파일들을 데이터베이스에 효과적으로 저장하기위해 사용된다.

### Base64

숫자나 글자가 아닌, 이미지나 비디오 같은 멀티미디어 파일들을 메모리에 저장하기위해서

(이미지를 url에 저장하는건 링크라는 징검다리를 저장하는것이지 이미지 데이터 자제를 저장하는 것이 아니다.)

Base64라는 개념을 사용한다.

Base64는 0,1로 이루어진 바이너리를 인코딩하여 텍스트 형식으로 변환하는 것을 말한다.

base64를 사용하면, 변수에 이미지 데이터 자체를 저장하므로, 서버에 요청하지않고 직접 이미지를 불러올수있다.


사용 예

1. 크기가 작은 이미지를 파일 불러오는 것없이 html에 직접 삽입하는 경우
2. 간단한 페이지를 작성해 임시로 이미지를 사용하는 경우
3. 이미지가 들어간 메일 내용을 html로 작성하는 경우

### Blob과 Base64의 차이점
base64는 바이너리 데이터를 다루기 위해 텍스트(문자열) 형태로  저장하는 것

blob이란 바이너리 데이터를 다루기 위해 객체(Object) 저장하는 것


### 이미지를 base64로 변환하기

방법

1. 인코딩 사이트 이용
2. 직접 프로그래밍

이미지를 blob 형식으로 변환 > FileReader 객체로 blob데이터를 base64로 변환

### ArrayBuffer

ArrayBuffer는 멀티미디어 데이터 "덩어리"를 브라우저에서 다루기위해 도입되었다.

라이브 방송과 같이 영상을 송출할때는, 영상이라는 실시간 데이터를 유저에게 계속 전달해줘야하는데

이렇게 커다란 데이터를 잘게 쪼개서 전송해야하는 상황.

일정 구획만큼의 데이터를 쪼개서 전달되는 stream을 저장한 후

일정 크기가 도달하면 출력장치나 동영상 플레이어로 전달해주는 중개자 역할을 하는 객체라고 보면 된다. 


[참고블로그](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Base64-Blob-ArrayBuffer-File-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EC%A0%95%EB%A7%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85#Blob-Binary-Large-Object)
