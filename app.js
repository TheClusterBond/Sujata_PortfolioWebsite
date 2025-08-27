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
    }, 2000); // 2 seconds