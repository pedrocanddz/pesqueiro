const mobile = document.getElementById('btn_mobile');
function Menu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
}
mobile.addEventListener('click', Menu);