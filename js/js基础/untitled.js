var str = "string";
var strObj = new String("string");
new Array(1,2);

var o = { i : 1};
console.log(o.i);



//原始表达式
x = {'3.12',"test",undefined,}
//复合表达式
x = x++;
//数组对象的初始化表达式
new Array = [1,2,,6];
var Arr = {
	x:1,
	y:2
}
//函数表达式
var a = function(ill,lan){
  document.getElementById("dj") = i;

}

function(){
	console.log("hello");//立即调用
}
//属性访问表达式
var i = {
	x:1,
	f:2
}
i.x = o["x"];//调用方法

//obj创建表达式
new Function(1,2);
new Object;

delete obj.i;


var obj = {};
Object.defineProperty()


instanceof obj;
typeof function();


function(){

};

try {
	throw "test";
}catch(ex){

}

function func(){
	'use strict';//严格模式
}
/*
严格模式下：

1，不允许使用with语句；

2，不允许给未声明的变量赋值；

3，arguments,是与形参不同的变量副本；

4，delete不允许被删除的变量会报错，而不是返回false；

5，不允许重复的对象字面量属性名；

6，不允许八进制的字面量；

7，eval, arguments成为关键词，不允许用来作为变量名和函数名；

8，eval()会单独创建一个作用域，并在eval()返回时丢弃；*/



var ipp = {
	"fsa" : "asdf";
}

ipp.length

var ipp1 = ipp.toUpperCase();

var mydate = new Date();//当前时间；
document.write(mydate + "<br/>");//输出当前时间
document.write(mydate.getFullYear() + "<br/>");//输出当前年份；
mydate.setFullYear(81);//设置年份；
document.write(mydate + "<br/>");//输出年份为0081

var mydate=new Date();//定义日期对象
  var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
//定义数组对象,给每个数组项赋值
  var mynum = mydate.getDay();//返回值存储在变量mynum中
  document.write(mydate.getDay());//输出getDay()获取值
  document.write("今天是："+ weekday[mynum]);//输出星期几

//推迟1小时  时间
  var mydate=new Date();
  document.write("当前时间："+mydate+"<br>");
  mydate.setTime(mydate.getTime() + 60 * 60 * 1000);
  document.write("推迟一小时时间：" + mydate);

//charAt 指定位置的字符 string
var mystr="I love JavaScript!"
  document.write(mystr.charAt(2));

//ES6只读操作
const PI = 3.1415926;
console.log(PI);

//返回指定的字符串首次出现的位置
var str1 = "sd local";
document.write(str.indexOf("s") + "<br/>");



// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

//string 转换为 array
var mystr = "www.imooc.com";
document.write(mystr.split(".")+"<br>");
document.write(mystr.split(".", 2)+"<br>");

document.write(mystr.split("")+"<br>");
document.write(mystr.split("", 5));

//提取字符串
var mystr="I love JavaScript";
document.write(mystr.substring(7));
document.write(mystr.substring(2,6));

//向上取整。向下取整.四舍五入。随机数
  document.write(Math.ceil(0.8) + "<br />")
  document.write(Math.ceil(6.3) + "<br />")
  document.write(Math.ceil(5) + "<br />")
  document.write(Math.ceil(3.5) + "<br />")
  document.write(Math.ceil(-5.1) + "<br />")
  document.write(Math.ceil(-5.9))

  document.write(Math.floor(0.8)+ "<br>")
  document.write(Math.floor(6.3)+ "<br>")
  document.write(Math.floor(5)+ "<br>")
  document.write(Math.floor(3.5)+ "<br>")
  document.write(Math.floor(-5.1)+ "<br>")
  document.write(Math.floor(-5.9))

  document.write(Math.round(3.13));

  document.write(Math.random()*10);

document.write(Math.round(Math.random()*10));

//数组连接 array 转 string 。颠倒数组元素顺序reverse()
  var mya1= new Array("hello!")
  var mya2= new Array("I","love");
  var mya3= new Array("JavaScript","!");
  var mya4=mya1.concat(mya2,mya3);
  document.write(mya4);

  var myarr = new Array(3)
  myarr[0] = "I";
  myarr[1] = "love";
  myarr[2] = "JavaScript";
  document.write(myarr.join("."));

//选定元素
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

document.write(arr + "<br />")
document.write(arr.slice(2,4) + "<br />")
document.write(arr)；

//排序
function sortNum(a,b) {
  return a - b;
 //升序，如降序，把“a - b”该成“b - a”
 //80,16,50,6,100,1  
 //1,6,16,50,80,100
}
 var myarr = new Array("80","16","50","6","100","1");
  document.write(myarr + "<br>");
  document.write(myarr.sort(sortNum));

function opnewin(){
	var message = prompt("import");
	if (message!=null$message!="") {
		window.open(message,"_blank","windth:600px,height:300px");
	}
}

function clock(){
	var time = new Date();
	document.getElementById("clock").value = time;
}

var i = setInterval(clock(),50);
var e = clearInterval(i);

//当前窗口浏览history总长度
  var HL = window.history.length;
  document.write(HL);

//查看浏览器信息
var x = navigator;
document.write("CodeName=" + x.appCodeName);
document.write("<br />");
document.write("MinorVersion=" + x.appMinorVersion);
document.write("<br />");
document.write("Name=" + x.appName);
document.write("<br />");
document.write("Version=" + x.appVersion);
document.write("<br />");
document.write("CookieEnabled=" + x.cookieEnabled);
document.write("<br />");
document.write("CPUClass=" + x.cpuClass);
document.write("<br />");
document.write("OnLine=" + x.onLine);
document.write("<br />");
document.write("Platform=" + x.platform);
document.write("<br />");
document.write("UA=" + x.userAgent);
document.write("<br />");
document.write("BrowserLanguage=" + x.browserLanguage);
document.write("<br />");
document.write("SystemLanguage=" + x.systemLanguage);
document.write("<br />");
document.write("UserLanguage=" + x.userLanguage);

//使用者屏幕信息
document.write("Screen resolution: ")
document.write(screen.width + "*" + screen.height)
document.write("<br />")
document.write("Available view area: ")
document.write(screen.availWidth + "*" + screen.availHeight)
document.write("<br />")
document.write("Color depth: ")
document.write(screen.colorDepth)
document.write("<br />")
document.write("Buffer depth: ")
document.write(screen.bufferDepth)
document.write("<br />")
document.write("DeviceXDPI: ")
document.write(screen.deviceXDPI)
document.write("<br />")
document.write("DeviceYDPI: ")
document.write(screen.deviceYDPI)
document.write("<br />")
document.write("LogicalXDPI: ")
document.write(screen.logicalXDPI)
document.write("<br />")
document.write("LogicalYDPI: ")
document.write(screen.logicalYDPI)
document.write("<br />")
document.write("FontSmoothingEnabled: ")
document.write(screen.fontSmoothingEnabled)
document.write("<br />")
document.write("PixelDepth: ")
document.write(screen.pixelDepth)
document.write("<br />")
document.write("UpdateInterval: ")
document.write(screen.updateInterval)
document.write("<br />")

/*节点属性
在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：

1. nodeName : 节点的名称

2. nodeValue ：节点的值

3. nodeType ：节点的类型

一、nodeName 属性: 节点的名称，是只读的。

1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document

二、nodeValue 属性：节点的值

1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值

三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:

元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
  */



//获取 子节点
var x= document.getElementsByTagName("div")[0].childNodes;
	//节点是array 所以 for loop 遍历
for (var i = 0; i < x.length; i++) {
	document.write("jdlx" + x[i].nodeName +x[i].nodeType + nodeValue);
}
//浏览器窗口可视区域大小
var w= document.documentElement.clientWidth
      || document.body.clientWidth;
var h= document.documentElement.clientHeight
      || document.body.clientHeight;

//网页尺寸scrollHeight
var w=document.documentElement.scrollWidth
   || document.body.scrollWidth;
var h=document.documentElement.scrollHeight
   || document.body.scrollHeight;

/*网页尺寸offsetHeight
offsetHeight和offsetWidth，获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)。

一、值

offsetHeight = clientHeight + 滚动条 + 边框。
*/
var w= document.documentElement.offsetWidth
    || document.body.offsetWidth;
var h= document.documentElement.offsetHeight
    || document.body.offsetHeight;


// scrollLeft:设置或获取位于给定对象左边界与窗口中目前可见内容的最左端之间的距离 ，即左边灰色的内容。

// scrollTop:设置或获取位于对象最顶端与窗口中可见内容的最顶端之间的距离 ，即上边灰色的内容。

// offsetLeft:获取指定对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 。

// offsetTop:获取指定对象相对于版面或由 offsetParent 属性指定的父坐标的计算顶端位置 。
































