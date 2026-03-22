document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const splitMedia = document.querySelector(".split-media");

if (splitMedia) {
  const track = splitMedia.querySelector(".split-slider-track");
  const prev = splitMedia.querySelector(".split-slider-btn.prev");
  const next = splitMedia.querySelector(".split-slider-btn.next");

  const originalSlides = Array.from(track.children);
  const slideCount = originalSlides.length;

  if (slideCount > 1) {
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[slideCount - 1].cloneNode(true);

    track.appendChild(firstClone);
    track.insertBefore(lastClone, track.firstChild);

    let index = 1;
    let isMoving = false;

    const moveTo = (withTransition = true) => {
      track.classList.toggle("no-transition", !withTransition);
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    moveTo(false);

    next.addEventListener("click", () => {
      if (isMoving) return;
      isMoving = true;
      index += 1;
      moveTo(true);
    });

    prev.addEventListener("click", () => {
      if (isMoving) return;
      isMoving = true;
      index -= 1;
      moveTo(true);
    });

    track.addEventListener("transitionend", () => {
      if (index === slideCount + 1) {
        index = 1;
        moveTo(false);
      } else if (index === 0) {
        index = slideCount;
        moveTo(false);
      }

      requestAnimationFrame(() => {
        isMoving = false;
      });
    });
  }
}