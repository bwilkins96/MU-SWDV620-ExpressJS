// SWDV 620: Web Applications
// Coded examples for 'Week 5 - In the Node' assignment

// Error-first callback
const { readFile } = require('fs');

readFile('./test.txt', function(error, data) {
    if (error) {
        return console.error(error, '\n');
    }
    
    console.log(data.toString(), '\n');
});


// Promise
function getNumAfterDelay(num, delay) {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, delay);
    });

    return promise;
}

getNumAfterDelay(1, 1000)
.then((num) => {
    num++;
    console.log(num);
    return num;
})
.then((num) => {
    num++;
    console.log(num);
});