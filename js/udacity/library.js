var Car = function(loc) {
	// this = Object.create(Car.prototype);
	this.loc = loc;
	// return this;
};

var Van = function(loc) {
	var obj = Car(loc);
	obj.grab = function{

	};
	return obj;
};

var Cop = function(loc) {
	var obj = Car(loc);
	obj.call = function() {};
	return obj;
};



var Car = function(loc) {
	this.loc = loc;
};
Car.prototype.move = function() {
	this.loc++;
};

var Van = function(loc) {
	Car.call(this,loc);
};

//实际上是一种滥用的错误形式
// Van.prototype = new Car();



Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {};








// one的原型是two = 对象one的字段查找会被委托到对象two