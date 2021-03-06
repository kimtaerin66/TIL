const express = require('express'); //가져오기
const bodyParser = require('body-parser');//가져오기
const fs = require('fs');
const { title } = require('process');
const app = express();
app.use(bodyParser.urlencoded({extended:false})); //bodyParser를 사용하겠다.
app.locals.pretty = true;
app.set('views', './views') //템플릿엔진 위치 설정
app.set('view engine', 'pug')//어떤 엔진사용할건지 설정
app.get('/topic/new', (req, res) =>  {
    fs.readdir('data',(err, files) => {
        if(err){//에러가 있다면
            res.status(500).send('Internal Server Error');
        }
         res.render('new', {topics:files})
    });
});


app.get(['/topic', '/topic/:id'], (req, res) => {
    fs.readdir('data',(err, files) => {
        if(err){//에러가 있다면
            res.status(500).send('Internal Server Error');
        }
    const id = req.params.id;
    if(id){
    fs.readFile('data/'+id, 'utf8', (err, data) =>{
        if(err){//에러가 있다면
            res.status(500).send('Internal Server Error');
        }
       res.render('view',{title:id, topics :files, description:data});
    })}else{
    res.render('view', {topics : files, title:'Welcome', description:'hello javascript for server.'});
    } //사용자가 topic에들어오면 글목록보이기
})} );
    
// app.get('/topic/:id',(req, res)=>{
//     // const id = req.params.id;
//     fs.readdir('data',(err, data)=>{
//         if(err){
//             res.status(500).send('Internal Server Error');
//         }
//     })
//         fs.readFile('data/'+id, 'utf8', (err, data) =>{
//             if(err){//에러가 있다면
//                 res.status(500).send('Internal Server Error');
//             }
//            res.render('view',{title:id, topics : data, description:data });
        
//         })
//     })
    
 //바뀌는정보를 콜론+변수명
app.post('/topic',(req, res) => 
   {
    const title = req.body.title; 
    const description = req.body.description;
    //파일을 쓰게하기
    fs.writeFile('data/'+title, description,(err)=> { //data폴더에 title로 파일명, 내용은 description
        if(err){//에러가 있다면
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title)//작성한 페이지로 보낸다
    });
   });



app.listen(3000, () => { console.log('connected 3000 port!')}) //port, 콜백(서버연결시 출력)






//post로 보내면 data라는 디렉토리에 저장