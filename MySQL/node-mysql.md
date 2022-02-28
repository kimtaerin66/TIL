# node-mysql
자바스크립트로 mysql을 제어하려면 node-mysql을 이용해야한다.
[node-mysql 공식문서](https://github.com/mysqljs/mysql)
## 1.설치

```
npm install node-mysql --save
```

## 2. 실행

node 해당파일명.js
```node
//database.js 실행시
node database.js;
```
이렇게 실행했을 때 아무것도 안나오면 정상작동.

작동이 안되면, 에러가 뜬다.

## 3. 셋팅
node=mysql 깃헙사이트에보면 사용방법이 나와있다.

그 중에 위에 셋팅부분만 살펴보자.
```js
//기본사용법
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});

connection.connect();

```

[ 기본 문법 설명 ]

js상단에 require로 mysql가져오고, 변수를 하나 만들어 mysql의 createConnection메소드를 제어한다.

createConnection에 사용될 데이터베이스의 기본적인 정보들을 적는다.

정보를 다 적어줬다면 connection.connect();으로 연결을 시킨다. 

## 4. 데이터 가져오기
```js
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
```

연결까지 완료되었다면 쿼리메서드를 사용하는데, 이 쿼리메서드는 두개의 인자를 받는다.

첫번째 인자는 실행할 쿼리문, 두번째 인자는 콜백함수.

두번째 인자로 들어오는 콜백함수는 세개의 인자를 받는다.

더 자세한건 예제를 통해 설명.

## 예제) 

```js
//database.js

const mysql      = require('mysql');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});
const sql = 'SELECT * FROM topic';
conn.connect();

conn.query(sql, (err, rows, fields)=>{ //인자를 세개받는다
  if(err){ //에러가 있다면 출력
    console.log(err);
  }else {//에러가 없다면 실행
   for (let i=0; i<rows.length; i++){
     console.log(rows[i].title);
   }
  }
});

//출력 
//JavaScript  현재 내가 가지고있는 topic테이블의 title

conn.end(); //end를 작성하면, ctrl+c하지않아도 다 출력되고 접속끊김.

```
설정 - 나는 내 컴퓨터에서(host), root계정으로 접속할건데, 

비밀번호는 111111이고 o2라는 데이터베이스를 사용할 것이다

conn.connect();으로 연결하고, 

query의 첫번째인자로 들어갈 쿼리문을 따로 변수로 담아주었다.

const sql = 'SELECT * FROM topic'; topic 테이블에서 모든 데이터 가져오기.

모든 데이터를 가져오는데, 에러가있다면 그에러를 출력  console.log(err);

에러가 없다면, row의 길이만큼 반복문을 돌려 title을 출력한다.


그리고 마지막으로 conn.end();를 해주면,  ctrl+c하지않아도 다 출력되고 접속끊어진다.

이렇게 코드를 다 작성했다면, 다시 실행해준다.
```
 node database.js
 ```

## 5. 데이터 추가하기
```js
const mysql      = require('mysql');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});
const sql = 'INSERT INTO topic(title, description, author) VALUES("Nodejs", "Server side javascript", "egoing")';
conn.connect();

conn.query(sql, (err, rows, fields)=>{ 
  if(err){ //에러가 있다면 출력
    console.log(err);
  }else {//에러가 없다면 실행
    console.log(rows);
  }
});

conn.end();
//출력
  fieldCount: 0,
  affectedRows: 1,
  insertId: 3,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
```
rows를 출력한 부분을 보면,   affectedRows: 1은 하나의 행에 영향을 줬다,

 즉 한줄이 추가되어서 나오는 문구이고,

  insertId: 3 은 지금내가 insert로 추가한 행의 id를 가르킨다.

테이블을 전체 출력해서 확인.
```mysql
//mysql 
+----+------------+----------------------------+--------+
| id | title      | description                | author |
+----+------------+----------------------------+--------+
|  1 | JavaScript | Computer language for web. | egoing |
|  3 | Nodejs     |  Server side javascript    | egoing |
+----+------------+----------------------------+--------+
SELECT * FROM topic;
```

만약 새로추가하고, id만 알아내고싶다면
```js

const mysql      = require('mysql');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});
const sql = 'INSERT INTO topic(title, description, author) VALUES("Express", "Web framework", "duru")'; //새로운 내용추가
conn.connect();

conn.query(sql, (err, rows, fields)=>{ 
  if(err){ 
    console.log(err);
  }else {
    console.log(rows.insertId); //id만 출력
  }
});

conn.end();

//출력 4
```



[참고사이트-생활코딩](https://opentutorials.org/course/2136/12020)