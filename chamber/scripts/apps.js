const date = new Date(document.lastModified);
document.getElementById("date").innerHTML = date; 

document.getElementById("theCurrentYear").innerHTML = new
   Date().getFullYear();



const currentDate = new Date();
document.querySelector("#current-date").textContent = Intl.DateTimeFormat("en-US", {
	dateStyle: "full"}).format(currentDate);


const weekday = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
]
var day = weekday[date.getDay()];


if (day == "Monday" | day == "Tuesday") { 
   document.getElementById("day").innerHTML ='Join us on Wednesday to meet the towns heroes who fought valiantly in the Battle of the Five Armies against the elves, dwarves, goblins and eagles!';
}
else if (day == "Wednesday"|day == "Thursday"|day == "Friday"| day == "Saturday"| day == "Sunday") {
   document.getElementById("day").innerHTML='Nothing to see here citizen, check back next Monday or Tuesday';
   }

/*
if (day == weekday("Tuesday")){
   document.writeIn('<p>Join us on Wednesday to meet the towns heroes who fought valiantly in the Battle of the Five Armies against the elves, dwarves, goblins and eagles!</p>');
}
*/


   //document.getElementById(id).innerHTML = "Nothing to see...";


   /* gotcha */

   // visits

const visitsDisplay = document.getElementById("visits");
const daysBetweenOutput = document.getElementById("daysBetween");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastTime = Number(window.localStorage.getItem("lastVisitDateTime"));
numVisits++;
if (numVisits > 1){
    visitsDisplay.textContent = numVisits;
}else{
    visitsDisplay.textContent = 'This is your first visit!';
    lastTime = Date.now();
}
let daysBetween = (Date.now() - lastTime)/86400000;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisitDateTime", Date.now());

let rounded = Math.round(daysBetween);
if (rounded !==0){
    daysBetweenOutput.textContent= rounded;
}else{
    daysBetweenOutput.textContent = "It hasn't been a day yet";
}
// let rounded = Math.round(daysBetween);
// daysBetweenOutput.textContent= rounded;