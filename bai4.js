const players = [
{name:"Messi",years:18,salary:100},
{name:"Ronaldo",years:20,salary:95},
{name:"Neymar",years:12,salary:90},
{name:"Mbappe",years:7,salary:85},
{name:"Haaland",years:5,salary:80},
{name:"Modric",years:22,salary:70},
{name:"Benzema",years:19,salary:75}
];

const analyzeSalary = (minYears, teamPlayers) => {

const filtered = teamPlayers.filter(player => player.years >= minYears);

if(filtered.length === 0){
return {
totalSalary: 0,
highestPaid: null,
lowestPaid: null
};
}

const totalSalary = filtered.reduce((sum,player)=> sum + player.salary,0);

let highestPaid = filtered[0];
let lowestPaid = filtered[0];

filtered.forEach(player => {

if(player.salary > highestPaid.salary){
highestPaid = player;
}

if(player.salary < lowestPaid.salary){
lowestPaid = player;
}

});

return {
totalSalary,
highestPaid,
lowestPaid
};

};

console.log(analyzeSalary(10, players));

console.log(analyzeSalary(30, players));