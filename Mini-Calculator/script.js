var output = document.querySelector('.result')
var num1 = document.querySelector('.num1')
var num2 = document.querySelector('.num2')

function actions(operator){
  var a = parseFloat(num1.value);
  var b = parseFloat(num2.value);

  switch(operator){
    case '+':
    output.innerHTML = a+b;
    break;
    case '-':
    output.innerHTML = a-b;
    break;
    case '*':
    output.innerHTML = a*b;
    break;
    case '/':
    output.innerHTML = a/b;
    break;
    case 'clr':
    output.innerHTML = null;
    num1.value = null;
    num2.value = null;
    break;
  }
}
