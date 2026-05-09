window.addEventListener("DOMContentLoaded", () => {

  // ===== TYPING EFFECT =====
  const text = "Cybersecurity Enthusiast | Ethical Hacker | CTF Player";
  const el = document.querySelector(".typing");

  let i = 0;
  function type() {
    if (!el) return;
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }
  type();

  // ===== SCROLL ANIMATION =====
  const sections = document.querySelectorAll("section");

  function reveal() {
    const trigger = window.innerHeight - 100;

    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;

      if (top < trigger) {
        sec.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  // ===== CYBER PARTICLES BACKGROUND =====
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5),
      dy: (Math.random() - 0.5)
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00e5ff";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
  }

  animate();

});
