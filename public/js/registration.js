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
const uploadName = document.querySelector(".uploadName");

const changeInputName = () => {
  uploadName.value = file.value;
};
file.addEventListener("change", changeInputName);

// '등록' 버튼 누르면 이미지 uploads 파일에 저장
const userId = document.getElementById("userId");
const names = document.getElementById("name");
const comment = document.getElementById("comment");
const aiInfo = document.getElementById("aiInfo");

const createData = async () => {
  // 이미지 저장
  const formData = new FormData();
  // console.log(file.files[0]);
  formData.append("img", file.files[0]);
  formData.append("userid", userId.value);
  formData.append("name", names.value);
  formData.append("comment", comment.value);
  formData.append("aiInfo", aiInfo.value);

  for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]); // 콘솔에서 데이터 확인 가능
  }

  await axios({
    method: "post",
    url: "/exhibition/post/test",
    data: formData,
  })
    .then((res) => {
      // console.log(res.data);
      alert("등록 성공");
      window.location.reload(); // 새로고침
    })
    .catch((err) => {
      console.error("오류: " + err);
    });
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

// Toast editor 적용
const Editor = toastui.Editor;
const editor = new Editor({
    el: document.querySelector('#editor'),
    height: '500px',
    initialEditType: 'wysiwyg',
    previewStyle: 'vertical'
});

// Toast editor 값 불러오기(임시)
const editValue = document.querySelector('.editValue');

const clickEdit = () => {
  const htmlContent = editor.getHTML(); 
  console.log(htmlContent);
}
editValue.addEventListener('click', clickEdit);
