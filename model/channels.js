"use strict";
function Channels(channels) {
	this._currentChannel = 0,
	this._channels = channels;
}

Channels.prototype.currentChannel = function (){
	return this._channels[this._currentChannel];
}

Channels.prototype.addChannels = function (channels){
	this._channels = this._channels.concat(channels);
}

Channels.prototype.deleteChannels = function (delEl){
	this._channels.splice(delEl, 1);
}

Channels.prototype.setCurrentChannel = function (currentChannel){
	if (this._currentChannel < this._channels.length - 1) {
		this._currentChannel = currentChannel;
	}
}

Channels.prototype.next = function (){
	if (this._currentChannel < this._channels.length - 1) {
		this._currentChannel += 1;
	}
}
Channels.prototype.prev = function (){
	if (this._currentChannel > 0) {
		this._currentChannel -= 1;
	}
}