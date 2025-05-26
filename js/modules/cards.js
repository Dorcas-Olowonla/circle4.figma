import { elements } from "./elements.js";

// Array of card data
const cards = [
  {
    id: 1,
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/val-thorens.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
    heartId: "post1"
  },
  {
    id: 2,
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/restaurant-terrace.jpg",
    imgAlt: "Post Image 2",
    description: "Restaurant terrace",
    heartId: "post1"
  },
  {
    id: 3,
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/outdoor-cafe.jpg",
    imgAlt: "Post Image 3",
    description: "An outdoor cafe",
    heartId: "post1"
  },
  {
    id: 4,
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/long-bridge.jpg",
    imgAlt: "Post Image 4",
    description: "A very long bridge, over the forest...",
    heartId: "post1"
  },
  {
    id: 5,
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/tunnel-morning-light.jpg",
    imgAlt: "Post Image 5",
    description: "Tunnel with morning light",
    heartId: "post1"
  },
  {
    id: 6,
    imgSrc: "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/mountain-house.jpg",
    imgAlt: "Post Image 1",
    description: "Mountain house",
    heartId: "post1"
  },
   // Add more card objects as needed
];

// Function to render cards
export function renderCards() {
  const container = elements.cardContainer;
  // container.innerHTML = ""; // Clear previous cards if any available.
  cards.map(card => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <div class="image-container">
        <img src="${card.imgSrc}" alt="${card.description}" />
        <button class="delete-post" data-id="${card.id}" title="Delete Post">&times;</button>
      </div>
      <div class="card-content">
        <p>${card.description}</p>
        <i class="ri-heart-line heart-icon" data-id="${card.id}"></i>
      </div>
    `;
    
   
    // Enable delete functionality
    const deleteBtn = article.querySelector('.delete-post');
    if (deleteBtn) {
      deleteBtn.onclick = function() {
        article.remove();
        
      };
}
    return container.appendChild(article);
  });
}

export function previewImageModal() {
  const imageCards = document.querySelectorAll(".card img");
  imageCards.forEach((image) => {
    image.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName === "IMG") {
        const imgSrc = target.src;
        const imgCaption = target.alt;
        
        elements.imgModalPreview.src = imgSrc;
        elements.imgModalTitle.textContent = imgCaption;

        elements.imageModal.classList.add("active");
        document.body.classList.add("modal-open"); 
        
      }
    });
  });
}

elements.closeImageModalButton.addEventListener("click", () => {
  if (elements.imageModal.classList.contains("active")) {
    elements.imageModal.classList.remove("active");
    document.body.classList.remove("modal-open"); // Remove modal-open class from body  
  }
});

document.addEventListener("click", (e) => {
  if (e.target === elements.imageModal && elements.imageModal.classList.contains("active")) {
    elements.imageModal.classList.remove("active");
  }
  
});

// Usage: call renderCards() after DOM is loaded