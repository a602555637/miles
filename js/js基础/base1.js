// for (property in expression) statement
for(var propName in window){
	document.write(propName);
}

state:for (var i = 0; i < xwinx.length; i++) {
	alert(i);
}

var num = 0;
for (var i = 1; i < 10; i++) {
	if(i % 5 == 0 ){
		break;
	}
	num++;
}
document.write(num);
// switch
switch(i){
	case i<2 :
		alert("hello");
		break;
	case 3:
		alert("no is");
		break;
}
//new + object构造函数
var person = new Object();
person.name = "Nick";
person.age = 25;
//对象字面量
var person = {
	names:'nick1',
	ages:24
}
var person1 = {};
person1.name = 'james';
person1.age = 25;
//推荐用法
function displayInfo(args){
	var output = " ";
	if (typeof args.name == "string") {
		output += "name:" + args.name +"\n";
	}
	if (typeof args.age == "string") {
		output += "age:" +args.age + "\n";
	}
	document.write(output);
}
displayInfo({
	name:"nick",
	age:26
})
displayInfo({
	name:"james"
})

//数组字面量
var col = ["james","jorge","smith"];
var coll = col.splice(0,1);//(何处开始，删除多少项，添加的string)
var col1 = col.indexOf(3);
var col2 = col.lastIndexOf(4);

//迭代方法5
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item,index,array){
	return(item > 2);
});
	alert(everyResult); //false
var someResult = numbers.some(function(item,index,array){
	return(item > 2);
})
	alert(someResult);//true
var filterResult = numbers.filter(function(item,index,array){
	return(filterResult);
})
	alert(filterResult);//[3,4,5,4,3]




var add = (function () {
    var counter = 0;
    return function () {
    	return counter += 1;
    }
})();



var x = "globol value";
    var getValue = function(){
        alert(x);    //弹出"undefined"
        var x = "local value";
        alert(x);    //弹出"local value";
    }
    getValue();

var a = 2;
function foo(){
	console.log(a);
	var a = 5;
	console.log(a);
}
foo();

var a = 3;
var foo = function(){
	console.log(a);
	var a = 6;
	console.log(a);
}
foo();


//10传递给之前的函数add10，
function add10(num){
	return num + 10;
}
var result1 = callSomeFunction(add10,10);
alert(result1);//20
//不带（）是访问函数名，（）是调用函数结果
function getGreeting(name){
	return "hello" + name;
}
var result2 = callSomeFunction(getGreeting,'nick');
alert(result2);//hello nick

//从一个function中返回另一个function
function createComparisonFunction(propertyName){
	return function(object1,object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		}else if (value1 > value2) {
			return 1;
		}else {
			return 0;
		}
	};
}

var data = [
	{name : "zash",age : 29},
	{name : "hashd",age : 90}
];
data.sort(createComparisonFunction("name"));
alert(data[0.name]);//zash


var xt = 10;
function xt1(xtt1,xtt2){
	function xt2(){
		return xtt1 + xtt2 + xt;
	}
	return xt2();
}
//test
var oll = new RegExp("e");
document.write(oll.test("keljf elks"));//true



//match()
var text = "cat,bat,sat,fat";
var pattern = /.al/;
//与pattern.exec(text)相同
var matches = text.match(pattern);
alert(matches.index);//0
alert(match[0]);//"cat"
alert(pattern.lastIndex);//0
//search()
var text = "cat,bat";
var pos = text.search(/at/);
alert(pos);//1
//replace
var text = "cat,bat,sat,fat";
var result = text.replace("at","ond");
alert(result);//"cond,bat,sat,fat"

var result1 = text.replace(/at/g,"ond");
alert(result1);//"cond,bond,sond,fond"

var text = "cat,bat,sat,fat";
result = text.replace(/(.at)/g , "word ($1)");
alert(result);//word(cat),word(bat),word(sat),word(fat)

//localeCompare()
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));//1
alert(stringValue.localeCompare("yellow"));//0
alert(stringValue.localeCompare("zoo"));//-1

//最常使用的方法 对象字面量
var person = {
	name:"miles",
	age:50,
	job:"developer"

	sayName:function(){
		alert(this.name);
	}
};

Function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	}
}
var person1 = new Person("dgil",29,"nurs");
var person2 = new Person("digital",20,"oll");

function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
	}
	function sayName(){
		alert(this.name);
	}

var person1 = new Person("dgil",29,"nurs");
var person2 = new Person("digital",20,"oll");

//当作构造函数使用
var person = new Person("nick",29,"software Engineer");
person.sayName();//"nick"
//当作普通函数使用
Person("nike",24,"engineer");//add to window
window.sayName();//"nike"
//在另一个对象的作用域中调用
var o = new Object();
Person.call(o,"Kcris",25,"Nurse");
o.sayName();//"Kcris"


//正则表达式
//查找当前目录下所有txt格式的文件
find ./ -name *.txt

































