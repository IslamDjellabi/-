
function openFullscreen() {
      let elem = document.getElementById("map-container");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }




    const btn = document.getElementById('fullscreen-btn');
const img = document.getElementById('logo-img');

btn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    img.requestFullscreen();
    btn.textContent = 'Exit Fullscreen';
  } else {
    document.exitFullscreen();
    btn.textContent = ' ⛶ Fullscreen';
  }
});

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    btn.textContent = ' ⛶ Fullscreen';
  }
});












function showSidebar() {
  const sidebar = document.querySelector('.sidebar-bar');
  sidebar.style.display = 'flex';
  setTimeout(() => {
    sidebar.classList.add('open');
  }, 10); // allow display to apply before transition
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar-bar');
  sidebar.classList.remove('open');
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 800); // match the transition duration
}



