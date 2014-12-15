// function(){
angular
	.module('tictactoeApp')
	.controller('TictactoeController',TictactoeController);

	var myDataRef = new Firebase('https://ticytac.firebaseio.com/');



function TictactoeController(){
var self = this;
var catsGame = catsGame

	//clickBox changes the box 
	self.clickBox= clickBox;
	//this is what created the board
	self.Board = new Array ( 9 );
	//turncounter allows to switch between x and O
	self.turncounter= 1;
	self.winner = "";
	// console.log(self.Board.fullArray())
	self.newGame= newGame;
	//need to run a click counter in order to set up my cats game
	self.catsGame= catsGame;
	self.clickCount =0;

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
			self.clickCount++;
			console.log(self.clickCount + " This is the click count")
		}
		
		winner();	

		if (self.clickCount === 9) {
			console.log("rt;soerig")

		}

	}
	//this will determine the winner 
	function winner(){
		if  ((self.Board[0]==="X" && self.Board[1]==="X" && self.Board[2]==="X")||
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

			
			


			function catsGame(){
			//two conditions need to be met
			// 1. there must be nine click met on the turn counter and 
			//2. none of the conditions in the winner functions may be met


			}

	}
//thsi creates a new game board  it can only be initiated after a winneris found
function newGame() {
   self.Board = new Array (9);

}







}
// }());





