function func() {
    this.textContent += '!';
    this.removeEventListener('click', func);
  };
  
  let p = document.querySelectorAll('.elem');
  for (let elem of p) {
    elem.addEventListener('click', func);
  };