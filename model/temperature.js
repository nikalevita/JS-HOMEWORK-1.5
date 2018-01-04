"use strict";
function Temperature() {
	this._value = 0,
	this._max = 10,
	this._min = -10;
}

Temperature.prototype.getTempValue = function (){
	return this._value;
}
Temperature.prototype.setMaxValue = function (max){
	if (typeoff(max) === "number") {
		this._max = max;
	}
}
Temperature.prototype.setMinValue = function (min){
	if (typeoff(min) === "number") {
		this._min = min;
	}
}
Temperature.prototype.increase = function (){
	if (this._value < this._max) {
		this._value += 1;
	}
}
Temperature.prototype.decrease = function (){
	if (this._value > this._min) {
		this._value -= 1;
	}
}