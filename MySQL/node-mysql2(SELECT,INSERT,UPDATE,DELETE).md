# SELECT, INSERT, UPDATE, DELETE
node-mysql1에서 데이터 추가하기까지 진행했는데,

프로그래밍에서 그렇게 직접적으로 데이터를 하드코딩해서 추가하는건 크게 의미가 없다.

## 5.1 변수로 데이터 추가하기

기본적인 셋팅은 일반 데이터 추가하기와 동일하다.

달라진점

1. sql문에 값(value)을 ?(물음표) 치환자로 받기,
2. params변수로 배열을 만들어 값넣기
3. 쿼리문에 두번째인자로 params(변수)받기

이렇게 작성하면 nodejs가 알아서 배열값을 물음표 자리에 넣어준다.

```js
const mysql      = require('mysql');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});
const sql = 'INSERT INTO topic(title, description, author) VALUES(?, ?, ?)'; //치환자

const params = ['Supervison','Watcher','graphittie']; //값을 배열로 입력
conn.connect();

conn.query(sql, params, (err, rows, fields)=>{  //두번째 인자로 배열받기
  if(err){
    console.log(err);
  }else {
    console.log(rows.insertId);
  }
});

conn.end();
```

## 6. 데이터 수정하기
현재상태 출력 SELECT * FROM topic;

```node
+----+------------+----------------------------+------------+
| id | title      | description                | author     |
+----+------------+----------------------------+------------+
|  1 | JavaScript | Computer language for web. | egoing     |
|  3 | Nodejs     |  Server side javascript    | egoing     |
|  4 | Express    | Web framework              | duru       |
|  5 | Supervison | Watcher                    | graphittie |
+----+------------+----------------------------+------------+
```

여기서 Nodejs를 nodejs로 전체 소문자로바꾸고, author를 rin으로 바꿔보자.

```js
//윗부분 셋팅 생략
const sql = 'UPDATE topic SET title=?, author=? WHERE id=?'; //where문
const params = ['nodejs','rin','3']; //순서대로 넣는다
conn.connect();

conn.query(sql, params, (err, rows, fields)=>{ 
  if(err){ 
    console.log(err);
  }else {
    console.log(rows);
  }
});

conn.end();

// 출력
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '(Rows matched: 1  Changed: 1  Warnings: 0',
//   protocol41: true,
//   changedRows: 1
// }
// 
```
const params = ['nodejs','rin','3']; 이부분을 살펴보면,

변수 sql에서 요구하는 값을 순서대로 넣은 것인데,

title을 nodejs로, author를 rin으로 어디에서? id가 3인곳에서.

여기서 where를 작성안하면, 모든값이 바뀐다.

## 7. 데이터 삭제하기

테이블의 아이디 1값  1 | JavaScript | Computer language for web. | egoing 를 삭제해보자.

```js
//윗부분 셋팅 생략
const sql = 'DELETE FROM topic WHERE id=?'; //where문
const params = [1];
conn.connect();

conn.query(sql, params, (err, rows, fields)=>{ 
  if(err){ 
    console.log(err);
  }else {
    console.log(rows);
  }
});

conn.end();

//출력
//OkPacket {
//  fieldCount: 0,
//  affectedRows: 1,
//  insertId: 0,
//  serverStatus: 2,
//  warningCount: 0,
//  message: '',
//  protocol41: true,
//  changedRows: 0
//}

//mysql SELECT * FROM topic;
+----+------------+-------------------------+------------+
| id | title      | description             | author     |
+----+------------+-------------------------+------------+
|  3 | nodejs     |  Server side javascript | rin        |
|  4 | Express    | Web framework           | duru       |
|  5 | Supervison | Watcher                 | graphittie |
+----+------------+-------------------------+------------+

```

[참고사이트-생활코딩](https://opentutorials.org/course/2136/12020)