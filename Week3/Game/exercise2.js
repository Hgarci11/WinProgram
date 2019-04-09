/*
var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var findPlayers = players.find(function(players){
    return players.firstName == "Mike";
}); 

var rbPlayers = players.filter(function(players){
    return players.postion == "RB";
});

var playersLastName = players.filter(function(players){
    return players.lastName;
});

var runningBacks = rbPlayers.filter(function(players){
    return players.touchdowns > 5;
}).map(function(players){
    return players.firstName + '' + players.lastName;
})

*/

var teacher = {
	name: 'Shane',
	speak: function() {
		
		//Maybe you're fetching data from an API, or getting user input
		setTimeout(function(){
			console.log('later my name is ' + this.name);
		},1000)
		
		//Runs immediately
		console.log('Now my name is ' + this.name);
	}
}

teacher.speak();
