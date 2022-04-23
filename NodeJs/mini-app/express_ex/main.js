const express = require("express"); //모듈불러오기
const app = express(); //express생성하여 app에 담기
const user = require("./routes/user"); //모듈화된것 불러오기
// const morgan = require('morgan');
const bodyParser = require('body-parser')

//미들웨어 만들기
// const myLogger = (req, res, next) => {
//   console.log(req.url);
//   next();
// };

// app.use(myLogger);
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello world");
});



app.use('/user', user);

app.listen(3000, () => console.log("App is listening on port 3000!"));
