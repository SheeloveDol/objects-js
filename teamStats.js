const team = {
  _players: [ 
    {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
    {firstName: 'Dinho', lastName: 'Gaucho', age: 9},
    {firstName: 'Messi',lastName: 'Lionel', age: 6}
  ],
  _games: [
    {oppenent: 'Broncos', teamPoints: 42, opponnentPoints: 27},
    {oppenent: 'Juan De Fuca', teamPoints: 72, opponnentPoints: 10},
    {oppenent: 'Victoria', teamPoints: 36, opponnentPoints: 23},
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },

  //To add player to team
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    };
    return this._players.push(player);
  },

//To add games played
  addGame(oppName, teamPoints, oppPoints) {
    const game = {
      oppName,
      teamPoints,
      oppPoints
    };
    return this._games.push(game);
  }
};

//Adding the following players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Lesly', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players)

//Adding the folowing games

team.addGame('Nanaimo', 100, 80);
team.addGame('Sooke', 74, 15);
team.addGame('Campbell River', 47, 43);

console.log(team.games);