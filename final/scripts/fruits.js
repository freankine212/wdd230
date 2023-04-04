const url = 'https://freankine212.github.io/wdd230/final/fruits.json';

      fetch(url)
        .then(response => response.json())
        .then(data => {

          let fruitSelect1 = document.getElementById("fruit-select-1");
          let fruitSelect2 = document.getElementById("fruit-select-2");
          let fruitSelect3 = document.getElementById("fruit-select-3");

          data.fruits.forEach((fruit => {
            console.log("displayResults, fruits: ", fruit);
            let option1 = document.createElement("option");
            option1.value = fruit.name.toLowerCase();
            option1.text = fruit.name;
            carbs1.value = carbohydrates.toLowerCase();
            carbs1.text = fruit.carbohydrates;
            //proten1.value = fruit.protein.toLowerCase();
            //protein1.text = fruit.protein;
            //fat1.value = fruit.fat.toLowerCase();
            //fat1.text = fruit.fat;
            //calories1.value = fruit.calories.toLowerCase();
            //calories1.text = fruit.calories;
            //sugar1.value = fruit.sugar.toLowerCase();
            //sugar1.text = fruit.sugar;
            fruitSelect1.appendChild(option1);

            let option2 = document.createElement("option");
            option2.value = fruit.name.toLowerCase();
            option2.text = fruit.name;
            carbs2.value=fruit.nutritions.carbohydrates.toLowerCase();
            carbs2.text = fruit.nutritions.carbohydrates;
            //protein2.value=fruit.protein.toLowerCase();
            //protein2.text=fruit.protein;
            //fat2.value=fruit.fat.toLowerCase();
            //fat2.text = fruit.fat;
            //calories2.value=fruit.calories.toLowerCase();
            //calories2.text = fruit.calories;
            //sugar2.value=fruit.sugar.toLowerCase();
            //sugar2.text = fruit.sugar;
            fruitSelect2.appendChild(option2);

            let option3 = document.createElement("option");
            option3.value = fruit.name.toLowerCase();
            option3.text = fruit.name;
            carb3.value = fruit.nutritions.carbohydrates.toLowerCase();
            carbs3.text = fruit.nutritions.carbohydrates;
            //protein3.value = fruit.protein.toLowerCase();
            //protein3.text=fruit.protein;
            //fat3.value = fruit.fat.toLowerCase();
            //fat3.text = fruit.fat;
            //calories3.value = fruit.calories.toLowerCase();
            //calories3.text = fruit.calories;
            //sugar3.value = fruit.sugar.toLowerCase();
            //sugar3.text = fruit.sugar;
            fruitSelect3.appendChild(option3);

            let carbtotal=0;
            data.fruits.forEach(fruit =>{
                carbtotal += fruit.carbs1 + fruit.carbs2 + fruit.carbs3;
            });
            console.log(`Total carbs: ${carbtotal.toFixed(2)}`);
          }));
        })
        .catch(error => console.error(error));



let showResultsBtn = document.getElementById("show-results-btn");
showResultsBtn.addEventListener("click", showResults);

function showResults() {
    let fruitSelect1 = document.getElementById("fruit-select-1");
    let fruitSelect2 = document.getElementById("fruit-select-2");
    let fruitSelect3 = document.getElementById("fruit-select-3");
    let results = document.getElementById("results");
  
    let selectedFruit1 = fruitSelect1.value;
    let selectedFruit2 = fruitSelect2.value;
    let selectedFruit3 = fruitSelect3.value;
  
    if (selectedFruit1 && selectedFruit2 && selectedFruit3) {
      results.textContent = `You selected ${selectedFruit1} and ${selectedFruit2} and ${selectedFruit3}.`;
    } else {
      results.textContent = "Please select three fruits.";
    }
  }

  function showCarbs() {
    let selectedValue1 = fruitSelect1;
    let selectedValue2 = fruitSelect2;
    let selectedValue3 = fruitSelect3;

    if (selectedValue1) {
        let fruitSelect1 = data.fruits.find(fruit => fruit.name.toLowerCase() === selectedValue1);
        let carbsResult1 = document.getElementById("carbs-result1")
        carbsResult1.textContent = `Carbs: ${fruitSelect1.carbs1}g`
    } else{
        let carbsResult1 = document.getElementById("carbs-result1");
        carbsResult1.textContent = "";
    }
    if (selectedValue2) {
        let fruitSelect2 = data.fruits.find(fruit => fruit.name.toLowerCase() === selectedValue2);
        let carbsResult2 = document.getElementById("carbs-result2")
        carbsResult2.textContent = `Carbs: ${fruitSelect2.carbs2}g`
    } else{
        let carbsResult2 = document.getElementById("carbs-result2");
        carbsResult2.textContent = "";
    }
    if (selectedValue3) {
        let fruitSelect3 = data.fruits.find(fruit => fruit.name.toLowerCase() === selectedValue3);
        let carbsResult3 = document.getElementById("carbs-result3")
        carbsResult3.textContent = `Carbs: ${fruitSelect3.carbs3}g`
    } else{
        let carbsResult3 = document.getElementById("carbs-result3");
        carbsResult3.textContent = "";
    }
  }



//async function getDirectoryData(){
//    const response= await fetch(url);
//    const data = await response.json();
//    console.table(data.fruits);
//    displayDirectory(data.fruits);
//}

//const displayDirectory = (fruits) =>{
//    const list = document.querySelector('div.list');
//
  //      fruits.forEach((fruit) => {
    //        let select = document.createElement('fruit-select');
      //      data.fruits.forEach(fruit =>{
        //    option.value = fruit.name;
        //    option.text = fruit.name;
         //   Selection.appendChild(option);
//        })
//    })
//}