import { elements } from "./elements.js";


// Array of card data
const cards = [
  {
    imgSrc: "//images.unsplash.com/photo-1736279071971-a552fd5cfd4d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=angelica-jasmin-ah3HUbmW7Gs.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  }
  // Add more card objects as needed
];

// Function to render cards
export function renderCards() {
  const container = elements.cardContainer;
  container.innerHTML = ""; // Clear previous cards if any
  cards.forEach(card => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <img src="${card.imgSrc}" alt="${card.imgAlt}" />
      <div class="card-content">
        <p>${card.description}</p>
        <i class="ri-heart-line heart-icon" data-id="${card.heartId}"></i>
      </div>
    `;
    container.appendChild(article);
  });
}

// Usage: call renderCards() after DOM is loaded