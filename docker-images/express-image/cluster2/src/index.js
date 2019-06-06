var chance = require('chance');
var ch = new chance();
 
var express = require('express');
var application = express();
 
application.get('/', function(req, res){
	 res.send(generateGame());
});

application.listen(3000, function(){
	console.log('Accepting HTTP request on port 3000.');
});

function generateGame(){
	var gamesTypes = new Array("adventure", "action", "rpg", "mmorpg", "fps");
	var nbGames = ch.integer({
		min: 10,
		max: 30
	});
	console.log(nbGames);
	
	var games = [];
	for(var i = 0; i < nbGames; i++){
		var type = ch.integer({
			min: 0,
			max: 4
		});
		games.push({
			game: "Cluster 2",
			type: gamesTypes[type]
		});
	};
	console.log(games);
	return games; 
}


