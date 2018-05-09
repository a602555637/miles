//单行注释

/*
this
is
comment
*/
/*if (0>1) {
	console.log("false")
} else {
	console.log("true")
}*/

/*var a = 1;
var b = 2;
if ( a > b ) {
	console.log("a>b")
} else {
	console.log("a<=b")
}*/

/*var weather = "sunny";
if (weather === "snow") {
	console.log("bring a coat");
} else if (weather === "rain") {
	console.log("bring a ring coat");
} else {
	console.log("wear what you have on");
}*/


//判断奇偶数字
/*if ( number === 0 ) {
	console.log("even");
} else {
	consol.log("odd");
}*/


毒药(poison)属于宴会厅(ballroom)，
奖杯(trophy)属于书房(gallery)，
台球杆(pool stick)属于台球房(billiards room)，
刀(knife)属于餐厅(dining room)。
我们知道谋杀发生时，每名嫌疑人都位于特定的房间内。

Parkes 先生位于餐厅。
Van Cleve 女士位于书房。
Sparr 女士位于台球房。
Kalehoff 先生位于宴会厅。
为了解决这一迷案，请写一组满足以下要求的条件语句：

根据 room 设置 weapon 的值
如果 room 的值与嫌疑人的房间一样，则将 solved 的值设为 true
接着，如果迷案解决了，将以下内容输出到控制台中：

__________ did it in the __________ with the __________!
在空白处填上嫌疑犯的名字、房间和武器。例如，

Mr. Parkes did it in the dining room with the knife!
提示：确保用不同的值测试你的代码。例如，

如果 room 等于 gallery，suspect 等于 Ms. Van Cleve，
那么应该向控制台中输出 
Ms. Van Cleve did it in the gallery with the trophy!。

//&& ! ||

3 < -10 || "james" !== "james" 


冰激凌是地球上最丰富多样的甜品，因为制作方法多种多样。请使用逻
辑运算符写一系列复杂的逻辑表达式，仅在以下条件为 true 时输出内容：

如果 flavor 设为 vanilla 或 chocolate 并且
如果 vessel 设为 cone 或 bowl 并且
如果 toppings 设为 sprinkles 或 peanuts
如果上述条件为 true，那么输出：

//I'd like two scoops of __________ ice cream in a __________ 
with __________.
在空白处填上 ice cream、vessel 和 toppings 的口味，例如：

//I'd like two scoops of vanilla ice cream in a cone with 
.
提示：确保使用不同的值测试你的代码。例如，

/*如果 flavor 等于 "chocolate"、vessel 等于 "cone" 并且 toppings 
等于 "sprinkles"，那么应该向控制台输出"I’d like two scoops of 
chocolate ice cream in a cone with peanuts."。*/
if((flavor === "vanilla" || flavor === "chocolate") && 
	(vessel === "cone" || vessel === "bowl") && 
	(toppings === "sprinkles" || toppings === "peanuts")){
            console.log("I'd like two scoops of " + flavor + 
            	" ice cream in a " + vessel + " with " + 
            	toppings +
            	 ".");
}

var option == 2;
switch(option){
	case 1:
		console.log("you selected option 1.");break;
	case 2:
		console.log("seleted 2.");break;
}



var start = 0;
while(start<10){
	console.log(start + "she said ");
	start = start + 1;
}

//你甚至可以内嵌地将函数传入另一个函数中。这种模式在 JavaScript 中经常用到，有助于简化代码。

// 函数声明需要两个参数：一个用于显示消息的函数，以及一个电影名称
function movies(messageFunction, name) {
  messageFunction(name);
}

// 调用 movies 函数，传入函数和名称
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


var cry = function printBoohoo(){
	return "boohoo";
}
console.log(cry());


function emotions(myString,myFunc){
	console.log("I am" + myString + "," + myFunc(2));
}

emotions("happy",function(num)){
	var x = 1;
	var result = "";
	while (x <= num){
		result += "ha";
		num--;
	}
	return result + "!";
}

//数组

var mixData = ["so", "happy","jelly", 1, true, [1, 2, 3], 
				["happy", "length"];

console.log(mixData[3]);
console.log(mixData.length);


var couple = ["able", "I", "am"]
/*
for (var i = 0; i < couple.length; i++) {
	couple[i]
}
*/

couple.forEach(function(ded){
	ded += "z";
	console.log(ded);
})


couuple[couple.indexOf(ded)] += "did";

var newCouple = couple.map(function(num){
	couple[couple.indexOf(num)] += "ae";
	return num;
})



var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

var facebookProfile = {
	name: "Miles",
	friendsNum: 50,
	messages: ["Thank you", "Yep","Not at all"]
	postMessage: function(message){
		facebookProfile.message.push(message);
	},
	deleteMessage: function(index){
		facebookProfile.message.slice(index,1);
	}
	addFriend:function(){
		facebookProfile.friendsNum += 1;
	},
	removeFriend:function(){
		facebookProfile.friendsNum -= 1;
	}

}

facebookProfile.postMessage(1111);
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
console.log(facebookProfile.friendsNum);
facebookProfile.addFriend();
console.log(facebookProfile.friendsNum);
facebookProfile.removeFriend();
console.log(facebookProfile.friendsNum);


var facebookProfile = {
	name: "miles",
	friendsNum: 22,
	messages:["thank"],
	
}























