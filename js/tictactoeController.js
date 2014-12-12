// function(){
angular
	.module('tictactoeApp')
	.controller('TictactoeController',TictactoeController);


function TictactoeController(){
var self = this;

	//clickBox changes the box 
	self.clickBox= clickBox;
	//this is what created the board
	self.Board = new Array ( 9 );
	//turncounter
	self.turncounter= 1;
	self.winner = "";

	function clickBox($index){
		//this is the condition
		if (self.Board[$index]==undefined){
			if (self.turncounter==1){
				self.Board[$index]="X";
				self.turncounter=2;	
			}
			else{ 
				self.Board[$index]="O";
				self.turncounter=1;
			}
		}
		
		return winner();	

	}
	//this will determine the winner 
	function winner(){
		if ((self.Board[0]==="X" && self.Board[1]==="X" && self.Board[2]==="X")||
			(self.Board[3]==="X" && self.Board[4]==="X" && self.Board[5]==="X")||
			(self.Board[6]==="X" && self.Board[7]==="X" && self.Board[8]==="X")||
			(self.Board[0]==="X" && self.Board[3]==="X" && self.Board[6]==="X")||
			(self.Board[1]==="X" && self.Board[4]==="X" && self.Board[7]==="X")||
			(self.Board[2]==="X" && self.Board[5]==="X" && self.Board[8]==="X")||
			(self.Board[0]==="X" && self.Board[4]==="X" && self.Board[8]==="X")||
			(self.Board[2]==="X" && self.Board[4]==="X" && self.Board[6]==="X")){
				console.log("X is the winner");
			    return "X is the winner";
				}
			// console.log($index);
		if ((self.Board[0]==="O" && self.Board[1]==="O" && self.Board[2]==="O")||
			(self.Board[3]==="O" && self.Board[4]==="O" && self.Board[5]==="O")||
			(self.Board[6]==="O" && self.Board[7]==="O" && self.Board[8]==="O")||
			(self.Board[0]==="O" && self.Board[3]==="O" && self.Board[6]==="O")||
			(self.Board[1]==="O" && self.Board[4]==="O" && self.Board[7]==="O")||
			(self.Board[2]==="O" && self.Board[5]==="O" && self.Board[8]==="O")||
			(self.Board[0]==="O" && self.Board[4]==="O" && self.Board[8]==="O")||
			(self.Board[2]==="O" && self.Board[4]==="O" && self.Board[6]==="O")){
				console.log("O is the winner");
				return "O is the winner";

				}


	}






}
// }());



//need a function to look for the winner

//need a function for clear board
//need a function fpr start game

//make a constructor function for both of the players
//need to figure out how to 