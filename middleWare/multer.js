const multer = require('multer');
const fs = require('fs');
const path = require('path');

// const uploadDir = path.join(__dirname, 'uploads');
// resolve : 절대 경로 지정... 오 -> 왼쪽으로 읽음..
const uploadDir = path.resolve(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {recursive: true});
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // 원본 파일명에서 확장자 추출
    const ext = path.extname(file.originalname);

    // 파일명에 타임스탬프와 확장자를 포함시켜서 저장함
    cb(null, Date.now() + Math.floor(1000 + Math.random() * 9000) + ext); // timestamp + 확장자
  }
});
const upload = multer({ storage });

module.exports = upload;