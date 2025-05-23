// modal.js - Handles modal functionality

import { elements } from "./elements.js";
import { getProfileData, setFormData } from "./profile.js";
import { resetFileNameInput } from "./imageHandler.js";

/// Open modal with default data
export function openModal() {
  // Get current profile data
  const profileData = getProfileData();

  // Fill form with profile details
  setFormData(profileData);

  // Show modal
  elements.modalOverlay.classList.add("active");
}

// Closes the modal and resets the file input
export function closeModal() {
  elements.modalOverlay.classList.remove("active");

  // Hide both modals explicitly
  elements.editProfileModal.style.display = "none";
  elements.newPostModal.style.display = "none";
  resetFileNameInput();
}
