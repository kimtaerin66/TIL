const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.set("views", __dirname + "/views" );; //pug위치 알려주는 코드
app.set("view engine", "pug"); // 퍼그를 사용하겠다 알려주는 코드
app.use(express.static('public')); //추가한 코드
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/form', function(req, res){
    res.render('form');
})
app.get('/form_receiver', function(req, res){
    const title = req.query.title;
    const description = req.query.description;
    res.send(title+','+ description);

})

app.post('/form_receiver', function(req, res){
    const title = req.body.title;
    const description = req.body.description;
    res.send(title+','+ description);

})
app.get('/topic', function(req, res){ //http://localhost:3000/topic?id=22
    const topics = [
        'Javascript is ...',
        'NodeJs is ...',
        'Express is ...',
    ]; //배열에 담아 인덱스넘버로 불러오기.

    const output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">NodeJs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output); //사용자가 id라는 쿼리로 요청
})
app.get('/template', function(req, res){
    res.render("temp",{ time:Date(),title:'Pug'})
}); //temp라는 파일을 렌더링한다. views파일에 temp.pug로 위치해야함.


app.get('/', function(req, res){
    res.send('Hello home page');
});

app.get('/dynamic', function(req, res){
    const output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>App</title>
    </head>
    <body>
        Hello, dynamic !
    </body>
    </html>`;
    res.send(output);
})
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/img.jpg">')
})

app.get('/login', function(req, res){
    res.send('Login please')
});
app.listen(3000, function(){
    console.log('Connected 3000 port!')
});

