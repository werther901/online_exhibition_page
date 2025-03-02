// Toast editor 적용
const Editor = toastui.Editor;
const editor = new Editor({
  el: document.querySelector("#editor"),
  height: "400px",
  initialEditType: "wysiwyg",
  previewStyle: "vertical",
});

// 이미지 업로드 전 미리보기
const file = document.getElementById("file");
const imgPreview = document.querySelector(".imgPreview");

const previewImgFunc = () => {
  // console.log(file.files[0]);

  const reader = new FileReader();
  reader.onload = (e) => {
    imgPreview.src = e.target.result;
    imgPreview.style.display = "inline-block";
  };
  reader.readAsDataURL(file.files[0]);
};
file.addEventListener("change", previewImgFunc);

// input value 이미지 이름으로 변경
const inputField = document.querySelector(".inputField");

const changeInputName = () => {
  inputField.value = file.value;
};
file.addEventListener("change", changeInputName);

// userid 중복 검사
const userId = document.getElementById("userId");
const idCheck_btn = document.querySelector(".idCheck_btn");
const dupcont = document.querySelector(".dupcont");
const dupcont02 = document.querySelector(".dupcont02");
const dupcont03 = document.querySelector(".dupcont03");
const dupcont04 = document.querySelector(".dupcont04");
const dupcont05 = document.querySelector(".dupcont05");

let idTrue = false;
let nameTrue = false;
let infoTrue = false;
let imgTrue = false;
let conTrue = false;

const idCheck = async () => {
  // console.log(userId.value);
  if (!userId.value.trim()) {
    dupcont.innerHTML = `<div style="color: red">아이디를 입력해주세요</div>`;
    return;
  }

  await axios({
    method: "get",
    url: "/exhibition/idCheck",
    params: { userId: userId.value },
  })
    .then((res) => {
      if (res.data) {
        dupcont.innerHTML = `<div style="color: red">중복된 아이디 입니다.</div>`;
        idTrue = false;
      } else {
        dupcont.innerHTML = `<div style="color: blue">사용가능한 아이디 입니다.</div>`;
        idTrue = true;
      }
    })
    .catch((err) => {
      console.log("id check err : ", err);
    });
};
idCheck_btn.addEventListener("click", idCheck);

const names = document.getElementById("name");
// const comment = document.getElementById("comment");
const aiInfo = document.getElementById("aiInfo");

// '등록' 버튼 누르면 정보 담아서 post요청
const createData = async () => {
  if(!idTrue) {
    dupcont.innerHTML = `<div style="color: red">아이디를 입력해주세요</div>`;
  };
  
  if (!names.value.trim()) {
    dupcont02.innerHTML = `<div style="color: red">작품명을 입력해주세요.</div>`;
    nameTrue = false;
    // return;
  } else {
    dupcont02.innerHTML = "";
    nameTrue = true;
  };  

  if (!aiInfo.value.trim()) {
    dupcont03.innerHTML = `<div style="color: red">모델 정보를 입력해주세요.</div>`;
    infoTrue = false;
    // return;
  } else {
    dupcont03.innerHTML = "";
    infoTrue = true;
  };

  if (!file.files[0]) {
    dupcont04.innerHTML = `<div style="color: red">이미지를 등록해주세요.</div>`;
    imgTrue = false;
    // return;
  } else {
    dupcont04.innerHTML = "";
    imgTrue = true;
  };

  if (!editor.getHTML().replace(/<[^>]*>/g, "").trim()) {
    dupcont05.innerHTML = `<div style="color: red">상세내용을 입력해주세요.</div>`;
    conTrue = false;
  } else {
    dupcont05.innerHTML = "";
    conTrue = true;
  }

  if (idTrue && nameTrue && infoTrue && imgTrue && conTrue) {
    // 이미지 저장
    const formData = new FormData();
    // console.log(file.files[0]);
    formData.append("img", file.files[0]);
    formData.append("userid", userId.value);
    formData.append("name", names.value);
    // formData.append("comment", comment.value);
    // const htmlContent = editor.getHTML();
    formData.append("comment", editor.getHTML());
    formData.append("aiInfo", aiInfo.value);

    // 콘솔에서 데이터 확인 가능
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    await axios({
      method: "post",
      url: "/exhibition/post/test",
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        alert("등록 성공");
        window.location.reload(); // 새로고침
      })
      .catch((err) => {
        console.error("오류: " + err);
      });
  } else {
    alert('필수 정보를 등록해주세요.');
  }
};

// 방명록 삭제
const deleteExhibition = (id) => {
  axios({
    method: "delete",
    url: `/exhibition/delete/${id}`,
  })
    .then((res) => {
      alert("삭제 성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

// 방명록 수정
const updatePage = (id) => {
  window.location.href = `http://localhost:3000/exhibition/write/${id}`;
};
