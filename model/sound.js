"use strict";
function Sound() {
	this._soundValue = 50,
	this._soundValueTemp = 0,
	this._soundMax = 100,
	this._soundMin = 0,
	this._soundOff = false;	
}

Sound.prototype.getSoundValue = function (){
	return this._soundValue;
}
Sound.prototype.increase = function (){
	if (this._soundValue < this._soundMax) {
		this._soundValue += 1;
	}
}
Sound.prototype.decrease = function (){
	if (this._soundValue > this._soundMin) {
		this._soundValue -= 1;
	}
}
Sound.prototype.off = function (){
	this._soundOff = true;
	this._soundValueTemp = this._soundValue;
	this._soundValue = 0;
}
Sound.prototype.on = function (){
	this._soundOff = false;
	this._soundValue = this._soundValueTemp;
}