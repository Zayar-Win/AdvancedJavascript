//async await is introduced in ECMAScript 2017
//async await function is for handle promise
//the difference between normal function and async function is the normal function return a value
//async function return a promise
//await keyword can be use only in async function
//await keyword is used to pause your code. excuting the promise is fullfill or reject.

const normalFunction = () => {
  return "Hello";
};

const getHello = () => {
  return (promise = new Promise(
    (resolve, reject) => {
      setTimeout(resolve, 2000, "Hello");
    }
  ));
};
const getWorld = () => {
  return (promise = new Promise(
    (resolve, reject) => {
      setTimeout(resolve, 1000, "World");
    }
  ));
};

//this is sequential execution
//it log after and after,

const sequential = async () => {
  const hello = await getHello();
  console.log(hello); //log after 2s

  const world = await getWorld();
  console.log(world); //log after 2s + 1s = 3s
};

console.log(normalFunction());
//sequential();

//it will take the larger time to log so no need to wait 1s
//if the larger time is first log it no need to wait another promise time it will good for opimization
//the main thing is to log first the longest promise

const concurrentStart = async () => {
  const hello = getHello();
  const world = getWorld();

  console.log(await hello); //log after 2s
  console.log(await world); //log after 2s
};
//concurrentStart();

//parallel excution excute the first complete promise it will not be given order
//it does't matter what is first promise is ,it give the first complete promise

const parallelExecution = () => {
  Promise.all([
    (async () => console.log(await getHello()))(),
    (async () => console.log(await getWorld()))(),
  ]);
};

parallelExecution();
//prarallerExcution will log "World" , "Hello" because getWorld takes the only 1s is faster than getHello()
