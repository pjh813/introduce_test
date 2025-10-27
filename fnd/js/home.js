let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideContainer = document.getElementById("slideContainer");
const modalBg = document.getElementById("modalBg");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ===== 슬라이드 이동 함수 =====
function showSlide(index) {
  const offset = index * -100;
  slideContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// 버튼 이벤트 연결
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// ===== 슬라이드 클릭 이동 =====
// 각 슬라이드에 data-href 속성을 넣어주세요 (예: data-href="member1.html")
slides.forEach(slide => {
  slide.addEventListener("click", () => {
    const href = slide.dataset.href;
    if (href) {
      window.location.href = href;
    }
  });
});

// ===== 모달 이벤트 =====
openModalBtn.addEventListener("click", () => modalBg.style.display = "flex");
closeModalBtn.addEventListener("click", () => modalBg.style.display = "none");

// 배경 클릭 시 모달 닫기
modalBg.addEventListener("click", (e) => {
  if (e.target === modalBg) modalBg.style.display = "none";
});

// ===== 폼 제출 =====
document.getElementById("applyForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("신청이 완료되었습니다! 🎉");
  modalBg.style.display = "none";
  this.reset();
});
