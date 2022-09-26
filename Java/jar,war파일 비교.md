# JAR, WAR 비교

jar : java archive

war : web application archive

두 파일모두 java의 jar툴을 이용하여 생성된 압축(아카이브)파일이며,

어플리케이션을 쉽게 배포하고 동작시킬 수 있도록 포함된 파일들(리소스, 속성파일 등)을 패키징해준다.

### JAR

자바 프로젝트를 압축한 파일(class와같은 리소스와 속성파일, 라이브러리 파일이 포함).

원하는 구조로 구성이 가능하고,

JRE만 가지고 실행이 가능하다.

### WAR

웹 어플리케이션을 압축한 파일(HTML, JAVASCRIPT, JAR, CLASS 등 포함).

원하는 구조로 구성 불가능! 사전에 정의 된 구조를 사용한다.

또 WAR파일을 실행하려면, tomcat이나 weblogic, websphere 등의 웹서버 또는 웹컨테이너가 필요하다.

### EAR

ear파일은 java ee(enterprise edition)에 쓰이는 파일 형식으로

한개이상의 모듈을 단일 아카이브로 패키징하여

서버에 동시에 일관적으로 올리기위해 사용된다.

### jar파일 생성하기

내가 이클립스에서 만든 클래스들을 jar파일로 생성해보기.

(하나의 파일이아닌, 여러개의 파일을 포함시킨 jar파일 생성예정)

1. 이클립스의 패키지 우클릭
![image](https://user-images.githubusercontent.com/85108615/192175539-8c5b4edc-2de7-4678-8918-318e8ba2ba65.png)

2. export클릭
3. JAVA의 JAR file 선택
![image](https://user-images.githubusercontent.com/85108615/192175569-d5c799a2-bf19-4203-bc32-aab6a375d75e.png)

4.원하는 파일 선택 > 파일명과 위치 지정 > next 클릭
![image](https://user-images.githubusercontent.com/85108615/192175619-6f1b58b6-235d-437e-9cb2-a6ef8fce96b3.png)

5. 지정한 위치에가서 확인

### 에러

위에서 설명대로 jar 파일을 만들고 실행했더니 Manifest X라는 에러가 났다.

Manifest란?

JAR파일에 패키징된 파일들에 대한 정보를 가지고 있는 파일

manifest가 가지고있는 meta정보를 수정하여, jar를 여러목적으로 사용이 가능하다.

그럼 왜 에러가 나는지 내가 만든 jar파일의 Manifest파일을 열어보자. >> 아무런 내용이 없네.

![image](https://user-images.githubusercontent.com/85108615/192177285-31e27869-5eb8-4062-899d-bcb8b52fbef0.png)


### Manifest 파일 생성 및 수정

우선 Manifest파일 위치는 root폴더 바로 아래. 

들어가야하는 내용은 

![image](https://user-images.githubusercontent.com/85108615/192177547-2897ab0f-5a18-4b78-aae6-2b4594538c2f.png)

내용참고 및 이미지 출처 : https://digicom.tistory.com/383














