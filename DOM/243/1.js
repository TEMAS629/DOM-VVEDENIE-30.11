function func1() {
    console.log(1);
  }
  function func2() {
    console.log(2);
  }
  document.querySelector(`#button1`).addEventListener(`click`, func1);
document.querySelector(`#button2`).addEventListener(`click`, func2);