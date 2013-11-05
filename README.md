# timespans

## Install

```bash
npm install timespans
```

This is a timespans for nodejs.


## Usage1

```js
var tw = require('timespans');

tw.start();

var t = 1.0;

for(var i=1;i<10000000;i++){
 t += i;
}

tw.stop();

console.log('总时间：%s 暂停时间：%s 使用时间：%s ', tw.elapsedtime(), tw.pausetime(), tw.usedtime());
```

## Result

```
总时间：20ms 暂停时间：0ms 使用时间：20ms
```

## Usage2

```js
var ts = require('timespans');

//开始
ts.start();

var t = 1.0;

for(var i=1;i<10000000;i++){
 t += i;

 if(i==100000){
  //可以选择在程序中的某个点暂停
  ts.pause();
 }

 if(i==1000000){
  //再次到达某个点时继续
  ts.continue();
 }
}

//停止
ts.stop();

console.log('总时间：%sms 暂停时间：%sms 使用时间：%sms ', ts.elapsedtime(), ts.pausetime(), ts.usedtime());
```

## Result

```
总时间：108ms 暂停时间：14ms 使用时间：94ms
```
