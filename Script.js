const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".carousel-dots");

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

let index = 1; // Start at real first slide
let slideWidth = slides[0].clientWidth;

// Position to first slide
track.style.transform = `translateX(-${index * slideWidth}px)`;

// Create dots
for (let i = slides.length - 1; i >= 0; i--) {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".carousel-dots button");

// Update slide
function updateSlide() {
  track.style.transition = "transform 0.8s ease-in-out";
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  // Update dots (ignore clones)
  dots.forEach(dot => dot.classList.remove("active"));
  if (index === 0) {
    dots[dots.length - 1].classList.add("active");
  } else if (index === slides.length + 1) {
    dots[0].classList.add("active");
  } else {
    dots[slides.length - index].classList.add("active");
  }
}

// Transition end → fix clones
track.addEventListener("transitionend", () => {
  if (index === 0) { // if at lastClone
    track.style.transition = "none";
    index = slides.length;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  if (index === slides.length + 1) { // if at firstClone
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});

// Next & Prev
nextBtn.addEventListener("click", () => {
  index++;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateSlide();
});

// Dots click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = slides.length - i;
    updateSlide();
  });
});

// Auto-slide
setInterval(() => {
  index++;
  updateSlide();
}, 5000);

// Resize handling
window.addEventListener("resize", () => {
  slideWidth = slides[0].clientWidth;
  track.style.transition = "none";
  track.style.transform = `translateX(-${index * slideWidth}px)`;
});











function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  setTimeout(() => {
    sidebar.classList.add('open');
  }, 10); // allow display to apply before transition
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('open');
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 800); // match the transition duration
}
