# timespan

## Install

```bash
npm install timespan
```

This is a timespan from nodejs.


## Usage

```js
var ts = require('timespan');

ts.start();

var t = 1.0;

for(var i=1;i<10000000;i++){
	t += i;

	if(i==100000){
		ts.pause();
	}

	if(i==1000000){
		ts.continue();
	}

}

ts.stop();

console.log('总时间：%sms    暂停时间：%sms    使用时间：%sms ', ts.elapsedtime(), ts.pausetime(), ts.usedtime());
```

## Result

```js
总时间：108ms         暂停时间：14ms        使用时间：94ms
```
