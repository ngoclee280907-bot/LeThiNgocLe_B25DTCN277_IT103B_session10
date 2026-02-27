const players = [
{name:"Messi", position:"Forward", age:36, goals:25, assists:15, matches:34, yellowCards:2},
{name:"Ronaldo", position:"Forward", age:39, goals:30, assists:10, matches:38, yellowCards:4},
{name:"Neymar", position:"Forward", age:32, goals:18, assists:20, matches:32, yellowCards:3},
{name:"De Bruyne", position:"Midfielder", age:33, goals:8, assists:25, matches:35, yellowCards:1},
{name:"Kante", position:"Midfielder", age:34, goals:2, assists:5, matches:36, yellowCards:0},
{name:"Van Dijk", position:"Defender", age:33, goals:5, assists:3, matches:33, yellowCards:2},
{name:"Alisson", position:"Goalkeeper", age:32, goals:0, assists:1, matches:37, yellowCards:0}
];


function generateRankingReport(minMatches, players){

let filtered = players.filter(function(p){
return p.matches >= minMatches;
});


let calculated = filtered.map(function(p){

let performanceScore = ((p.goals + p.assists) / p.matches).toFixed(2);

let efficiencyScore =
(performanceScore - (p.yellowCards / p.matches)*10).toFixed(2);

return {
name: p.name,
goals: p.goals,
performanceScore: Number(performanceScore),
efficiencyScore: Number(efficiencyScore)
};

});


calculated.sort(function(a,b){

if(b.efficiencyScore !== a.efficiencyScore){
return b.efficiencyScore - a.efficiencyScore;
}

if(b.performanceScore !== a.performanceScore){
return b.performanceScore - a.performanceScore;
}

return b.goals - a.goals;

});


console.log("XẾP HẠNG ĐỘI BÓNG");

calculated.forEach(function(p,index){

console.log(
(index+1)+". "
+ p.name
+ " - Efficiency: "
+ p.efficiencyScore
+ " | Performance: "
+ p.performanceScore
+ " | Goals: "
+ p.goals
);

});


console.log("Tổng số cầu thủ xếp hạng:", calculated.length);


if(calculated.length > 0){
console.log("Cầu thủ xuất sắc nhất:", calculated[0].name);
}


let sum = 0;
let count = 0;

calculated.forEach(function(p,index){

if(index < 3){
sum += p.efficiencyScore;
count++;
}

});

let average = sum / count;
console.log("Trung bình efficiency top 3:", average);

}


generateRankingReport(30,players);