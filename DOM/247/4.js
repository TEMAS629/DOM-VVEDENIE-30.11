let elem1 = document.querySelector(`#elem0`);
let elem2 = document.querySelector(`#elem1`);
let elem3 = document.querySelector(`#elem2`);
const out = document.querySelector(`.out`);
document.querySelector(`#button1`).addEventListener(`click`, () => {
  out.textContent =
    Number(elem1.textContent) +
    Number(elem1.textContent) +
    Number(elem1.textContent);
});