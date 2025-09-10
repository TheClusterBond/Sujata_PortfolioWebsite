 document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_j2yl2z5', 'template_lhnu87f', this)
        .then(() => {
          alert("✅ Message sent successfully!");
          document.getElementById('contact-form').reset();
        }, (error) => {
          alert("❌ Failed to send. Error: " + JSON.stringify(error));
        });
    });


     const items = document.querySelectorAll('.text-item');
    let current = 0;

    setInterval(() => {
      items[current].classList.remove('active');
      current = (current + 1) % items.length;
      items[current].classList.add('active');
    }, 3000);




  window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector(".section-slides");
    const slidesContainer = document.querySelector(".slides");

    gsap.to(slidesContainer, {
      x: () => -(slidesContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${slidesContainer.scrollWidth - window.innerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
  });



  const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const video = document.getElementById("mainVideo");

    video.addEventListener("loadeddata", () => {
      loader.classList.add("hidden");
      content.classList.add("visible");
    });