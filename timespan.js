/*
 * Timespan 时间跨度
 * Dn9x
 * 2013-11-06 0:16
 */
function Timespan(starttime, stoptime){
	this.starttime = starttime;		//开始时间
	this.stoptime = stoptime;		//结束时间
}


var temptime = 0;					//临时时间
var pausetime = 0;					//暂停时间

module.exports = Timespan;

//开始
Timespan.start = function(){
	var date = new Date();

	this.starttime = date.getTime();
};

//停止
Timespan.stop = function(){
	var date = new Date();

	this.stoptime = date.getTime();
};

//重置
Timespan.reset = function(){
	var date = new Date();

	this.starttime = date.getTime();
	this.stoptime = date.getTime();
};

//暂停
Timespan.pause = function(){
	var date = new Date();

	temptime = date.getTime() - this.starttime;
	this.starttime = date.getTime();
};

//继续
Timespan.continue = function(){
	var date = new Date();

	pausetime = date.getTime() - this.starttime;
	this.starttime = date.getTime();
};

//重新开始
Timespan.restart = function(){
	var date = new Date();

	this.starttime = date.getTime();
};

//总时间
Timespan.elapsedtime = function(){
	return this.stoptime-this.starttime + temptime + pausetime;
};

//使用多少时间
Timespan.usedtime = function(){
	return this.stoptime-this.starttime + temptime;
};

//暂停多少时间
Timespan.pausetime = function(){
	return pausetime;
};