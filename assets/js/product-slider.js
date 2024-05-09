// Function to handle image change
var leadImage1 = document.querySelectorAll('.lead-image img')[0];
var leadImage2 = document.querySelectorAll('.lead-image img')[1];
function showImage(thumbnail) {
  var newImage = new Image();
  newImage.src = thumbnail.src;
  newImage.srcset = thumbnail.srcset;

  leadImage1.style.opacity = 0;
  leadImage2.style.opacity = 0;
  setTimeout(function () {
    leadImage1.src = newImage.src;
    leadImage2.src = newImage.src;
    leadImage1.srcset = newImage.srcset;
    leadImage2.srcset = newImage.srcset;
    leadImage1.style.opacity = 1;
    leadImage2.style.opacity = 1;
  }, 500);
}

// Attach click event listeners to thumbnails
var thumbnails = document.querySelectorAll('.thumbs-container img');
thumbnails.forEach(function (thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    showImage(thumbnail);
  });
});
