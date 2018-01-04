"use strict";
function Device(name, model, id) {
	this._name = name,
	this._model = model,
	this._state = false,
	this._id = id;
}

Device.prototype.getName = function () {
	return this._name;
};
Device.prototype.setName = function (name) {
	this._name = name;
};
Device.prototype.getModel = function () {
	return this._model;
};
Device.prototype.on = function (){
	this._state = true;
}
Device.prototype.off = function (){
	this._state = false;
}