const express = require('express');
const router = express.Router();
const exhibitionController = require('../controllers/exhibitionController');

router.get('/', exhibitionController.exhibitionController);

router.get('/registration', exhibitionController.exhibition);

router.post('/post/test', exhibitionController.createTest);

router.put('/update', exhibitionController.dataUpdate);


// 해당 아이디로
router.get('/detail/:id', exhibitionController.exhibitionOne);
// 삭제
router.delete('/delete/:id', exhibitionController.deleteData);
// 수정
router.get('/write/:id', exhibitionController.moveWrite);



module.exports = router;