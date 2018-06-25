//函数声明
function function_name(argument) {
	// body...hoisting
}

var function_name = function(argument1,argument2) {
	// body...
}


//递归  调用自身形成
function factorial(num){
	if (num < 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
//注意括号  创建命名函数表达式f(num)
var factorial = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}
});


//eg递归
function show(n) {
    var arr = [];
    return (function fn() {
        arr.unshift(n);
        n--;
        if (n != 0) {
            fn();
        }
        return arr;

    })();
}
show(5);//[1,2,3,4,5]

//闭包

function createFunctions(){
	var result = new Array();

	for (var i = 0; i < 10; i++) {
		result[i] = function(num){
			return function(){
				return num;
			};
		}(i);//传入变量 i
	}
	return result;
}
createFunctions();



//用作块级作用域（私有作用域）的匿名函数
//(函数声明)=函数表达式
(function() {
	//块级作用域
})() //调用

var count = 5;
outPutNumbers(count);

var someFunction = function(){
	//块级作用域
};
someFunction();

//创建私有变量的方式，不必添加全局变量。
(function() {
	var now = new Date();
	if (now.getMonth() == 0 && now.getDate() == 1) {
		document.write("happy!");
	} 
})();

//特权方法 privilege method
function MyObject(){
	//定义私有变量、私有函数
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//特权方法
	this.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
}





















