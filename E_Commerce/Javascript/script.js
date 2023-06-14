// Add this code to your existing JavaScript file or create a new one

// Select the necessary elements
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.close-btn');
const productCards = document.querySelectorAll('.product');

// Add event listeners to each product card
productCards.forEach(productCard => {
  productCard.addEventListener('click', () => {
    // Get the product details from the clicked card
    const productImage = productCard.querySelector('img').src;
    const productTitle = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent;

    // Set the product details in the modal
    const modalImage = document.querySelector('.modal-img');
    modalImage.src = productImage;

    const modalTitle = document.querySelector('.modal-title');
    modalTitle.textContent = productTitle;

    const modalPrice = document.querySelector('.modal-price');
    modalPrice.textContent = productPrice;

    // Show the modal overlay
    modalOverlay.classList.add('show');
  });
});

// Update the code within the existing JavaScript file

// Add event listener to close button
modalCloseBtn.addEventListener('click', () => {
  // Hide the modal overlay
  modalOverlay.classList.remove('show');
});

