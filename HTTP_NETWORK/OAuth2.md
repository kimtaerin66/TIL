# OAuth2

(생활코딩 강의 참고하여 작성)

![image](https://user-images.githubusercontent.com/85108615/202944143-fdbe8b69-6819-4c58-a206-d7d267a0c6a2.png)

이렇게 user와 내가만든 서비스, 그들이 이용하고자하는 서비스 세가지가있을때

user가 내서비스에서 글을 등록하면 이글을 구글에 바로 등록되도록 하고싶다

그럴려면, 사용자의 구글 id, password를 받아 기억해뒀다가 사용하면된다.

하지만 유저는 믿을수없는 사이트 또는 매 사이트마다 아이디와 패스워드를 공유하는것은 보안에 취약하다.

그러므로 이때 OAuth2라는것을 사용하게 되는데 OAuth2를 사용하게되면

그들의 구글 아이디와 비멀번호가아닌 accessToken을 받게된다.

### accessToken의 장점

1. 아이디와 비밀번호가 아니다.
2. 그들의 모든기능을 허용받는게아닌, 사용자가 수락한 부분적인 기능만 허용받는다.
3. 토큰 만료기간 설정이가능하다. 만료기간이 지나면 더이상 접근이 불가능.

### 용어정리

위의 그림에서는 user, mine, their라고 표현했지만 oAuth에서는 이것을 다른 단어로 부르는데.


their는 제어하고하는 자원을 가지고있는서버 :  "Resource Server"

user는 자원의 소유자 : "Resource Owner"

mine은 우리의 클라이언트를 통해 Resource Server에 접속하기에 : "Client"

여기에 추가로 Authorization Server라는 것이 존재하는데 이 서버는

인증과 관련된 처리를 전담하는 서버이다.(강의에서는 Resource Server에 통합)

### 1. 등록하기

![image](https://user-images.githubusercontent.com/85108615/202945113-adddcb09-69dd-4754-b789-ff678cc5750e.png)


클라이언트 ( 우리의 서비스)가 





