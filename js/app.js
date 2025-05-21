// app.js - Main application entry point

import { elements } from './modules/elements.js';
import { openModal, closeModal } from './modules/modal.js';
import { initProfileData, updateProfile } from './modules/profile.js';
import { handleFilename, handlePreviewImage } from './modules/imageHandler.js';
import { heartFunctionality } from './modules/heartFunctionality.js';

// Initialize the application
function App() {
    // Initialize profile data
    initProfileData();
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Modal events
    elements.editProfileButton.addEventListener("click", openModal);
    elements.closeModalButton.addEventListener("click", closeModal);
    elements.cancelButton.addEventListener("click", closeModal);
    
    // Image upload events
    elements.imageUpload.addEventListener("change", (e) => {
        handleFilename(e);
        handlePreviewImage(e);
    });
    
    // Form submission
    elements.profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        updateProfile();
    });
}

function heart() {
    // Heart Functionality
    document.querySelectorAll('.heart-icon').forEach(heart => {
    heartFunctionality(heart);
  });
}
   
function createHeart() {
    //Heart creation
    const heart = document.createElement('i');
    heart.className = 'ri-heart-line heart-icon';

    // Assign a unique data-id once per heart
    heart.dataset.id = Date.now() + '-' + Math.random().toString(36).substring(2, 7);

    // Activate your toggle function
    heartFunctionality(heart);

    card.appendChild(heart);
}


// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', App(), heart(), createHeart());