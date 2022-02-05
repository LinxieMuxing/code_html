
//javascript的原生类构建
function Person(first, last, age, gender, interests){
	this.name = {
		first: first,
		last: last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
}

Person.prototype.greeting = function(){
	alert("Hi, I\'m" + this.name.first + ".");
};

function Teacher(first, last, age, gender, interests, subject){
	Person.call(this, first, last, age, gender, interests);
	this.subject = subject;

}

Teacher.prototype.greeting = function(){
	let prefix;
	if(this.gender === 'male'){
		prefix = "Mr.";
	}else if(this.gender === "female"){
		prefix = "Mrs.";
	}else{
		prefix = "Mx.";
	}

	alert("Hello. My name is " + prefix + " " + this.name.last + ", and I teach " + this.subject + ".");
};

//ECMAScript 2015 Classes
class Person{
	constructor(first, last, age, gender, interests){
		this.name = {
			first: first,
			last: last
		};
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}

	greeting(){
		console.log("Hi, I\'m" + this.name.first + ".");
	}

	farewell(){
    console.log(`${this.name.first} has left the building. Bye for now!`);
	}
}

class Teacher extends Person{
	constructor(first, last, age, gender, interests, subject, grade){
		super(first, last, age, gender, interests);//对继承来的父类进行初始化
		this._subject = subject;
		this.grade = grade;
	}
	get subject(){//必须存在_
		return this._subject;
	}

	set subject(newSubject){
		this._subject = newSubject;
	}
}