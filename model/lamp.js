"use strict";
function Lamp(name, model, id, brightness){
	Device.call(this, name, model, id);
	this._brightness = brightness;
	this._type = "lamp";
}

Lamp.prototype.on = function (){
	return Device.prototype.on.call(this);
}
Lamp.prototype.off = function (){
	return Device.prototype.off.call(this);
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

var ml = new Lamp('sdsd', 'sadasd', 2, new Brightness());

ml.increaseBrightness();

console.log(ml);
