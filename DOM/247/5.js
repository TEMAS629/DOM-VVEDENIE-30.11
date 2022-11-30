let elem1 = document.querySelector(`#elem0`);
document.querySelector(`#button1`).addEventListener(`click`, () => {
  elem1.textContent = Number(elem1.textContent) + 1;
});