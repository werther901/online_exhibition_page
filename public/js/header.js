//sweet alert
const alert01 = document.querySelector('.alert01');
const alert02 = document.querySelector('.alert02');

const readyAlert = () => {
  Swal.fire({
    title: "준비중 입니다.",
    text: "",
    icon: "warning",
  });
};
alert01.addEventListener('click', readyAlert);
alert02.addEventListener('click', readyAlert);