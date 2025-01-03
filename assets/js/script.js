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

// Function to close the modal when clicking anywhere in the modal
function closeModal(event) {
  var modal = document.getElementById("imageModal");

  // Ensure the click happened outside the modal image
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal when clicked anywhere outside the image
  }
}



// Event listener to close the modal when clicking outside the image
var modal = document.getElementById("imageModal");
if (modal) {
  modal.addEventListener("click", closeModal);
} else {
  console.error('Modal element not found!');
}
