const teamHistory = [
{
 name: "Messi",
 position: "Forward",
 nationality: "Argentina",
 seasons:{
  "2022-2023":{matches:34, goals:21, assists:12, yellowCards:3},
  "2023-2024":{matches:32, goals:25, assists:15, yellowCards:2},
  "2024-2025":{matches:28, goals:18, assists:14, yellowCards:1}
 }
},
{
 name: "Ronaldo",
 position:"Forward",
 nationality:"Portugal",
 seasons:{
  "2022-2023":{matches:38, goals:28, assists:5, yellowCards:3},
  "2023-2024":{matches:35, goals:30, assists:6, yellowCards:4},
  "2024-2025":{matches:30, goals:22, assists:7, yellowCards:3}
 }
}
];


function generatePlayerSeasonReport(playerName, teamHistory){

    let player = teamHistory.find(function(p){
        return p.name === playerName;
    });

    if(player === undefined){
        return "Không tìm thấy cầu thủ " + playerName;
    }

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;

    let bestSeason = null;
    let bestSeasonName = "";

    for(let season in player.seasons){

        let data = player.seasons[season];

        totalMatches += data.matches;
        totalGoals += data.goals;
        totalAssists += data.assists;
        totalYellowCards += data.yellowCards;

        if(bestSeason === null ||
           data.goals > bestSeason.goals ||
           (data.goals === bestSeason.goals &&
            data.assists > bestSeason.assists)){

            bestSeason = data;
            bestSeasonName = season;
        }
    }

    let avgGoals = (totalGoals / totalMatches).toFixed(2);
    let avgAssists = (totalAssists / totalMatches).toFixed(2);


    let report = {

        name: player.name,
        position: player.position,
        nationality: player.nationality,

        careerStats:{

            totalMatches: totalMatches,
            totalGoals: totalGoals,
            totalAssists: totalAssists,
            totalYellowCards: totalYellowCards,

            averageGoalsPerMatch: Number(avgGoals),
            averageAssistsPerMatch: Number(avgAssists),

            bestSeason:{
                season: bestSeasonName,
                goals: bestSeason.goals,
                assists: bestSeason.assists
            }

        }

    };

    return report;
}

console.log(generatePlayerSeasonReport("Messi", teamHistory));