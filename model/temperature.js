"use strict";
function Temperature() {
	this._valueTemperature = 0,
	this._maxTemperature = 10,
	this._minTemperature = -10;
}

Temperature.prototype.getTempValue = function (){
	return this._valueTemperature;
}
Temperature.prototype.setMaxValue = function (max){
	if ( typeof(max) === "number" ) {
		this._maxTemperature = max;
	}
}
Temperature.prototype.setMinValue = function (min){
	if (typeof(min) === "number") {
		this._minTemperature = min;
	}
}
Temperature.prototype.increase = function (){
	if (this._valueTemperature < this._maxTemperature) {
		this._valueTemperature += 1;
	}
}
Temperature.prototype.decrease = function (){
	if (this._valueTemperature > this._minTemperature) {
		this._valueTemperature -= 1;
	}
}