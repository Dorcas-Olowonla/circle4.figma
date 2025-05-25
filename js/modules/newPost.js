// JS module to handle new post creation

import { elements } from "./elements.js";

export function newPosts() {
    const newPost = elements.newPostButton;
    const postDialog = elements.newPostModal;

    newPost.onclick = () => {
        document.getElementById("postImage").value = "";
        document.getElementById("postTitle").value = "";
        postDialog.showModal();
    };

    document.getElementById("postOkBtn").onclick = (e) => {
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

        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${URL.createObjectURL(imgFile.files[0])}" alt="Post Image" />
            <div class="card-content">
                <p>${title}</p>
                <i class="ri-heart-line heart-icon" data-id="post1"></i>
            </div>
        `;
        elements.cardContainer.prepend(card);

        postDialog.close(); // Close the modal after adding the post

        // Clear the form inputs
        imgFile.value = ""; // Clear the file input
        document.getElementById("postTitle").value = ""; // Clear the title input
    }
}