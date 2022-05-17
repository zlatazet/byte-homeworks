// Task 1
const getPassword = () => {
    let userPassword;

    do {
    userPassword = prompt(`Enter password:`);
    if (userPassword.length < 6){
        alert(`Password must be longer than 6 letters!`);
        continue;
    } else if (userPassword === userPassword.toUpperCase()){
        alert(`Use a few uppercase letters!`);
        continue;
    } else if (userPassword === userPassword.toLowerCase()){
        alert(`Use a few lowercase letters!`);
        continue;
    }

    }while(userPassword.length < 6 || userPassword === userPassword.toUpperCase() || userPassword === userPassword.toLowerCase());
    const result2 = console.log( `Password: ${userPassword}`);
    return result2;
}

const getInfo = () => {
    let userName;
    let userSurname;

    do {
        userName = prompt(`Enter your name:`);
        if (!userName){
            alert(`Incorrect input! Repeat one more time`);
            continue;
        }

        userSurname = prompt(`Enter your surname:`);
        if (!userSurname || userSurname == Number){
            alert(`Incorrect input! Repeat one more time`);
            continue;
        }
        
    } while(!userName && !userSurname);

    userName = userName.toLowerCase();
    let firstUserName = userName.slice(0, 1).toUpperCase();
    userName = firstUserName + userName.slice(1);

    userSurname = userSurname.toLowerCase();
    let firstUserSurname = userSurname.slice(0, 1).toUpperCase();
    userSurname = firstUserSurname + userSurname.slice(1);
    
    const result = console.log(`Name: ${userName} Surname: ${userSurname}`);
    return result;  
}


const getSuccess = () => {

   if (!getInfo() && !getPassword()){
       alert(`Registration completed successfully!!!`);
   } else {
       alert(`Registration error!!!`);
   }
}
getSuccess();

// Task 2 

const getRandomNumber = (min, max) => {
    let randomChoose = min + Math.random() * (max + 1 - min);
    return Math.floor(randomChoose);
  }
  
const resRandom = getRandomNumber(5, 8);
alert(resRandom);