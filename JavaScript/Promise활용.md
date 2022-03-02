# Promise 활용

## 4. finally()
Promise 기본 사용법에서 then이나 catch를 통해 값을 출력하고,

마지막으로 실행할 것이 있다면
finally()를 설정한다.

```js
function p(){
    return new Promise((resolve,reject) => {
    //pending
    setTimeout(() => {
        reject(new Error('bad')); //rejected
    }, 1000);
  });
}

p()
  .then((msg)=>{
   console.log('1초 후에 Fulfilled 된다.', msg);
  })
   .catch((error)=>{
   console.log('1초 후에 rejected 된다.', error);  
  })
  .finally(()=>{
    console.log('end');
  });

  // 출력
  // 1초 후에 rejected 된다. Error: bad
  // end
  ```

  ## 5. Promise.resolve()

```js
Promise.resolve(/*value*/);
```
  value가 프로미스 객체인지 아닌지 알 수 없는 경우 사용한다.
  
  value가 프로미스 객체라면 : resolve 된 then매소드 실행

  아니라면 : value를 인자로 보내면서 then메소드 실행

  ```js
Promise.resolve(new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve('foo');
      },1000);
})
).then((data) => {
  console.log('프로미스 객체인 경우, resolve된 결과를 받아서 then이 실행',
  data );
});

Promise.resolve('bar').then(data => {
    console.log('then 메소드가 없는 경우, fullfiled 된다.', data);
})

//출력
// then 메소드가 없는 경우, fullfiled 된다. bar
// 프로미스 객체인 경우, resolve된 결과를 받아서 then이 실행 foo
  ```

 ## Promise.reject()

 ```js

Promise.reject(new Error('reason')).then(error => {
    console.log('then 메소드가 없는 경우, fullfiled 된다.', data);
}).catch(error => {
    console.log(error);
});
 ```

   ## 6. Promise.all
비동기 작업을 여러개 진행할때

프로미스 객체 여러개를 생성하여, 

배열로 만들어 인자를 넣고, Promise.all을 실행하면 

배열의 모든 객체들이 fullfiled 되었을때 then이 실행된다.

```js
function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },ms)
    })
}

Promise.all([p(1000),p(2000),p(3000)]).then(() =>{
    console.log('모두 fullfilled된 이후 실행된다.')
})

//모두 fullfilled된 이후 실행된다. [ 1000, 2000, 3000 ]
```

## 7. Promise.race

race는 all과 비슷하게 여러개의 promise를 다루지만,

all은 모든 객체가 fullfilled되고 실행되만

race는 하나, 가장먼저 fullfilled가 되면 실행해버린다.

```js
function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        },ms)
    })
}

Promise.race([p(1000),p(2000),p(3000)]).then((msg) =>{
    console.log('가장 빠른 하나가 fullfilled된 이후 실행된다.', msg)
})

//가장 빠른 하나가 fullfilled된 이후 실행된다. 1000
```