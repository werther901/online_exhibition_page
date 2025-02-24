const exhibitionModel = require('../models/exhibitionModel');

const exhibitionController = async (req, res) => {
  const exhibition = await exhibitionModel.getAll();
  res.render('exhibition', {exhibition});
}

const exhibition = async (req, res) => {
  const exhibition = await exhibitionModel.getAll();
  // console.log(exhibition)
  res.render('exhibition/registration', { exhibition });
}

const exhibitionOne = async (req, res) => {
  // console.log(req.params.id)
  const exhibition = await exhibitionModel.getAll();
  const exhibitionOne = await exhibitionModel.getOne(req.params.id);
  res.render('exhibition/detail', { exhibitionOne, exhibition });
}

// 데이터 등록
const createTest = async (req, res) => {
  const img = `/uploads/${req.file.filename}`;
  req.body.img = img;
  console.log("컨트롤러 데이터 등록 req.body : ", {...req.body});
  // console.log("컨트롤러 데이터 등록 req.file : ", req.file);
  const data = {...req.body};
  const createData = await exhibitionModel.postData(data);
  res.send('200'); // 응답 보내야 axios then 실행함
  // res.send({url: `/uploads/${req.file.filename}`});
}

// 데이터 삭제
const deleteData = async (req, res) => {
  console.log(req.params);
  await exhibitionModel.deleteRow(req.params.id);
  res.send('200');
}

// 데이터 수정
const moveWrite = async (req, res) => {
  const exhibitionOne = await exhibitionModel.getOne(req.params.id);
  res.render('exhibition/write', { exhibitionOne });
}

// 데이터 업데이트
const dataUpdate = async (req, res) => {
  const img = `/uploads/${req.file.filename}`;
  req.body.img = img;
  console.log("컨트롤러 데이터 등록 req.body : ", {...req.body});
  const data = {...req.body};
  await exhibitionModel.updateRow(data);
  res.send('200');

  // console.log(req.body, "데이터 업데이트")
  // await exhibitionModel.updateRow(req.body);
  // res.send('200');
}


module.exports = { exhibitionController, exhibitionOne, exhibition, createTest, deleteData, moveWrite, dataUpdate };