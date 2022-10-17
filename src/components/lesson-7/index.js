class Worker {
  constructor(name, surname, rate, days){
   this.name = name;
   this.surname =surname;
   this.rate = rate;
   this.days = days;
  }
  getSalary(){
     return this.rate * this.days;
  }
}

const person = new Worker('Ivan', 'Ivanov', 10, 31);

console.log(person);

console.log(person.name); 
console.log(person.surname); 
console.log(person.rate); 
console.log(person.days); 
console.log(person.getSalary());


class MyString {
	constructor (string){
		this.string = string;
	}

	reverse(){
		return this.string.split('').reverse().join('');
	}

	ucFirst(){
		return this.string[0].toUpperCase() + this.string.substring(1);
	}

	ucWords(){
		return this.string.split(' ')
		.map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
	}

}

var str = new MyString('abcde abcde abcde');
console.log(str.reverse());
console.log(str.ucFirst());
console.log(str.ucWords());