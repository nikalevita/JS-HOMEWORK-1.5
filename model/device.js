"use strict";
function User(name, model, id) {
	this._name = name,
	this._model = model,
	this._state = false,
	this._id = id;
}

User.prototype.getName = function () {
	return this._name;
};
User.prototype.setName = function (name) {
	this._name = name;
};
User.prototype.getModel = function () {
	return this._model;
};
User.prototype.on = function (){
	this._state = true;
}
User.prototype.on = function (){
	this._state = false;
}