// Function to open the modal
function openModal(imageElement) {
  console.log('Modal is opening'); // Log to console for debugging

  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  // Check if modal and image elements exist
  if (modal && modalImage) {
    // Set the source of the modal image to the clicked image
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

  // Close the modal when the user clicks anywhere on the screen, including the fullscreen image
  if (event.target === modal || event.target === modalImage || event.target === document.getElementById("close")) {
    modal.style.display = "none"; // Hide the modal when clicked anywhere outside the image or on the close button
  }
}

// Event listener to close the modal when clicking anywhere on the screen
var modal = document.getElementById("imageModal");
if (modal) {
  modal.addEventListener("click", closeModal);
} else {
  console.error('Modal element not found!');
}
