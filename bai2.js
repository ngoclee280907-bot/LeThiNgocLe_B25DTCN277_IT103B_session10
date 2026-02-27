const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35
};

const addPerformanceScore = (player) => {

  const performance =
  ((player.goals + player.assists) / player.matchesPlayed).toFixed(2);

  player.performancePerMatch = Number(performance);

  if(player.performancePerMatch >= 1.0){
    player.isKeyPlayer = true;
  }else{
    player.isKeyPlayer = false;
  }

  console.log(player);

};

addPerformanceScore(player);