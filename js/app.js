// app.js - Main application entry point

import { elements } from './modules/elements.js';
import { openModal, closeModal } from './modules/modal.js';
import { initProfileData, updateProfile } from './modules/profile.js';
import { handleFilename, handlePreviewImage } from './modules/imageHandler.js';
import { heart } from './modules/heartFunctionality.js';

// Initialize the application
function App() {
    // Initialize profile data
    initProfileData();
    setupEventListeners();
    heart();
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


   



// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
     App();
});
    