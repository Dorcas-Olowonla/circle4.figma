export function heartFunctionality(heart) {
  if (!heart.dataset.id) {
    heart.dataset.id = Date.now() + "-" + Math.random().toString(36).substring(2, 7);
  }

  const id = heart.dataset.id;

  const saved = localStorage.getItem(`liked-${id}`);

  if (saved === "true") {
    heart.classList.remove("ri-heart-line");
    heart.classList.add("ri-heart-fill", "liked");
  }

  heart.addEventListener("click", () => {
    const isLiked = heart.classList.contains("ri-heart-fill");
    if (isLiked) {
      heart.classList.remove("ri-heart-fill", "liked");
      heart.classList.add("ri-heart-line");
      localStorage.setItem(`liked-${id}`, "false");
    } else {
      heart.classList.remove("ri-heart-line");
      heart.classList.add("ri-heart-fill", "liked");
      localStorage.setItem(`liked-${id}`, "true");
    }
  });
}
