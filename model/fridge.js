"use strict";
function Fridge(name, model, id, temperature){
	Device.call(this, name, model, id);
	this._type = "fridge";
	this._temperature = temperature;
}

Fridge.prototype = Object.create(Device.prototype);
Fridge.prototype.constructor = Fridge;

Fridge.prototype.temperatureValue = function (){ 
	return this._temperature._valueTemperature;
}
Fridge.prototype.setTemperatureMaxValue = function (max){
	this._temperature.setMaxValue(max);
}
Fridge.prototype.setTemperatureMinValue = function (min){
	this._temperature.setMinValue(min);
}
Fridge.prototype.increaseTemperature = function (){
	this._temperature.increase();
}
Fridge.prototype.decreaseTemperature = function (){
	this._temperature.decrease();
}