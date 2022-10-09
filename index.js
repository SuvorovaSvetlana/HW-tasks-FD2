"use strict";

let surname;
while(surname =='' || surname === undefined) {
	surname = prompt('Укажите вашу фамилию?');
  if (surname === null){
    surname = "Иванов";
    break;
  };
};

let yourName;
while(yourName === undefined || yourName ==''){
  yourName = prompt('Укажите ваше имя?');
  if (yourName === null){
    yourName = "Иван";
    break;
  };
};

let fathername;
while(fathername === undefined  || fathername ==''){
  fathername = prompt('Укажите ваше отчество?');
  if (fathername === null){
    fathername = "Иванович";
    break;
  };
};

let age = prompt('Сколько вам лет?');
while(age < 1 || age > 100){
  alert('некорректный ввод данных, попробуйте еще раз');
  age = prompt('Сколько вам лет?');
}
const sex = confirm('Ваш пол - мужской?');

let personSex = ' ';
if (sex === true){
  personSex ='мужской'
}else {
  personSex ='женский'
};

function ageInDay (a){
  return a*365
};
function agePlus (b){
  return +b+5;
}

let pension =' ';
if (age >= 58 && sex===false || age >=63 && sex===true){
  pension = 'да'
}else {
  pension = 'нет'
};

const message = `ваше ФИО: ${surname} ${yourName} ${fathername}
ваш возраст в годах: ${age}
ваш возраст в днях: ${ageInDay(age)}
через 5 лет вам будет: ${agePlus(age)}
ваш пол: ${personSex}
вы на пенсии: ${pension} `;

alert(message);