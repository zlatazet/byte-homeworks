// homework 1


// const number1 = Number(prompt("Напишите первое число:"));
// const number2 = Number(prompt("Напишите второе число:"));

// if (number1 === number2) {
//     alert("Числа равны");
// } else if (number1 > number2) {
//     alert("Первое число больше");
// } else {
//     alert("Первое число меньше");
// }

// homework 2


// const num1 = Number(prompt("Напишите первое число:"));
// const whatToDo = prompt("Что вы ходите сделать? Напишите знаком (+, -, *, /)");
// const num2 = Number(prompt("Напишите второе число:"));
// let result;


// switch (whatToDo) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2;
//         break;
//     default:
//         result = "Неизвестно";
// }

// alert("Ваш результат: " + result);


// homework 3

const visitorAge = Number(prompt("Возраст: "));

if ((visitorAge >= 12 && visitorAge < 18) || (visitorAge >= 60 && visitorAge < 80)) {
    const permission = confirm("Есть разрешение родителей?");
    if (permission) {
        console.log("Добро пожаловать!");
    } else {
        console.log("Goodbye :(");
    }
} else if (visitorAge <= 7 || visitorAge >= 90) {
    console.log("Goodbye :(");
} else {
    alert("Добро пожаловать!");
}