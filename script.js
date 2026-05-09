// ===== TYPING EFFECT (FIXED + SAFE) =====
const text = "Cybersecurity Enthusiast";
let i = 0;

function typing() {
  const el = document.querySelector(".typing");

  if (!el) return;

  // reset once at start
  if (i === 0) el.innerHTML = "";

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing();


// ===== SCROLL ANIMATION (SMOOTH + PROFESSIONAL) =====
const sections = document.querySelectorAll(".section");

// initial hidden state
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease";
});

function revealOnScroll() {
  const trigger = window.innerHeight - 100;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
}

// run on scroll + on load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
