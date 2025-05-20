// imageHandler.js - Handles image upload and preview functionality

import { elements } from "./elements.js";

// Store the current image data
let currentImageData = null;

// Update the file name display when a file is selected
export function handleFilename(imageTarget) {
  const file = imageTarget.target.files[0];

  if (file) {
    elements.fileName.textContent = file.name;
    elements.fileName.style.display = "inline-block";
    elements.uploadText.style.display = "none";
  }
}

// Handles image preview when a file is selected
export function handlePreviewImage(img) {
  const file = img.target.files[0];

  if (file) {
    // Image validation
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Read the file and convert to data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageURL = e.target.result;

      // Update preview image
      elements.imagePreview.src = imageURL;
      elements.imagePreview.style.display = "block";

      // Save image for later use
      currentImageData = imageURL;
    };

    // Read File as DataURL
    reader.readAsDataURL(file);
  }
}

// Resets the file input and display
export function resetFileNameInput() {
  elements.imageUpload.value = "";
  elements.fileName.style.display = "none";
  elements.uploadText.style.display = "block";
}

// Returns the current image data if one has been selected
// Image data URL or null
export function getCurrentImageData() {
  return currentImageData;
}

// Resets the current image data
export function resetCurrentImageData() {
  currentImageData = null;
}
