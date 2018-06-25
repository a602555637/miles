//ES5面向对象的写法
(function() {
	'use strict';
	var Class1 = function(){
	this.fun1 = function(){
		console.log('test');
	}
};

Class1.prototype.fun2 = function() {
	console.log('text');
};

new Class1().fun2();//调用


})();


//ES6
class ClassTest {
	constructor(){
		console.log('test');
	}
	fun1(){
		console.log('1');
	}
	static fun2(){
		console.log('2');
	}
}
new ClassTest().fun1();

ClassTest.fun2();












