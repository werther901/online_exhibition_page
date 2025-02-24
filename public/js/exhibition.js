// scroll 내리면 header 색상 변경
const headerWrap = document.querySelector('.headerWrap');
const funnel_display_logo = document.querySelector('.funnel-display-logo');
const header_t_a = document.querySelector('.header_t_a');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    headerWrap.classList.add('on');
    header_t_a.classList.add('on');
    funnel_display_logo.classList.add('black');
  } else {
    headerWrap.classList.remove('on');
    header_t_a.classList.remove('on');

    funnel_display_logo.classList.remove('black');
  }
})

// input::focus시 'x'생성
const header_input = document.querySelector('.header_input');
const x_mark = document.querySelector('.x_mark');

const creatX = () => {
  x_mark.style.display = 'block';

  if (header_input.value == '') {
    x_mark.style.display = 'none';
  }
}
header_input.addEventListener('input', creatX);

// 'x'표시 누르면 input value 지우기
const inputRemove = () => {
  header_input.value = '';

  if (header_input.value == '') {
    x_mark.style.display = 'none';
  }
}
x_mark.addEventListener('click', inputRemove);

