const input = document.querySelector('.input__text');
const buttonPalindrom = document.querySelector('.button__palindrom');
const buttonPalindromEffective = document.querySelector('.button__palindrom_effective');
const buttonFibonachi = document.querySelector('.button__fibonachi');
const buttonFoobar = document.querySelector('.button__foobar');
const buttonToBinary = document.querySelector('.button__binary');
const buttonFactorial = document.querySelector('.button__fucktorial');
let result = document.querySelector('.result');

//Палиндром
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
buttonPalindrom.addEventListener('click', (event) => {
    result.textContent = isPalindrome(input.value);
    event.preventDefault();
});

//Эффективное выявление полиндрома
function isPalindromeEffectiveSolution(str) {
    let left = 0,
    right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true
};
buttonPalindromEffective.addEventListener('click', (event) => {
    result.textContent = isPalindromeEffectiveSolution(input.value);
    event.preventDefault();
});

//Фибоначи
function computeFibonacciElement(n) {
    if (n <= 2) return 1;
    const f = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }
    return f[f.length - 1];
};

buttonFibonachi.addEventListener('click', (event) => {
    result.textContent = computeFibonacciElement(input.value);
    event.preventDefault();
});

//FooBar
const arr = [];
const fillArray = array => {
  for (let i = 1; i < input.value; i++) {
    if (!(i % 3) & !(i % 5)) {
      array.push('foobar');
    } else if (!(i % 3)) {
      array.push('foo');
    } else if (!(i % 5)) {
      array.push('bar');
    } else {
      array.push(i);
    }
  }
  return array;
};
buttonFoobar.addEventListener('click', (event) => {
    result.textContent = fillArray(arr);
});

//Перевод числа в двоичную систему
function decimalToBinary(decimal) {
    if (decimal === 0)
    return '0';
    let binary = '';
    while(decimal > 0) {
        binary = decimal % 2 + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
buttonToBinary.addEventListener('click', (event) => {
    result.textContent = decimalToBinary(input.value);
    event.preventDefault();
});

//Факториал
const foo = function(x) {
    return x > 0 ? x* foo(--x) : 1
}

buttonFactorial.addEventListener('click', (event) => {
    result.textContent = foo(input.value);
    event.preventDefault();
});

