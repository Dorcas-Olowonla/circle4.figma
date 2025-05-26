// JS module to handle new post creation

import { elements } from "./elements.js";
import { heartFunctionality } from "./heartFunctionality.js";

// Helper: get saved posts from localStorage
function getSavedPosts() {
    return JSON.parse(localStorage.getItem('userPosts') || '[]');
}

// Helper: save posts to localStorage
function savePosts(posts) {
    localStorage.setItem('userPosts', JSON.stringify(posts));
}

// Helper: convert image file to base64 (for persistence)
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Render saved posts on page load
export async function renderSavedPosts() {
    const posts = getSavedPosts();
    posts.forEach(post => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="image-container" style="position:relative;">
                <img src="${post.img}" alt="${post.title}" />
                <button class="delete-post" data-id="${post.heartId}" title="Delete Post">&times;</button>
            </div>
            <div class="card-content">
                <p>${post.title}</p>
                <i class="ri-heart-line heart-icon" data-id="${post.heartId}"></i>
            </div>
        `;
        elements.cardContainer.prepend(card);
        const newHeart = card.querySelector('.heart-icon');
        heartFunctionality(newHeart);

        const deleteBtn = card.querySelector('.delete-post');
        if (deleteBtn) {
            deleteBtn.onclick = function() {
                card.remove();
                let savedPosts = getSavedPosts();
                savedPosts = savedPosts.filter(p => p.heartId !== post.heartId);
                savePosts(savedPosts);
            };
        }
    });
}

export function newPosts() {
    const newPost = elements.newPostButton;
    const postDialog = elements.newPostModal;

    newPost.onclick = () => {
        document.getElementById("postImage").value = "";
        document.getElementById("postTitle").value = "";
        postDialog.showModal();
    };

    document.getElementById("postOkBtn").onclick = async (e) => {
        e.preventDefault();
        const imgFile = document.getElementById("postImage");
        const title = document.getElementById("postTitle").value;

        // Check if an image file is selected
        if (!imgFile.files[0]) {
            alert("Please select an image.");
            return;
        }

        // Check if a title is provided
        if (!title.trim()) {
            alert("Please enter a title.");
            return;
        }

        // Generate a unique id for the heart
        const uniqueId = "post" + Date.now() + Math.random().toString(36).substring(2, 7);

        // Convert image to base64 for persistence
        const imgBase64 = await fileToBase64(imgFile.files[0]);

        // Save the new post to localStorage
        let savedPosts = getSavedPosts();
        savedPosts.unshift({
            img: imgBase64,
            title,
            heartId: uniqueId
        });
        savePosts(savedPosts);

        // Render the new card
        renderSavedPosts();
        postDialog.close(); // Close the modal after adding the post

        // Clear the form inputs
        imgFile.value = ""; // Clear the file input
        document.getElementById("postTitle").value = ""; // Clear the title input
    }
}