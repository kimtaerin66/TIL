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


