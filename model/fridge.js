"use strict";
function Fridge(name, model, id, temperature){
	Device.call(this, name, model, id);
	Temperature.call(this);
	this._type = "fridge";
}

Fridge.prototype.on = function (){
	return Device.prototype.on.call(this);
}
Fridge.prototype.off = function (){
	return Device.prototype.off.call(this);
}

Fridge.prototype.temperatureValue = function (){ 
	return Temperature.prototype.getTempValue.call(this);
}
Fridge.prototype.setTemperatureMaxValue = function (max){
	return Temperature.prototype.setMaxValue.call(this, max);
}
Fridge.prototype.setTemperatureMinValue = function (min){
	return Temperature.prototype.setMinValue.call(this, min);
}
Fridge.prototype.increaseTemperature = function (){
	return Temperature.prototype.increase.call(this);
}
Fridge.prototype.decreaseTemperature = function (){
	return Temperature.prototype.decrease.call(this);
}