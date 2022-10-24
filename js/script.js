// html문서의 로딩이 다 끝나면 js 실행
$(document).ready(function () {
  // nav : toggle_btn[ver.RE-active]
  const toggleBtn = document.querySelector(".toggle_btn")
  const wrap = document.querySelector(".toggle_wrap")
  const menu = document.querySelector(".toggle_menu")

  toggleBtn.addEventListener("click", () => {
    wrap.classList.toggle("active")
    menu.classList.toggle("active");
  });
});