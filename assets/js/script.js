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
  const dateTimeElement = document.getElementById('date-time');
  if (dateTimeElement) {
    dateTimeElement.textContent = dateTimeString;
  } else {
    console.error('#date-time element not found!');
  }
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Call once to set the initial value
updateDateTime();

// Event listener to close the modal when clicking outside the image
var modal = document.getElementById("imageModal");
if (modal) {
  modal.addEventListener("click", closeModal);
} else {
  console.error('Modal element not found!');
}
