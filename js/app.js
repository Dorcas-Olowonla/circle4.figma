// app.js - Main application entry point

import { elements } from './modules/elements.js';
import { openModal, closeModal } from './modules/modal.js';
import { initProfileData, updateProfile } from './modules/profile.js';
import { handleFilename, handlePreviewImage } from './modules/imageHandler.js';
import { heartFunctionality } from './modules/heartFunctionality.js';
import { initPostModal } from './modules/createPostModal.js'; // ✅ NEW IMPORT

function App() {
    initProfileData();
    setupEventListeners();
    initPostModal(); // ✅ INIT POST MODAL
}

function setupEventListeners() {
    elements.editProfileButton.addEventListener("click", openModal);
    elements.closeModalButton.addEventListener("click", closeModal);
    elements.cancelButton.addEventListener("click", closeModal);
    
    elements.imageUpload.addEventListener("change", (e) => {
        handleFilename(e);
        handlePreviewImage(e);
    });

    elements.profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        updateProfile();
    });
}

function heart() {
    document.querySelectorAll('.heart-icon').forEach(heart => {
        heartFunctionality(heart);
    });
}

function createHeart() {
    const heart = document.createElement('i');
    heart.className = 'ri-heart-line heart-icon';
    heart.dataset.id = Date.now() + '-' + Math.random().toString(36).substring(2, 7);
    heartFunctionality(heart);
    card.appendChild(heart);
}

// ✅ FIXED: Pass function references, not results
document.addEventListener('DOMContentLoaded', () => {
    App();
    heart();
    createHeart();
});
