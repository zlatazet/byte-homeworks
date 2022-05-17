// Task 1 
// const LOGIN = "ADMIN";
// const PASSWORD = "1q2w3e";

// const authorize = () => {
//     let userPassword;
//     let userLogin;
//     let isAuthSuccess = false;
//     let availableAttempts = 3;


//     do {
//         userLogin = prompt("Login:");
//         if (!userLogin) {
//             alert("Enter login");
//             continue;
//         }

//         userPassword = prompt("Password:");
//         if (!userPassword) {
//             alert("Enter password");
//             continue;
//         }

//         if (userPassword === PASSWORD && userLogin === LOGIN) {
//             isAuthSuccess = true;
//         } else {
//             availableAttempts--;
//             alert(`Данные неверны! Осталось попыток: ${availableAttempts}`);
//         } 
//     } while (!isAuthSuccess && availableAttempts > 0);


//     if (!availableAttempts){
//         console.log(`You are blocked!`);
//         return;
//     }


//     alert("welcome!");
// }
// authorize();

// Task 2

function getSimpleNum(start, end){

    nextSimple:
    for (let i = start = 2; i <= end; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextSimple; 
      }

      console.log( i ); 
    }
   }
      console.log(getSimpleNum(1, 260));