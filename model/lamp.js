"use strict";
function Lamp(name, model, id, brightness){
	Device.call(this, name, model, id);
	Brightness.call(this);
	this._type = "lamp";
}

Lamp.prototype.brightnessValue = function (){
	return Brightness.prototype.getBrightValue.call(this);
}
Lamp.prototype.increaseBrightness = function (){
	return Brightness.prototype.increase.call(this);
}
Lamp.prototype.decreaseBrightness = function (){
	return Brightness.prototype.decrease.call(this);
}
