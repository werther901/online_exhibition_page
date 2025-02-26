const exhibitionModel = require("../models/exhibitionModel");

// 전체 데이터
const exhibitionController = async (req, res) => {
  const exhibition = await exhibitionModel.getAll();
  res.render("exhibition", { exhibition });
};

// 등록 페이지
const exhibition = async (req, res) => {
  const exhibition = await exhibitionModel.getAll();
  // console.log(exhibition)
  res.render("exhibition/registration", { exhibition });
};

// id같은 데이터 하나만
const exhibitionOne = async (req, res) => {
  // console.log(req.params.id)
  const exhibition = await exhibitionModel.getAll();
  const exhibitionOne = await exhibitionModel.getOne(req.params.id);
  res.render("exhibition/detail", { exhibitionOne, exhibition });
};

// id 중복 검사
const inspectId = async (req, res) => {
  const userId = req.query.userId;
  const checkId = await exhibitionModel.getIdCheck(userId);
  // console.log(checkId[0].userid);
  if (checkId.length > 0) {
    res.send(true);
  } else {
    res.send(false);
  }
};

// 데이터 등록
const createTest = async (req, res) => {
  const img = `/uploads/${req.file.filename}`;
  req.body.img = img;
  console.log("컨트롤러 데이터 등록 req.body : ", { ...req.body });
  // console.log("req.file 콘솔 : ", req.file);
  const data = { ...req.body };
  const createData = await exhibitionModel.postData(data);

  // 응답 보내야 axios then 실행
  res.send("200");
};

// 데이터 삭제
const deleteData = async (req, res) => {
  console.log(req.params);
  await exhibitionModel.deleteRow(req.params.id);
  res.send("200");
};

// 데이터 수정
const moveWrite = async (req, res) => {
  const exhibitionOne = await exhibitionModel.getOne(req.params.id);
  // console.log(exhibitionOne);
  res.render("exhibition/write", { exhibitionOne });
};

// 데이터 업데이트
const dataUpdate = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  if (req.file) {
    const img = `/uploads/${req.file.filename}`;
    req.body.img = img;
    const data = {...req.body};
    await exhibitionModel.updateRow(data);
    res.send('200');
  } else {
    await exhibitionModel.updateRow({...req.body});
    res.send('200');
  }
};

module.exports = { exhibitionController, exhibitionOne, exhibition, createTest, deleteData, moveWrite, dataUpdate, inspectId };
