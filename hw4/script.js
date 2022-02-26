// hw1

const getSum = (a, b) => a + b;

const getSum = (a, b) => {
    return a + b;
}

function getSum(a, b) {
    return a + b
}

getSum(3, 6);
getSum(8, 1);


// hw2

const getUserData = () => {
    const userName = prompt("Your name?");
    const userAge = Number(prompt("Your age?"));

    if (userAge > 30) {
        alert(`Здравствуйте, $(userName)`);
    } else {
        alert(`Привет, <$(userName)>`);
    }
};

getUserData()


// hw3

const getPow = (number, pow = 2) => number ** pow;

getPow(2);
getPow(3, 5);