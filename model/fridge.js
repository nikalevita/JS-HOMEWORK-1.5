"use strict";

function Fridge(name, model, id, temperature){
	Device.call(this, name, model, id);
	this._type = "fridge";
	this._temperature = temperature;
}

Fridge.prototype.temperatureValue = function (){ 
	return Temperature.prototype.getTempValue.call(this);
}
Fridge.prototype.setTemperatureMaxValue = function (max){
	return Temperature.prototype.maxValue.call(max);
}
Fridge.prototype.setTemperatureMinValue = function (min){
	return Temperature.prototype.minValue.call(min);
}
Fridge.prototype.increaseTemperature = function (){
	return Temperature.prototype.increase.call(this);
}
Fridge.prototype.decreaseTemperature = function (){
	return Temperature.prototype.decrease.call(this);
}