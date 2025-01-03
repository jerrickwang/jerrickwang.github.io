// Function to open the modal
function openModal(imageElement) {
  console.log('Modal is opening'); // Log to console for debugging

  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  // Set the source of the modal image to the clicked image
  modal.style.display = "block"; // Show the modal
  modalImage.src = imageElement.src; // Set the clicked image as the modal image
}

// Function to close the modal when clicking anywhere in the modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Hide the modal when clicked anywhere
}
// Function to update the date and time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  const dateTimeString = now.toLocaleDateString('en-US', options);

  // Set the current date and time to the #date-time element
  document.getElementById('date-time').textContent = dateTimeString;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Call once to set the initial value
updateDateTime();
