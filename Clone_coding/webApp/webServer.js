const http = require('http'); //http 모듈사용
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => { //createServer함수호출 > 서버생성
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => { //server.listen(); 과 같다.
  console.log(`Server running at http://${hostname}:${port}/`);
});


// const server = http.createServer();
// server.listen(port, hostname, fun); //listen이라는 작업은 시간이 걸릴 수 있는 작업
//                                     //그래서 비동기로 실행 > 콜백함수
//                                     //실행이되면 콜백함수 안의 내용 출력.