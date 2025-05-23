// elements.js - Central repository of DOM element references

// Export all DOM element references

export const elements = {
  // Modal elements
  modalOverlay: document.querySelector("#modalOverlay"),
  editProfileButton: document.querySelector("#editProfileButton"),
  closeModalButton: document.querySelector("#closeModalButton"),
  cancelButton: document.querySelector("#cancelButton"),
  profileForm: document.querySelector("#profileForm"),

  // Profile card elements
  profileImage: document.querySelector("#profileImage"),
  profileTitle: document.querySelector("#profileTitle"),
  profileDescription: document.querySelector("#profileDescription"),

  // Form elements
  imageUpload: document.querySelector("#imageUpload"),
  titleInput: document.querySelector("#profileForm").querySelector("#title"),
  descriptionInput: document
    .querySelector("#profileForm")
    .querySelector("#description"),
  imagePreview: document
    .querySelector("#profileForm")
    .querySelector("#imagePreview"),
  fileName: document.querySelector("#fileName"),
  uploadText: document.querySelector("#uploadText"),

  // Modal elements
  // Post modal elements
  openPostModalButton: document.querySelector("#openModalBtn"),
  postModalOverlay: document.querySelector("#postModalOverlay"),
  postContent: document.querySelector("#postContent"),
  submitPostButton: document.querySelector("#submitPostBtn"),
  postErrorMessage: document.querySelector("#errorMsg"),
};
