var images = [];
var currentIndex = 0;

function openModal(imageElement) {
  images = Array.from(document.querySelectorAll('img[onclick="openModal(this)"]'));
  currentIndex = images.indexOf(imageElement);

  var modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "block";
    showImage(currentIndex);
  } else {
    console.error('Modal element not found!');
  }
}

function showImage(index) {
  if (images.length === 0) return;

  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  currentIndex = index;

  var modalImage = document.getElementById("modalImage");
  if (modalImage) {
    modalImage.src = images[currentIndex].src;
  } else {
    console.error('Modal Image element not found!');
  }
}

function showNext() {
  showImage(currentIndex + 1);
}

function showPrev() {
  showImage(currentIndex - 1);
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function handleModalClick(event) {
  if (event.target.id === "close") {
    closeModal();
    return;
  }

  var width = window.innerWidth;
  var x = event.clientX;

  if (x < width * 0.1) {
    showPrev();
  } else if (x > width * 0.9) {
    showNext();
  } else {
    closeModal();
  }
}

var modal = document.getElementById("imageModal");
if (modal) {
  modal.addEventListener("click", handleModalClick);
} else {
  console.error('Modal element not found!');
}
