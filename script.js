// JavaScript to display the selected image in the preview section
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");

imageInput.addEventListener("change", function () {
  const selectedImage = imageInput.files[0];

  if (selectedImage) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };

    reader.readAsDataURL(selectedImage);
  } else {
    imagePreview.src = "";
  }
});
