var Timespan = require('./timespan.js');

Timespan.start();

var t = 1.0;

for(var i=1;i<10000000;i++){
	t += i;

	if(i==100000){
		Timespan.pause();
	}

	if(i==1000000){
		Timespan.continue();
	}

}

Timespan.stop();

console.log('总时间：%sms    暂停时间：%sms    使用时间：%sms ', Timespan.elapsedtime(), Timespan.pausetime(), Timespan.usedtime());