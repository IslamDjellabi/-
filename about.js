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





const elements = document.querySelectorAll("p, .points, .points1, .points2, h2.vid, h2.vid1");

function revealOnScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);





















const images = document.querySelectorAll("img.img");

function revealImagesOnScroll() {
  images.forEach(img => {
    const position = img.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      img.classList.add("show");
    }
  });
}

// استدعاء عند التمرير
window.addEventListener("scroll", revealImagesOnScroll);

// للتأكد أن الصور القريبة من الأعلى تظهر مباشرة
revealImagesOnScroll();

