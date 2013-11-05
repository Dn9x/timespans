var Timespans = require('./timespans.js');

Timespans.start();

var t = 1.0;

for(var i=1;i<10000000;i++){
	t += i;

	if(i==100000){
		Timespans.pause();
	}

	if(i==1000000){
		Timespans.continue();
	}

}

Timespans.stop();

console.log('总时间：%sms    暂停时间：%sms    使用时间：%sms ', Timespans.elapsedtime(), Timespans.pausetime(), Timespans.usedtime());