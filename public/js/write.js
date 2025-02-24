// 데이터 수정
const imgWrap = document.querySelector(".imgWrap");
const file = document.getElementById("file");
const userId = document.getElementById("userId");
const names = document.getElementById("name");
const comment = document.getElementById("comment");
const aiInfo = document.getElementById("aiInfo");

const updateForm = async (id) => {
  const formData = new FormData();
  // console.log(file.files[0]);
  formData.append("img", file.files[0]);
  formData.append("userid", userId.value);
  formData.append("name", names.value);
  formData.append("comment", comment.value);
  formData.append("aiInfo", aiInfo.value);
  formData.append("id", id);

  for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]); // 콘솔에서 데이터 확인 가능
  }

  await axios({
    method: "put",
    url: "/exhibition/update",
    data: formData,
  })
    .then((res) => {
      // console.log(res.data);
      alert("수정 완료");
      window.location.href = 'http://localhost:3000/exhibition/registration';
    })
    .catch((err) => {
      console.error("수정 오류: " + err);
    });
};

// 이미지 업로드 전 미리보기
const previewImgFunc = () => {
  console.log(file.files[0]);

  const reader = new FileReader();
  reader.onload = (e) => {
    imgWrap.src = e.target.result;
    imgWrap.style.display = "inline-block";
  };
  reader.readAsDataURL(file.files[0]);
};
file.addEventListener("change", previewImgFunc);

// input value 이미지 이름으로 변경
const input_w = document.querySelector(".input_w");

const changeInputName = () => {
  input_w.value = file.value;
};
file.addEventListener("change", changeInputName);