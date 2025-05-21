// profile.js - Handles profile data and updates

import { elements } from "./elements.js";
import { getCurrentImageData } from "./imageHandler.js";
import { closeModal } from "./modal.js";

// Store original profile data to revert if needed
let originalProfileData = {
  imageUrl: "",
  title: "",
  description: "",
};

// Initializes the profile data
export function initProfileData() {
  originalProfileData = {
    imageUrl: elements.profileImage.src,
    title: elements.profileTitle.textContent,
    description: elements.profileDescription.textContent,
  };
}

// Returns the current profile data
export function getProfileData() {
  return {
    imageUrl: elements.profileImage.src,
    title: elements.profileTitle.textContent.trim(),
    description: elements.profileDescription.textContent.trim(),
  };
}

// Sets the form data with the provided profile data
export function setFormData(profileData) {
  elements.titleInput.value = profileData.title;
  elements.descriptionInput.value = profileData.description;
  elements.imagePreview.src = profileData.imageUrl;
  elements.imagePreview.style.display = "block";
}

// Updates the profile with the form data
export function updateProfile() {
  const newTitle = elements.titleInput.value.trim();
  const newDescription = elements.descriptionInput.value.trim();

  // Update image if selected
  const currentImageData = getCurrentImageData();
  if (currentImageData) {
    elements.profileImage.src = currentImageData;
  }

  // Update information if it exists
  if (newTitle) {
    elements.profileTitle.textContent = newTitle;
  }

  if (newDescription) {
    elements.profileDescription.textContent = newDescription;
  }

  // Close modal
  closeModal();
}
