// 1. Клонирование массива 
const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
	arr.slice();
	return arr;
}
const arr1 = arrayClone(vegetables);
console.log(arr1);

// 2. Преобразование массива в строку
const vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
const str1 = vegetables1.join();
const str2 = vegetables1.toString();

console.log(str1); 
console.log(str2); 

// 3. Двоеточие между нечётными числами
const num = prompt ('Введите число', 55639217);

function colonOdd (num) {
	const num1 = num.toString();
	let result  = [num1[0]];
	for(let i=1; i<=num1.length-1; i++){

		if ((num1[i-1]%2 !== 0) && (num1[i]%2 !==0)){
			result += ':' + num1[i];

		}else {
			result += num1[i]
	}
 }
	return result;
};
console.log(colonOdd(num));

// 4. Замена регистра символов
const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

function changeRegister(str){ 
	let newStr = '';
	for(let i=0; i<str.length; i++){
		if(str[i]===str[i].toUpperCase()){
			newStr+= str[i].toLowerCase();
		}else{
			newStr += str[i].toUpperCase();
		}
	} 
	return newStr;
}
alert(changeRegister(str)); // [кАжДыЙ оХоТнИк] 

// 5. Удалить повторяющиеся элементы массива


let arr = ["php", "php", "css", "css","script", "script", "html","html", "java"];
let newArr = [];
function removeDuplicates(arr) {
	arr.forEach((item) => {
		if(!newArr.includes(item)){
			newArr.push(item);
		}
	})
	return newArr;
};

console.log(removeDuplicates(arr))// [php,css,script,html,java]


// 6. Сумма элементов двух массивов
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
 
function arraySum (arr1, arr2){
	let arrSum = [];
	let arrLens = 0;
	if (arr1.length >= arr2.length){
		arrLens = arr1.length;
	}else{
		arrLens = arr2.length;
	}

	for(let i = 0; i<arrLens; i++){
		if (arr2[i] === undefined) {
            arr2.push(0);
        } else {
           	if (arr1[i] === undefined) {
              arr1.push(0);
            }
        }
		arrSum.push(arr1[i] + arr2[i])
	}
	
	return arrSum ;
}
const newArraySum = arraySum(arr1,arr2);
console.log(newArraySum); // [5,7,9,4,5]

// 7. Количество повторяющихся элементов в массиве	
function countIdentic(arr) {
	let tmpArr = [];
	const newArr = arr.sort((a, b) => a-b);
	console.log(newArr);
	for (let i = 0; i<newArr.length; i++){
		if (newArr[i] === newArr[i+1]){
			if(!tmpArr.includes(newArr[i])){
				tmpArr.push(newArr[i])
			}
		}
	}
	return tmpArr.length;
}
const first = countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]); // 4
const second = countIdentic([15,14,13,19,13,14,14,14,7,9,9]);//3

console.log(first);
console.log(second);

// 8. Сортировка массива по убыванию
let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  

function compareNumbers(arr) {
	const result = arr.sort((a, b) => b - a);
	return result;
}
console.log(compareNumbers(numbers));

// 9. Сортировка массива объектов
let litmir = [ 
   { author: 'Хэленка', title: 'Улетела сказка'},
   { author: 'Коул Кресли', title: 'Восстание Аркан'},
   { author: 'Райчел Мид', title: 'Золотая лилия'}
   ];
 
function litmirSort(arr) {
	return arr.map(item => item.title).sort().toString();
}
	console.log(litmirSort(litmir));

// 10. Найти все значения данного свойства в массиве объектов
let litmir = [ 
   { author: 'Хэленка', title: 'Улетела сказка'},
   { author: 'Коул Кресли', title: 'Восстание Аркан'},
   { author: 'Райчел Мид', title: 'Золотая лилия'}
   ];

function propertyValue(array, key) {
	return array.map(item =>item[key]).sort().toString();
}

console.log(propertyValue(litmir, 'title'));  // Улетела сказка,Восстание Аркан,Золотая лилия
console.log(propertyValue(litmir, 'author')); // Хэленка,Коул Кресли,Райчел Мид 
