"use strict";
function Brightness() {
	this._value = 50;
}

Brightness.prototype.getBrightValue = function () {
	return this._value;
};
Brightness.prototype.increase = function (){
	if (this._value < 100) {
		this._value += 1;
	}
}
Brightness.prototype.decrease = function (){
	if (this._value > 0) {
		this._value -= 1;
	}
}