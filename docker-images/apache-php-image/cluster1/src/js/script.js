(function(){
	console.log("test");
	function loadGames(){
		$.getJSON("/api/games/", function(data){
			console.log("yolo");
			var message = "Nobody is here";
			if(data.length > 0){
				console.log("game");
				message = "Un nouveau jeu : " + data[0].game + " de type : " + data[0].type;
			}
			$(".game").text(message);
		});
	};
	
	loadGames();
	setInterval( loadGames, 1000);
})(jQuery);
