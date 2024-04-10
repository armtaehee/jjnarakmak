let slideIndex = 0;

// Function to display slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  showSlides();
}

// Function to move to the previous slide
function prevSlide() {
  slideIndex--;
  showSlides();
}

// Initial call to display the first slide
showSlides();
