for(let i = 50; i > 19; i--){
	if(!(i%3)){
		console.log(i);
	}
}

for(let i = 0 i < 0; i++)
{
	console.log("dont do this");
}

const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for(let i = 0; i < classmates.length; i++){
	if(!(i%2)){
		console.log(classmates[i]);
	}
}

const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},
{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},
{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const glutenFree = [];
for(let i = 0; i < menu.length; i++){
	for(let prop in menu[i]){
		if(menu[i][prop] === true){
			glutenFree.push(menu[i]);
		}
	}
}

const league = [
{name: "NFL", players: [
	{name: "Tom Brady", goat: false}, 
	{name: "Walter Payton", goat: true}]
}, 
{name: "NBA", players: [
	{name: "Michael Jordan", goat: true}, 
	{name: "Lebron James", goat: false}]
},
{name: "MLB", players: [
	{name: "Babe Ruth", goat: true}, 
	{name: "Alex Rodriguez", goat: false}]
}];

const goat = [];
for(let i = 0; i < league.length; i++){
	for(let j = 0; j < league[i].players.length; j++){
		if(league[i].players[j].goat){
			goat.push(league[i].players[j]);
		}
	}
}

