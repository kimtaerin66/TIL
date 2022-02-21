# 도메인 (Domain name)
클라이언트가 검색창에 www.naver.com 이라는 네이버 주소를 친다. 이렇게 사용자가 읽기 쉽게 이름을 붙인 것을 도메인이라고한다. 

하지만 이것은 읽기편한 이름일뿐, 실제
서버는 ip주소를 통해서 사이트를 찾아간다.
```node
ip주소 찾기
터미널에 nslookup www.naver.com 

이름:    www.naver.com.nheos.com
Addresses:  223.130.195.200
          223.130.195.95
Aliases:  www.naver.com
```
# IP
위에 도메인에서 말했듯이 , 원하는 사이트에 접속하려면

주소가 있어야하는데 사람들이 쉽게 읽을 수 있는게 도메인,

컴퓨터가 알아볼 수 있는 주소가 IP이다. (Internet Protocol address)

<br/>
 IP주소는 123.111.11.1 과같이 .으로 구분된 네덩이의 숫자인데
 

이 주소체계를 IPv4(Internet Protocol version 4)라고한다.

<br/>
각 덩어리마다 0부터 255까지나타낼수 있고, 이미 용도가 정해져있는 주소도 있다.

 <br/>


# DNS(Domain Name System)

도메인 이름 > IP주소로 변환, 반대로

IP주소 > 도메인 이름 

이런 일을 수행하는 데이터베이스시스템이다.

만약에 우리가 www.naver.com를 검색하면, 
DNS은 네이버의 IP주소를 찾고,이 IP주소를 클라이언트가 통신할 수 있도록 한다. 


## >> 
자 이렇게 DNS까지 이용해서 a.com을 ip로 바꿔 사이트에 접속을 시도했다.

하지만 a.com에는 데이터베이스서버, 채팅서버, 게임 서버, 웹서버 이렇게 다양한 서버가 존재한다.

이럴때 과연 사용자는 어디로 연결이 될까?

# 포트 port
포트번호는 IP주소뒤에 붙는 숫자로 0 ~ 65,535까지 사용할 수있다.

a.com:80 이렇게 뒤에 80이라는 포트번호를 붙여주면

a.com(사이트)에서 웹서버에 리스닝(연결)하고 싶다라는 표현이 된다.

=> 하지만 늘 80을 붙여주는건 효율적이지않음.

=> http로 시작되는 주소에는 80이 생략되어도 웹서버로 연결된다.


   [이미 정해진 포트]
- 80 : HTTP
- 443 : HTTPS
- 22 : SSH

