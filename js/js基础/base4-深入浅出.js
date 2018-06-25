var descriptor = Object.getOwnPropertyDescriptor(Object,'prototype');
//获取属性中的所有标签 两个参数：对象和属性
descriptor.configurable;//是否可配置 false

delete Object.prototype;//false

//是否可枚举
object.propertyIsEnumerable('legs');

if (cat && cat.legs) {//检测是否存在，准备操作cat
	cat.legs *= 2;
}

if (cat.legs != undefined) {

}

new RagExp = /.\d\D\w\W\s\S/;
new RagExp = [a-z0-9],[^a-z],/^Hi/,/test$/,/\b\B/,/(abc)/

//OOP面向对象程序设计

student.prototype = Object,create(person.prototype);
student.prototype.constructor = student;


var Student = {
	name: 'robot',
	height: 1.2,
	run: function() {
			console.log(this.name + 'is running...');
	}
};
function createStudent(name){
	//基于Student原型创建一个新对象
	var s = Object.create(Student);
	//初始化新对象
	s.name = name;
	return s;
}
var xiaoming = createStudent('xiaoming');
xiaoming.run();
xiaoming._proto_ === Student;//true



function Student(props){
	this.name = name || 'Unnamed';
}
Student.prototype.hello = function() {
	alert('hello,' + this.name + '!');
}

function PrimaryStudent(props){
	//调用Student构造函数，绑定this变量
	Student.call(this,props);
	this.grade = props.grade || 1;
}
//空函数F()
function F(){

}
// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，
// F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function() {
	return this.grade;
};

//创建xiaoming
var xiaoming = new PrimaryStudent({
	name: 'xiaoming',
	grade: 2
});
xiaoming.name;
xiaoming.grade;

//推荐方法 可复用
//inherits封装
function inherits(Child,Parent){
	var F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
}

function Student(props){
	this.name = name || 'Unnamed';
}
Student.prototype.hello = function() {
	alert('hello,'+ this.name + '!');
}
function PrimaryStudent(props){
	Student.call(this,props);
	this.grade = grade || 1;
}

//实现原型继承链
inherits(PrimaryStudent,Student);

//添加方法到PrimaryStudent原型
PrimaryStudent.prototype.getGrade = function() {
	return this.grade;
};


class Student {
	constructor(name) {
		this.name = name;
	}

	hello(){
		alert('yell' + this.name + '!');
	}
}

var xiaoming = new Student('xiaoming');
xiaoming.hello();


class PrimaryStudent extends Student {
	constructor(name,grade){
		super(name);
		this,grade = grade;
	}

	myGrade(){
		alert(this grade + '!');
	}
}


var product = function(b) {
	return this * b;
};
var double = function() {
	return product.call(this,b);
};
double.call(2);






































