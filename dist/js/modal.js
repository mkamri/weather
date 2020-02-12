// Assign variables
const modal = document.querySelector('.modal');

// Open modal
document.getElementById('modal-opener').addEventListener('click', () => modal.style.display = 'block');

// Close modal
document.getElementById('modal-closer').addEventListener('click', () => modal.style.display = 'none');