"use strict";
function Tv(name, model, id, sound, brightness, channels){
	Device.call(this, name, model, id);
	this._sound = sound;
	this._brightness = brightness;
	this._channels = channels;
	this._type = "tv";
}

Tv.prototype = Object.create(Device.prototype);
Tv.prototype.constructor = Tv;


Tv.prototype.soundValue = function (){
	return this._sound._soundValue;
}
Tv.prototype.increaseVolume = function (){
	this._sound.increase();
}
Tv.prototype.decreaseVolume = function (){
	this._sound.decrease();
}
Tv.prototype.offVolume = function (){
	this._sound.off();
}
Tv.prototype.onVolume = function (){
	this._sound.on();
}
Tv.prototype.statusVolume = function (){
	return this._sound._soundOff;
}

Tv.prototype.brightnessValue = function () {
   return this._brightness._valueBrightness;
};
Tv.prototype.increaseBrightness = function () {
   this._brightness.increase();
};
Tv.prototype.decreaseBrightness = function () {
   this._brightness.decrease();
};

Tv.prototype.currentChannel = function (){
	return this._channels._channels[this._channels._currentChannel];
}
Tv.prototype.setCurrentChannel = function (currentChannel){
	this._channels.setCurrentChannel(currentChannel);
}
Tv.prototype.channelNext = function (){
	this._channels.next();
}
Tv.prototype.channelPrev = function (){
	this._channels.prev();
}
Tv.prototype.addChannels = function (channels){
	this._channels.addChannels(channels);
}
Tv.prototype.deleteChannels = function (delEl){
	this._channels.deleteChannels(delEl);
}