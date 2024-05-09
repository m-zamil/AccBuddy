const incBtn = document.querySelector('.inc-btn');
const decBtn = document.querySelector('.dec-btn');
const quantity = document.querySelector('#quantity');

incBtn.addEventListener('click', () => {
  quantity.value = Number(quantity.value) + 1;
});
decBtn.addEventListener('click', () => {
  if (quantity.value > 0) {
    quantity.value = Number(quantity.value) - 1;
  }
});
