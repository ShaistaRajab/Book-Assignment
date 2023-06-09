
//Assignment 18: EVENTS:

// task / 01:

function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
  
    modal.style.display = "block";
    modalImage.src = image.src;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // task / 02:

  const paragraph = document.getElementById("my-paragraph");
    const zoomInBtn = document.getElementById("zoom-in-btn");
    const zoomOutBtn = document.getElementById("zoom-out-btn");

    zoomInBtn.addEventListener("click", () => {
      const fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
      paragraph.style.fontSize = `${fontSize + 10}px`;
    });

    zoomOutBtn.addEventListener("click", () => {
      const fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
      paragraph.style.fontSize = `${fontSize - 10}px`;
    });


