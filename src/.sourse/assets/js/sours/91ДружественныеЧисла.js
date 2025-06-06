"use strict";
/*Дружественные числа на JavaScript
В данном уроке мы снова потренируемся в решении сложных задач с использованием 
вспомогательных функций.
Решим задачу на определение дружественных чисел. Числа являются дружественными, если сумма 
собственных делителей (с числом 1, но без самого числа) первого числа равна второму числу и, 
наоборот, сумма делителей второго числа равна первому.
Примером таких чисел может служить пара 220 и 284. Собственными делителями числа 220 являются 
следующие числа: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110. Сумма этих чисел 284. Собственными 
делителями числа 284, являются числа 1, 2, 4, 71, 142 и сумма этих чисел равна 220.
Если у нас есть два числа и сумма одного числа равна делителям другого и наоборот, то такая 
пара чисел называется дружественными.
Давайте сделаем функцию isFreindly, которая параметром будет принимать два числа и возвращать 
true, если числа дружественные друг с другом и falsе, если нет:*/

function isFreindly(num1, num2) {
	// тут будет какой-то код
}
/*Давайте я расскажу вам, как бы я рассуждал, решая такую задачу.
Очевидно, что задача достаточно сложная, чтобы решить ее одной только функцией isFreindly - 
нужны вспомогательные функции.
Обдумав ситуацию, я прихожу к выводу, что неплохо было бы иметь функцию getOwnDivisors, 
которая параметром будет принимать число и возвращать массив собственных делителей этого числа:*/

function getOwnDivisors(num) {
	// тут будет какой-то код
}
/*Также было бы неплохо иметь функцию getSum, которая параметром будет принимать массив и 
возвращать сумму элементов этого массива:*/

function getSum(num) {
	// тут будет какой-то код
}

//Имея описанные функции, я легко смогу найти сумму делителей любого числа:

let sum1 = getSum(getOwnDivisors(220));
let sum2 = getSum(getOwnDivisors(284));

//Со вспомогательными функциями написать код функции isFreindly не составит труда:

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));

	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
}

function getSum(arr) {
	let result = 0;
	for (let elem of arr) {
		result += elem;
	}
	return result;
}

/*Задача 1
Реализуйте функцию getOwnDivisors. Потестируйте ее работу.*/
function getOwnDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
}
let num1 = 220;
let num2 = 284;
console.log(getOwnDivisors(num1));//[2,  4,  5, 10,  11, 20, 22, 44, 55, 110 ]
console.log(getOwnDivisors(num2));//[ 2, 4, 71, 142 ]

/*Задача 2
Реализуйте функцию getSum. Потестируйте ее работу.*/

// function getDigits(num) {
// 	return String(num).split('');
// }
function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
console.log(getSum(220));//4
console.log(getSum(284));//14

/*Задача 3
Проверьте работу функции isFreindly.*/
function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));

	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}
function getOwnDivisors(num) { //выводит массив собственных делителей
	let result = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
}
// console.log(getOwnDivisors(220));//[1,  2,  4,  5, 10, 11, 20, 22, 44, 55, 110]
// console.log(getOwnDivisors(284));//[ 1, 2, 4, 71, 142 ]

function getSum(arr) {//сумма элементов массива(числа)
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
// console.log(getSum(getOwnDivisors(220)));//284
// console.log(getSum(getOwnDivisors(284)));//220

let sum1 = getSum(getOwnDivisors(220));//284
let sum2 = getSum(getOwnDivisors(284));//220

console.log(isFreindly(220, 284));//true

/*Задача 4
Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном 
промежутке и возвращать их в виде двухмерного массива вида следующего вида:
[ [220, 284], [1184, 1210], [2620, 2924] ]
С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 3000.*/

/*Задача 5
Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех 
положительных делителей, отличных от самого числа). Сделайте функцию getPerfect, которая будет
находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 
1 до 1000.*/