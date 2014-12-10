angular
// 
	.module('tictactoeApp')
	.factory('GameBoard', GameBoardFunc);

function GameBoardFunc(){

	var TILE_STATES = ['unselected-tile', 'X', 'O'];

	var GameBoard = function( numTiles){
		this.numTiles=numTiles;
		this.tiles= new Array (numTiles);

		this.toggleTile=toggleTile;
		this.getTileState= getTileState;
		this.clearBoard= clearBoard;

		function toggleTile( num ) {
			this.tiles[num] = (this.tiles[num] + 1) % TILE_STATES.length;
		}

		function getTileState( num ) {
			return TILE_STATES[this.tiles[num]];
		}

		function clearBoard() {
		
			for (var i=0; i<this.tiles.length; i++) {
				this.tiles[i] = 0;
			}
		
		}
	}

	return GameBoard;

//need a function that Checks for a winner. 

}
