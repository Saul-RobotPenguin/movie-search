new Promise((resolve, reject) => {
resolve(10);
console.log("p");
reject(new Error(20));
})
.then((x) => console.log("F", x))
.catch((x) => console.log("R", x));

// I believe that resolve would log because it would be a fufilled promise as well as
//console.log('p') would log, we wont get an error because our promised is fufiled meaning x has
//the value of 20 and since .then is fufiled it would console.log F 10

Promise.resolve(42)
.then((x) => console.log(x))
.then((x) => console.log(x))
.then((x) => console.log(x));

// It would do 42 three times

//Note after testing it on my own: It only logs 42 once because the promise was already
//fufilled

p = new Promise((resolve, reject) => {
console.log("RUN");
resolve(42);
});
p.then((x) => console.log(x));
p.then((x) => console.log(x));
p.then((x) => console.log(x));

// It would run it three times this time and I think the reason why is because we save
// p as a new Promise, right?
