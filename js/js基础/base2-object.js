function Person(){}
Person.prototype.name = "Miles";
Person.prototype.age = 25;
Person.prototype.job = "web developer";
Person.prototype.sayName =function(){
	document.write(this.name);
};
document.write(Object.getPrototypeOf(person1));//true
document.write(Object.getPrototypeOf(person1).name);//miles

document.write(person1.hasOwnProperty("name"));//false
//来自于实例中属性name 才为true
var person1.name = "oll";
document.write(person1.hasOwnProperty("name"));//true






document.write(person1.sayName === person2.sayName);//true


var person1 = new Person("miles",29,"web developer");
var person2 = new Person("nick",24,"nurse");

document.write(person1.constructor == Person);//true
//检测对象类型
document.write(person1 instanceof Object);//true

//当作构造函数使用
var person = new Person("miles",23);
person.sayName();//miles
//普通函数
Person("miles",21);
window.sayName();//miles
//在另一个对象的作用域中调用
var i = new Object();
Person.call(i, "nike",31);
i.sayName();//"nike"


//构造函数模式:大写字母 P 开头
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName(){
	document.write(this.name)
}

var person1 = new Person();
Person1.sayName(); //"Miles"

var person2 = new Person();
person2.sayName(); //"Miles"



//单独使用原型模式
function Person = (){

}

Person.prototype = {
	constructor:Person,
	name : "miles",
	age : 24,
	job: "web developer",
	sayName: function(){
		document.write(this.name);
	}
}


//组合使用  共享  单独 可传参
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = [
			"sheley",
			"cont",
		];
}
Person.prototype = {
	constructor: Person;
	sayName: function(){
		document.write(this.name);
	}
}

var person1 = new Person("miles",23,"developer");
var person2 = new Person("alice",31,"nurse");

person1.friends.push("van");
document.write(person1.friends);//3'
document.write(person2.friends);//2'

//稳妥构造函数 使用于更安全的环境
function Person(name,age,job){
	//创建要返回的对象
	var o = new Object();
	//可定义私有变量和函数

	//添加method
	o.sayName = function () {
		document.write(name);
	};

	//返回对象
	return o;
}

//原型链
function SuperType(){
	this.property = true;
}；
SuperType.prototype.getSuperValue = function(){
	return this.property;
}
function SubType() {
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSuperValue = function(){
	return this.subproperty;
}；

var instance = new SubType();
document.write(instance.getSuperValue());//true
//instance是 3个中任何一个类型的实例
document.write(instance instanceof Object);//true
document.write(instance instanceof SubType);//true
document.write(instance instanceof SuperType);//true

document.write(Object.prototype.isPrototypeOf(instance));
document.write(SubType.prototype.isPrototypeOf(instance));
document.write(SuperType.prototype.isPrototypeOf(instance));//true

function SuperType(){
	this.colors = ['red','blue','green'];
}
function SubType(){
	//继承SuperType
	SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
document.write(instance1.colors);//4 

//conmbination inheritance
function SuperType(name) {
	this.name = name;
	this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function(){
	document.write(this.name);
};
function SubType(name,age){
	//继承属性
	SuperType.call(this.name);
	this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
	document.write(this.age);
};

var instance1 = new SubType("miles",21);
instance1.colors.push("black");
document.write(instance1.colors);//4
instance1.sayName();//miles
instance1.sayAge();//21




var person = {
	name : "miles",
	friends : [
		"x1",
		"x2"
	]
}
var person1 = new Object.create(person);
person1.name = "lond";
person1.friends.push("x3");

var person2 = new Object.create(person);
person2.name = "looper";
person2.friends.push("x4");

document.write(person.friends);//x1-4























