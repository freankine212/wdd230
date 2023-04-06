function updateDrinkCount() {
    if (localStorage.drinksMixed) {
        const drinksMixed = localStorage.drinksMixed;
        document.querySelector("#made").innerHTML = `You have mixed <strong>${drinksMixed}</strong> smoothies.`;
    }
    else {
        document.querySelector("#made").innerHTML = "<strong>You</strong> haven't made any fruit drinks yet!";
    }
}
updateDrinkCount();