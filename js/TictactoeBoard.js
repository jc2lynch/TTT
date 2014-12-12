angular
	.module('tictactoeApp')
	.factory('TictactoeBoard', TictactoeBoard);

function TictactoeBoard(){

	var TILE_STATES = ['unselected-tile', 'X', 'O'];

	 TTTBoard = function( numTiles ){
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

	return TictactoeBoard;

//need a function that Checks for a winner. 

}
