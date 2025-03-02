# 온라인 전시회 웹 페이지 구현
Node.js와 MySQL을 사용하여 온라인 전시회 웹페이지를 구현하였습니다.

MVC 패턴을 적용하여 기능별로 코드를 분리해 가독성과 개발 효율성을 높였습니다.

## 🔧 Stack
![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Demo
![](./public/images/main.gif)

## ⭐ Main Feature

### 날씨 api 연동(예정)
- 기상청 예보 조회를 이용한 현재 날씨 기능 구현

### 회원가입 및 로그인(예정)
- JWT 이용

### 좋아요 목록 페이지(예정)
- 설명 추가

### 기타
- 메인 페이지(작품 조회) 및 세부 사항 조회 페이지
- 관리자 페이지(작품 등록, 작품 수정 페이지)

## 프로젝트 구조

```markdown
project-root
├── controllers
│   ├── exhibitionController.js
├── middleWare
│   ├── multer.js
├── models
│   ├── exhibitionModel.js
├── public
│   ├── css
│   ├── js
│   ├── images   
├── routes
│   ├── exhibitionRoutes.js
├── uploads
├── views
│   ├── exhibition
│   ├── exhibition.ejs
│   ├── footer.ejs
│   ├── header.ejs
├── app.js
└── package.json
```