// Function to open the modal
function openModal(imageElement) {
  console.log('Modal is opening'); // Log to console for debugging

  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  if (modal && modalImage) {
    modal.style.display = "block"; // Show the modal
    modalImage.src = imageElement.src; // Set the clicked image as the modal image
  } else {
    console.error('Modal or Modal Image element not found!');
  }
}

// Function to close the modal when clicking anywhere (including the fullscreen image)
function closeModal(event) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");

  if (event.target === modal || event.target === modalImage || event.target === document.getElementById("close")) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("imageModal");
if (modal) {
  modal.addEventListener("click", closeModal);
} else {
  console.error('Modal element not found!');
}

// Smooth page transition
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target.getAttribute("href");

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 500); // Match the duration of the CSS transition
    });
  });
});

// Handle browser back/forward navigation
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    document.body.classList.remove("fade-out");
  }
});
