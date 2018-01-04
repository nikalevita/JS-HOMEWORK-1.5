"use strict";
function Tv(name, model, id, sound, brightness, channels){
	Device.call(this, name, model, id);
	Sound.call(this);
	Brightness.call(this);
	Channels.call(this, channels);
	this._type = "tv";
}

Tv.prototype.on = function (){
	return Device.prototype.on.call(this);
}
Tv.prototype.off = function (){
	return Device.prototype.off.call(this);
}

Tv.prototype.soundValue = function (){
	return Sound.prototype.getSoundValue.call(this);
}
Tv.prototype.increaseVolume = function (){
	return Sound.prototype.increase.call(this);
}
Tv.prototype.decreaseVolume = function (){
	return Sound.prototype.decrease.call(this);
}
Tv.prototype.offVolume = function (){
	return Sound.prototype.off.call(this);
}
Tv.prototype.onVolume = function (){
	return Sound.prototype.on.call(this);
}
Tv.prototype.statusVolume = function (){
	return Sound.prototype.getStatusVolume.call(this);
}

Tv.prototype.brightnessValue = function (){
	return Brightness.prototype.getBrightValue.call(this);
}
Tv.prototype.increaseBrightness = function (){
	return Brightness.prototype.increase.call(this);
}
Tv.prototype.decreaseBrightness = function (){
	return Brightness.prototype.decrease.call(this);
}

Tv.prototype.currentChannel = function (){
	return Channels.prototype.currentChannel.call(this);
}
Tv.prototype.setCurrentChannel = function (currentChannel){
	return Channels.prototype.setCurrentChannel.call(this, currentChannel);
}
Tv.prototype.channelNext = function (){
	return Channels.prototype.next.call(this);
}
Tv.prototype.channelPrev = function (){
	return Channels.prototype.prev.call(this);
}
Tv.prototype.addChannels = function (channels){
	return Channels.prototype.addChannels.call(this, channels);
}
Tv.prototype.deleteChannels = function (delEl){
	return Channels.prototype.deleteChannels.call(this, delEl);
}