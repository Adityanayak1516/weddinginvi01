document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const targetDate = new Date("2023-11-01T00:00:00"); // Change this to your target date
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      countdownElement.innerHTML = "Countdown expired!";
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

