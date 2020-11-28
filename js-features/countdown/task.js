let newFunc = function() {
  let timeout = document.getElementById('timer');
  timeout.textContent -=1;
  if (timeout.textContent ==0) {
    alert ('Вы выиграли!!!');
    clearInterval(set);
  }
}

let set = setInterval (newFunc, 1000);
