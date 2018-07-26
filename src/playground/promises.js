const promise = new Promise((resolve, reject) => {
    // resolve('This is my resolved data');
    reject('Something went wrong');
});

promise.then((data) => {
    console.log('1', data);
}).catch((e) => {
    console.log('1', e);
});

promise.then((data) => {
    console.log('2', data);
}).catch((e) => {
    console.log('2', e);
});
