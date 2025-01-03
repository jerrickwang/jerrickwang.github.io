// Function to open the modal
function openModal(imageElement) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  // Set the source of the modal image to the clicked image
  modal.style.display = "block"; // Show the modal
  modalImage.src = imageElement.src; // Set the clicked image as the modal image
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Hide the modal when clicked anywhere
}
