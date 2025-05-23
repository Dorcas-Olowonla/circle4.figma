export function initPostModal() {
  const {
    openPostModalButton,
    postModalOverlay,
    postContent,
    submitPostButton,
    postErrorMessage,
  } = elements;

  if (!openPostModalButton || !postModalOverlay || !postContent || !submitPostButton || !postErrorMessage) {
    console.warn('Post modal elements not found');
    return;
  }

  // Open modal
  openPostModalButton.addEventListener('click', () => {
    postModalOverlay.style.display = 'flex';
    postContent.value = '';
    postErrorMessage.style.display = 'none';
    submitPostButton.disabled = true;
  });

  // Close modal
  postModalOverlay.addEventListener('click', (e) => {
    if (e.target === postModalOverlay) {
      postModalOverlay.style.display = 'none';
    }
  });

  // Input validation
  postContent.addEventListener('input', () => {
    const content = postContent.value.trim();
    if (content.length === 0) {
      postErrorMessage.textContent = 'Post content cannot be empty.';
      postErrorMessage.style.display = 'block';
      submitPostButton.disabled = true;
    } else if (content.length > 280) {
      postErrorMessage.textContent = 'Post must be under 280 characters.';
      postErrorMessage.style.display = 'block';
      submitPostButton.disabled = true;
    } else {
      postErrorMessage.style.display = 'none';
      submitPostButton.disabled = false;
    }
  });

  // Submit
  submitPostButton.addEventListener('click', () => {
    const content = postContent.value.trim();
    if (content.length === 0 || content.length > 280) return;

    alert(`New post submitted:\n${content}`);
    postModalOverlay.style.display = 'none';
  });
}

