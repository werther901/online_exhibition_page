const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
const path = require('path');

// const uploadDir = path.join(__dirname, 'uploads');

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, {recursive: true});
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     // 원본 파일명에서 확장자 추출
//     const ext = path.extname(file.originalname);

//     // 파일명에 타임스탬프와 확장자를 포함시켜서 저장함
//     cb(null, Date.now() + Math.floor(1000 + Math.random() * 9000) + ext); // timestamp + 확장자
//   }
// });
// const upload = multer({ storage });
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

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.post('/uploadImg', upload.single('file'), (req, res) => {
//   console.log(req.file);
//   res.send({url: `/uploads/${req.file.filename}`});
// });

// app.post('/exhibition/post/test', upload.single('file'), (req, res) => {
//   console.log(req.file);
//   res.send({url: `/uploads/${req.file.filename}`});
// });