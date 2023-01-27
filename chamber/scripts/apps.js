const date = new Date(document.lastModified);
document.getElementById("date").innerHTML = date; 

document.getElementById("theCurrentYear").innerHTML = new
   Date().getFullYear();



const currentDate = new Date();
document.querySelector("#current-date").textContent = Intl.DateTimeFormat("en-US", {
	dateStyle: "full"}).format(currentDate);


