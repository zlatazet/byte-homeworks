const container = document.getElementById("container");

const renderGreeting = (isInitial, visitCount = 0) => {
    const greetingElement = document.createElement("h2");
    const visitCountElement = document.createElement("p");
    greetingElement.innerText = "Вітаю";
    visitCountElement.innerText = `Ви заходили раз: ${visitCount}`;

    container.append(greetingElement);

    if(isInitial) {
        container.append(visitCountElement);
    }
};

if (localStorage.getItem("visits")) {
    const visits = JSON.parse(localStorage.getItem("visits"));
    const updatedVisits = visits + 1;
    localStorage.setItem("visits", updatedVisits);

    renderGreeting(true, updatedVisits);
} else {
    localStorage.setItem("visits", 1);
    renderGreeting(false);
};