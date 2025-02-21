const exhibitionModel = require('../models/exhibitionModel');

const exhibitionController = (req, res) => {
  res.render('exhibition');
}

const exhibition = async (req, res) => {
  const exhibition = await exhibitionModel.getAll();
  // console.log(exhibition)
  res.render('exhibition/registration', { exhibition });
}

const exhibitionOne = async (req, res) => {
  // console.log(req.params.id)
  const exhibitionOne = await exhibitionModel.getOne(req.params.id);
  res.render('exhibition/detail', { exhibitionOne });
}

// 데이터 등록
const createTest = async (req, res) => {
  console.log(req.body);
  const createData = await exhibitionModel.postData(req.body);
  res.send("200");
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
  console.log(req.body, "데이터 업데이트")
  await exhibitionModel.updateRow(req.body);
  res.send('200');
}


module.exports = { exhibitionController, exhibitionOne, exhibition, createTest, deleteData, moveWrite, dataUpdate };