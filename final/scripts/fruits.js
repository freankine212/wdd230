async function queryFruit(){
  const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
  
  const request = await fetch(url);
  const fruits = (await request.json());
  
  const fruitSelect1 = document.getElementById("fruit-select-1");
  const fruitSelect2 = document.getElementById("fruit-select-2");
  const fruitSelect3 = document.getElementById("fruit-select-3");
  
  fruits.forEach(fruit =>{
      const name = fruit.name;
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
  
      option1.textContent = name;
      option2.textContent = name;
      option3.textContent = name;
  
      fruitSelect1.appendChild(option1);
      fruitSelect2.appendChild(option2);
      fruitSelect3.appendChild(option3);
    });
  
    function getValue(fieldName, targetFruit){
      for (let i=0; i< fruits.length; i++) {
        if (fruits[i].name == targetFruit) {
          return fruits[i].nutritions[fieldName];
        }
      }
    }
    function sum(fieldName, fruitName1, fruitName2, fruitName3) {
      let sum = 0;
      sum += getValue(fieldName, fruitName1);
      sum += getValue(fieldName, fruitName2);
      sum += getValue(fieldName, fruitName3);
      return sum;
    }
  
    function save(){
      if (document.querySelector("#drink-form").checkValidity())
      {
        console.log("You did it!");
        const drinkOut = document.querySelector("#drinkout");
        const fruitName1 = document.querySelector("#fruit-select-1").value;
        const fruitName2 = document.querySelector("#fruit-select-2").value;
        const fruitName3 = document.querySelector("#fruit-select-3").value;
      
        const carbs = sum("carbohydrates", fruitName1, fruitName2, fruitName3);
        const prot = sum("protein", fruitName1, fruitName2, fruitName3);
        const fat = sum("fat", fruitName1, fruitName2, fruitName3);
        const sugar = sum("sugar", fruitName1, fruitName2, fruitName3);
        const calories = sum("calories", fruitName1, fruitName2, fruitName3);
      
        const dateStamp = Intl.DateTimeFormat("en-UK", {
          dateStyle: "full"
        }).format(Date.now());
      
      drinkOut.innerHTML = `<div><strong>${document.querySelector("#name").value}</strong></div>
          <div>${document.querySelector("#phone").value}</div>
          <div>${document.querySelector("#email").value}</div>
          <div id="fruitnames">
          <span></span><span>${fruitName1}</span> - <span>${fruitName2}</span> - <span>${fruitName3}</span>
          </div>
          <div id="drinkstats">
          <span>Carbs</span><span>${Math.floor(carbs)}</span>
          <span>Protein</span><span>${Math.floor(prot)}</span>
          <span>Fat</span><span>${Math.floor(fat)}</span>
          <span>Sugar</span><span>${Math.floor(sugar)}</span>
          <span>Calories</span><span>${Math.floor(calories)}</span>
          </div>
          <div>${document.querySelector("#special").value}</div>
          <div>Order Date: ${dateStamp}</div>`;
      if (localStorage.drinksMixed) {
          localStorage.drinksMixed = parseInt(localStorage.drinksMixed) + 1;
      }
      else {
          localStorage.drinksMixed = 1;
        }
        updateDrinkCount();
      }
    }
  
    const saveButton = document.querySelector("#savebutton");
    saveButton.addEventListener("click", save);
}

queryFruit();