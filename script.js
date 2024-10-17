////////// HOME SWIPER
$(".home-slider_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    effect: "fade",
    crossFade: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 400,
    centerInsufficientSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
  });
});

// Get the custom cursor element
const cursor = document.querySelector(".custom-cursor");
const cursorImg = document.querySelector(".custom-cursor_img");

// Update the position of the custom cursor
document.addEventListener("mousemove", (e) => {
  // GSAP animation to move the cursor
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.001, // You can adjust the animation duration for smoother or snappier movement
    ease: "linear",
  });

  // Screen width to determine left/right side
  const screenWidth = window.innerWidth;

  // Add class based on cursor position
  if (e.clientX < screenWidth / 2) {
    cursorImg.classList.add("slide-prev");
    cursorImg.classList.remove("slide-next");
  } else {
    cursorImg.classList.add("slide-next");
    cursorImg.classList.remove("slide-prev");
  }
});

// Optional: Ensure the cursor is hidden on window resize to avoid issues
window.addEventListener("resize", () => {
  gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
});
