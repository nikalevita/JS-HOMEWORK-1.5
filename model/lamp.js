"use strict";
function Lamp(name, model, id, brightness){
	Device.call(this, name, model, id);
	this._brightness = brightness;
	this._type = "lamp";
}

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.brightnessValue = function () {
   return this._brightness.getBrightValue();
};

Lamp.prototype.increaseBrightness = function () {
   this._brightness.increase();
};
Lamp.prototype.decreaseBrightness = function () {
   this._brightness.decrease();
};
