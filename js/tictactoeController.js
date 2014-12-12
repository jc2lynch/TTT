angular
	.module('tictactoeApp')
	.controller('TictactoeController',TictactoeController);


function TictactoeController(){
var self = this;


	self.clickBox= clickBox;
	self.Board = new Array ( 9 );
	self.turncounter= 1;

	function clickBox($index){
		//this is the condition
		if (self.Board[$index]===undefined){
			if (self.turncounter===1){
				self.Board[$index]="X";
				self.turncounter=2;
			}
			else{ 
				self.Board[$index]="O";
				self.turncounter=1;
			}

		}
	}



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