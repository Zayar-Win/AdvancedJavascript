//we can create a promise by using new keyword.
//promise is a simply object from javascript
//promise constructor will accept a callback function as an argument
//a callback function is a function that is have been pass as an argument to another function
const onFullfillment = (result) => {
  console.log(result);
  console.log("get data");
};
const onRejection = (error) => {
  console.log(error);
  console.log("fuking errors");
};
//a function that accpet a function as an argument or return a function is called a higher oreder function
//promise constructor's callback function will automatically receive resolve and reject function
//we can avoid callback hell by using promise.
const promise1 = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      //it depend the status chaning from 'pending' to 'fullfill'
      //when the status is fullfill then automatically invoked resolve function
      resolve("Get somedata");
    }, 2000);
    setTimeout(() => {
      //it depend the status chaning from 'pending' to 'reject'
      //when the status is reject then automatically invoked reject function
      reject("fight with error");
    }, 2000);
  }
);

promise1.then(onFullfillment); //we can handle the promise result if the promise is fullfill by then method
//then's callback function will receive the result parameter from pormise's depending on status if the status is
// reject we will receive the error parameter
//then method can be chained like this promise1.then(onFullfillment).then('something').then('something');
promise1.catch(onRejection); //we can handle the promise result if the promise is reject by catch method

//promise will have another static methods like that promise.all(),promise.allSettled() and promise.race()
const promise2 = Promise.resolve(3);
const promise3 = Promise.resolve("something");
const promise4 = Promise.reject("error");

//promise.all() method will receive iterteable promise with array and it will return all the promise
//one of the promise is reject or no promise it will throw error
Promise.all([promise1, promise2, promise3]).then(
  (value) => {
    console.log(value);
  }
);

//promise.allsettled() method will return the promsies and if one of the pormise is rejected or no promsie it
//will not throw error like promise.all() ,it will return the value with status and value

Promise.allSettled([
  promise1,
  promise2,
  promise3,
  promise4,
]).then((value) => {
  console.log(value);
});

const promise5 = new Promise(
  (resolve, reject) => {
    setTimeout(resolve, 2000, "with settimeout");
  }
);

//promise.race() method will return the value when the first complete .
//It not matter what is the first it will return the fisrt complete promise only

Promise.race([promise5, promise2]).then(
  (value) => {
    console.log(value);
  }
);
