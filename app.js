const express = require('express');
const path = require('path');
const ejs = require("ejs"); // 페이지 로딩을 위해 필수
const app = express();
const port = 3000;


// 라우터 분리
const exhibitionRouter = require('./routes/exhibitionRoutes');


// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/uploads', express.static('uploads'));

app.use('/exhibition', exhibitionRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`http://localhost:3000 / Example app listening on port ${port}`);
});

