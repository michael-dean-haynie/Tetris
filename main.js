function main(){
	Config.cycleCount++;
	// console.log("Config.cycleCount: " + Config.cycleCount);

	if (Config.cycleCount === 1){ 
		Config.board = new Board();
		Config.board.paintBackground();
	} else {
		if (Config.board.isGameOver()){ 
			Config.board.gameOver(); return;
		}
	}

	if (Config.board.activeBlockIndex == null){ 
		Config.board.addBlock();
	}
	
	Config.board.gameMove();
	Config.board.checkForFullRows();
}