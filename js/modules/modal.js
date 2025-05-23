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
  resetFileNameInput();
}


// Keyboard Event Listeners
// Esc key to close modal
export function setUpModal(){
  window.addEventListener('keydown', e => {
    const isOverlayActive = elements.modalOverlay.classList.contains('active')
    const escKey = e.key
    // Target the modal if active and check if esc key is pressed
    if(escKey === 'Escape' && isOverlayActive){
      closeModal()
    }
  })
}

// Close modal if clicked outside itself (modalOverlay)
export function handleClickedOutside(){
  elements.modalOverlay.addEventListener('click', e => {
    const target = e.target
    // Target the overlay if active and close modal
    if(target === elements.modalOverlay){
      closeModal()
    }
  })
}