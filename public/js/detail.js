// SweetAlert2
const alert03 = document.querySelector('.alert03');
const alert04 = document.querySelector('.alert04');
const alert05 = document.querySelector('.alert05');

// header.js에 같은 함수가 있어서 다시 작성할 필요 없음
// const readyAlert = () => {
//   Swal.fire({
//     title: "준비중 입니다.",
//     text: "",
//     icon: "warning",
//   });
// };
alert03.addEventListener('click', readyAlert);
alert04.addEventListener('click', readyAlert);
alert05.addEventListener('click', readyAlert);