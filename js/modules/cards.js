import { elements } from "./elements.js";


// Array of card data
const cards = [
  {
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/long-bridge.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  },
  {
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/mountain-house.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  },
  {
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/outdoor-cafe.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  },
  {
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/restaurant-terrace.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  },
  {
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/tunnel-morning-light.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  },
  {
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/val-thorens.jpg",
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
  cards.map(card => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <img src="${card.imgSrc}" alt="${card.imgAlt}" />
      <div class="card-content">
        <p>${card.description}</p>
        <i class="ri-heart-line heart-icon" data-id="${card.heartId}"></i>
      </div>
    `;
    return container.appendChild(article);
  });
}

// Usage: call renderCards() after DOM is loaded