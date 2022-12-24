let elem = document.querySelector('#elem');
let p = document.querySelector('#p');
let button = document.querySelector('#btn');
button.addEventListener ('click',function(){
p.innerHTML = elem.value;
});