const barcelonaPlayers2019 = {
    coachName: "Pep Guardiola",
    internationalChampioships: 3,
    players: [
        { id: 1, name: "Marc-André ter Stegen", position: "Goalkeeper", number: 1, age: 27, description: "Reliable goalkeeper known for his reflexes and ball distribution." },
        { id: 2, name: "Neto", position: "Goalkeeper", number: 13, age: 30, description: "Experienced backup goalkeeper with solid shot-stopping skills." },
      
        { id: 3, name: "Gerard Piqué", position: "Defender", number: 3, age: 32, description: "Veteran center-back, strong in aerial duels and leadership." },
        { id: 4, name: "Clément Lenglet", position: "Defender", number: 15, age: 24, description: "Left-footed center-back with great positioning and passing ability." },
        { id: 5, name: "Samuel Umtiti", position: "Defender", number: 23, age: 25, description: "Physical and aggressive defender, but struggled with injuries." },
        { id: 6, name: "Jean-Clair Todibo", position: "Defender", number: 6, age: 19, description: "Young, promising center-back with good ball-playing skills." },
        { id: 7, name: "Jordi Alba", position: "Defender", number: 18, age: 30, description: "Fast left-back known for attacking runs and link-up play with Messi." },
        { id: 8, name: "Junior Firpo", position: "Defender", number: 24, age: 23, description: "Attacking left-back brought in to provide depth for Jordi Alba." },
        { id: 9, name: "Sergi Roberto", position: "Defender", number: 20, age: 27, description: "Versatile player who can operate as a right-back or midfielder." },
        { id: 10, name: "Nélson Semedo", position: "Defender", number: 2, age: 25, description: "Pacy right-back with good defensive and attacking attributes." },
      
        { id: 11, name: "Sergio Busquets", position: "Midfielder", number: 5, age: 31, description: "Defensive midfielder known for his vision and composure." },
        { id: 12, name: "Frenkie de Jong", position: "Midfielder", number: 21, age: 22, description: "Dynamic midfielder with excellent dribbling and passing." },
        { id: 13, name: "Arthur Melo", position: "Midfielder", number: 8, age: 23, description: "Brazilian playmaker with great ball control and passing." },
        { id: 14, name: "Ivan Rakitić", position: "Midfielder", number: 4, age: 31, description: "Box-to-box midfielder with strong work rate and shooting ability." },
        { id: 15, name: "Arturo Vidal", position: "Midfielder", number: 22, age: 32, description: "Aggressive and energetic midfielder with a strong defensive presence." },
        { id: 16, name: "Carles Aleñá", position: "Midfielder", number: 19, age: 21, description: "La Masia product with good technical skills and passing." },
        { id: 17, name: "Riqui Puig", position: "Midfielder", number: 28, age: 20, description: "Talented young midfielder known for his dribbling and creativity." },
      
        { id: 18, name: "Lionel Messi", position: "Forward", number: 10, age: 32, description: "Club legend and world-class forward known for his dribbling and finishing." },
        { id: 19, name: "Luis Suárez", position: "Forward", number: 9, age: 32, description: "Clinical striker with great finishing and link-up play." },
        { id: 20, name: "Antoine Griezmann", position: "Forward", number: 17, age: 28, description: "Versatile forward with strong positioning and technical ability." },
        { id: 21, name: "Ousmane Dembélé", position: "Forward", number: 11, age: 22, description: "Fast and skillful winger, but suffered from frequent injuries." },
        { id: 22, name: "Ansu Fati", position: "Forward", number: 31, age: 17, description: "Young prodigy with excellent dribbling and goal-scoring instincts." },
        { id: 23, name: "Carles Pérez", position: "Forward", number: 27, age: 21, description: "Academy graduate with a strong shot and direct playing style." }
      ]
};
  
 
const playerCards = document.getElementById('PlayerCards');
const filterOption = document.getElementById('filterByPosition');
const coachNameE = document.getElementById('coachName');
const ich = document.getElementById('internationalChampionships');

//destructor
const {coachName, internationalChampioships, players} = barcelonaPlayers2019;
coachNameE.innerText = `Coach: ${coachName}`;
ich.innerText = `International Championships: ${internationalChampioships}`;

filterOption.addEventListener("change",(e)=>{
    playerCards.innerHTML="";

    if(e.target.value === 'Team')
    {
        playerCards.innerHTML+=getPlayerCards();
        return;
    }

    playerCards.innerHTML+= getPlayerCards(players
        .filter(p => p.position === e.target.value));
});

playerCards.innerHTML+= getPlayerCards();

function getPlayerCards(playersList = players)
{
    return `${playersList.map(player => `<div class="card" style="width: 18rem; margin: 10px;">
    <div class="card-body">
        <h5 class="card-title">${player.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${player.position} #${player.number}</h6>
        <p class="card-text">${player.description}</p>
    </div>
</div>`).join("")}`;
}

function renderCards(filterOption)
{
    const players = barcelonaPlayers2019.filter(player => player.position === filterOption);
    playerCards.innerHTML+= getPlayerCards(players);
}
