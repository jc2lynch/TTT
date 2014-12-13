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
	// console.log(self.Board.fullArray())
	self.newGame= newGame;

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
		
		winner();	

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
				alert("X is the winner");
			    // return "X is the winner";
				}
			// console.log($index);
		else if ((self.Board[0]==="O" && self.Board[1]==="O" && self.Board[2]==="O")||
			(self.Board[3]==="O" && self.Board[4]==="O" && self.Board[5]==="O")||
			(self.Board[6]==="O" && self.Board[7]==="O" && self.Board[8]==="O")||
			(self.Board[0]==="O" && self.Board[3]==="O" && self.Board[6]==="O")||
			(self.Board[1]==="O" && self.Board[4]==="O" && self.Board[7]==="O")||
			(self.Board[2]==="O" && self.Board[5]==="O" && self.Board[8]==="O")||
			(self.Board[0]==="O" && self.Board[4]==="O" && self.Board[8]==="O")||
			(self.Board[2]==="O" && self.Board[4]==="O" && self.Board[6]==="O")){
				alert("O is the winner");
				// return "O is the winner";

				}
			// else (self.board[0]!= null && self.board[1]!= null && self.board[0]!= null && self.board[2]!= null && self.board[3]!= null && self.board[4]!= null &&
			// self.board[5]!= null && self.board[6]!= null && self.board[7]!= null && self.board[8])
			// 	console.log("cat's game")




	}
function newGame() {
   self.Board = new Array (9);

}







}
// }());



//need a function to look for the winner

//need a function for clear board
//need a function fpr start game

//make a constructor function for both of the players
//need to figure out how to 