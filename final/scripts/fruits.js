const url = 'https://freankine212.github.io/wdd230/final/fruits.json';

      fetch(url)
        .then(response => response.json())
        .then(data => {

          let select = document.getElementById("fruit-select");
          data.fruits.forEach(fruit => {
            let option = document.createElement("option");
            option.value = fruit.name;
            option.text = fruit.name;
            select.appendChild(option);
          });
        })
        .catch(error => console.error(error));







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