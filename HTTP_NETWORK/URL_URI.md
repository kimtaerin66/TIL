# URL 과 URI

## URL(Uniform Resource Locator)
URL은 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타낸다. 

scheme, hosts, url-path로 구분할 수 있으며, scheme은 프로토콜을 결정한다.

<br />

일반적인 웹브라우저에서는 http(s)가 사용되며,

host는 웹서버의 이름이나 도메인,ip를 사용하여 주소를 나타낸다.

url-path는 웹서버에서 지정한 루트 디렉토리에서 이미지나, 동영상등이 위치한 경로와 파일명을 나타낸다.

예)나의 TIL 깃헙 주소 https://github.com/kimtaerin66/TIL
![Alt text](../IMG/url.gif)

## URI(Uniform Resource Identifier)
URL + query, bookmark를 포함

query(쿼리스트링)란 웹서버에 보내는 추가적인 질문이다. 

예시 

`http://a.com/topic?id=1`

`http://a.com/topic?id=2`

`http://a.com/topic?id=3`

이렇게 url에 ? 물음표로 시작하는 쿼리스트링으로 topic이라는 하나의 패스(라우터)로

다른 결과를 만들어낼 수 있다.


### **URI > URL**  URI가 URL을 포함하는 상위개념이다.

