//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get personName(){
		return this.name;
	}

    set personAge(age){
        this.age=age;
    }
}

// let p1=new Person("Sudheer",24);

// console.log(p1);
// console.log(p1.personAge);

class Student extends Person {
	constructor(name,age){
        super(name,age);
    }
    study(){
        console.log(`${this.personName} is studying`);
    }
}

// let s1=new Student("Sudheer",24);

// console.log(s1);

// s1.study();

class Teacher extends Person {
    constructor(name,age){
        super(name,age);
    }
    teach(){
        console.log(`${this.personName} is teaching`);
    }
}

// let t1=new Teacher("Sudheer",24);

// console.log(t1);

// t1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
