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

function flashArrow(id) {
  var arrow = document.getElementById(id);
  if (arrow) {
    arrow.classList.add("flash");
    setTimeout(function() {
      arrow.classList.remove("flash");
    }, 100);
  }
}

function showNext() {
  showImage(currentIndex + 1);
  flashArrow("nextArrow");
}

function showPrev() {
  showImage(currentIndex - 1);
  flashArrow("prevArrow");
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

  var prevArrow = document.getElementById("prevArrow");
  if (prevArrow) {
    prevArrow.addEventListener("click", function(event) {
      event.stopPropagation();
      showPrev();
    });
  }

  var nextArrow = document.getElementById("nextArrow");
  if (nextArrow) {
    nextArrow.addEventListener("click", function(event) {
      event.stopPropagation();
      showNext();
    });
  }

  document.addEventListener("keydown", function(event) {
    if (modal.style.display === "block") {
      if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      }
    }
  });
} else {
  console.error('Modal element not found!');
}
