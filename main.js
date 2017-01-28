function main(){
	Config.cycleCount++;
	// console.log("Config.cycleCount: " + Config.cycleCount);

	if (Config.cycleCount === 1){ 
		Config.board = new Board();
		Config.board.paintBackground();
	}

	if (Config.board.activeBlockIndex == null){ 
		Config.board.addBlock();
	} else {
		Config.board.takeMove();
	}




	if (Config.board.isGameOver()){ Config.board.gameOver();}
}