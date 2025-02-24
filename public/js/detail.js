// scroll 내리면 header 색상 변경
const headerWrap = document.querySelector(".headerWrap");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    headerWrap.classList.add("on");
  } else {
    headerWrap.classList.remove("on");
  }
});