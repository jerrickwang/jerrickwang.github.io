function openModal(imageElement) {
  console.log('Modal is opening'); 

  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  if (modal && modalImage) {
    modal.style.display = "block";
    modalImage.src = imageElement.src;
  } else {
    console.error('Modal or Modal Image element not found!');
  }
}

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
