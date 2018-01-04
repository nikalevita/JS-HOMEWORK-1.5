"use strict";
function Brightness() {
	this._valueBrightness = 50;
}

Brightness.prototype.getBrightValue = function () {
	return this._valueBrightness;
};
Brightness.prototype.increase = function (){
	if (this._valueBrightness < 100) {
		this._valueBrightness += 1;
	}
}
Brightness.prototype.decrease = function (){
	if (this._valueBrightness > 0) {
		this._valueBrightness -= 1;
	}
}