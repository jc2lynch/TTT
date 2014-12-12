angular
	.module('tictactoeApp')
	.controller('TictactoeController',TictactoeController);

TictactoeController.$inject = ['TictactoeBoard'];

function TictactoeController(TictactoeBoard){
		var numTiles= 9;


	this.Board = new TictactoeBoard( numTiles );

	this.name = "Chris";
};


//will need to use ng-bind somewhere in this application

//need a function to look for the winner
//potentially set this up by assigning the boxes marked x with a 1 and the boxes marked O with a 5

//need a function to create a player object

//need a function to toggle between players 

//need a function for clear board
//need a function fpr start game

//make a constructor function for both of the players
//need to figure out how to 