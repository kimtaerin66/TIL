# 과제3 10/5~ 10/17(리뷰)

1. StudentList를 JSON으로 만들기
```java
//json구조
{
studentList :{
               name: "김태린",
               korean : 90 ,
               math : 80,
               english : 95,
               history : 75,
               sum : 340,
               avg :  85,
               rank : 1
               }
                 }
```
2. spring boot로 서버만들고 json받아오기

get - /api/student/data 

put - /api/student/data 

※ spring boot 사용시, restful http사용 x 순수자바로 하기.

connection timeout 3초

read/write timeout 3초

3. 쓰레드로 만들기
