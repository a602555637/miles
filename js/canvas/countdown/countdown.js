var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;

window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//屏幕大小及自适应
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	render(context);
}

//绘制当前canvas环境画布
function render(cxt) {
	var hours = 12;
	var minutes = 34;
	var seconds = 56;

	//数字绘制时间
	renderDigit(0,0,parseInt(hours / 10),cxt)
}
//填充圆
function renderDigit(x,y,num,cxt) {

}