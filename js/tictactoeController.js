//controller is where you define all of our dependencies
//its pretty much where all the logic goes
//Controllers are where we define our apps behavior by defining functions an values**
//all of the will go here
//

angular
	.module('tictactoeApp');
	.controller('tictactoeController',tictactoeControllerFunc);

//will need to use ng-bind somewhere in this application

//need a function to look for the winner
//potentially set this up by assigning the boxes marked x with a 1 and the boxes marked O with a 5

//need a function to change between unselected tiles, selected and x and 

//need a function to toggle between players 