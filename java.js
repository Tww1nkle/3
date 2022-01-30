// Задание 1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!`);
// }

let i = 0;
while (i < 3){
    console.log(i);
    i += 1;
}

// Изучене
// let age = 16;
// let message  = age > 18 ? "Добро пожаловать!" : "Вы слишком юны";
// alert(message);

//Задание 2
let male = true;
let gender;
if (male) {
gender = 'man';
} else{
gender = 'woman'
}

let male = true;
let gender =
(male == true) ? 'man' : 'woman';

// Задание 3
// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]


let male = [true, false, false, true];
let newArr = [];

for(let i = 0; i < male.length; i++){
    let gender = (male[i] == true) ? 'man' : 'woman';
    newArr.push({gender: gender})
}

console.log(newArr)


// Задание 4 
// Создайте функцию findPositiveNumbers()

// Задание 4.1');
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.

function findPositiveNumbers(){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            console.log(arr[i])
        }
    }
}
findPositiveNumbers();

//Задание 4.2
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.

function findPositiveNumbers(){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr2.push(arr[i]);
        }
    }
    console.log(arr2)
}
findPositiveNumbers();

// Задание 4.3
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.

function findPositiveNumbers(){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(findPositiveNumbers());

// Задание 4.4
//4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

function findPositiveNumbers(arr){
    let newArr = [];
    newArr.push(arr);
    return newArr;
}
console.log(findPositiveNumbers([5, 4, 3, -3]));


// Задание 5
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

function findTwoParaments(argument1str, argument2int){
    let i = 0;
    let arr2 = [];
    while (argument2int !== i){
        i ++;
        arr2.push(argument2int)
    }
    console.log(arr2)
}
findTwoParaments('a', 3)

// Задание 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.

// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


let arra = [5, 4, 3, 8, 0];

function filterFor(arr, a){
  let arr2 = [];
   for(let i = 0; i < arr.length; i++){
      if (arr[i] >= a){
           arr2.push(arr[i]);
      }
    }
    console.log(arr2)
}
filterFor(arra, 3.11)

// Задание 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

function randomColor(){
    a = getRandomInteger(0, 255);
    b = getRandomInteger(0, 255);
    c = getRandomInteger(0, 255);
    console.log('rgb(' + a + ',' + b + ',' + c  + ')')
}

randomColor()

// Задание 8 
//Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат  (!!! решить без оператора **)

function pow(x,n){
    let i = 1;
    while (i !== n){
        i++
        x = x * x
    }
    console.log(x);
}
pow(2, 2);


// Задание 9
//Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.

function isInteger(x){
    console.log(Number.isInteger(x));
}
isInteger(5)

function isInteger(x){
    if (x % 1 == 0){
        console.log(true)
    } else{
        console.log(false)
    }
}
isInteger(5.5)


// Задание 10
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.

function numberN(n){
    for(let i = 0; i <= n; i += 0.5){
        if (i % 1 == 0){
            a = 'integer'
        } else{
            a = 'decimal'
        }
        console.log( i + ',' + a);
    }
}
numberN(5)