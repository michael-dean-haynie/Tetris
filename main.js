function main(){
	// GS.gameIsOver = true;
	GS.mainCycleCount++;
	// console.log("Entering main() [Cycle="+GS.mainCycleCount+"]");

	if(!GS.gameIsOver){
		if(GS.activeBlockIndex === null){
			addBlock();
		}

		var doesWork = tryDropActiveBlock();
		if (doesWork){
			GS.blocks[GS.activeBlockIndex].handlePoint.y--;
		} else {
			GS.activeBlockIndex = null;
		}

		// checkForFullRows();

		paintBoard();

		GS.gameIsOver = checkIsGameOver();

	} else {
		clearInterval(GS.mainLoopInterval);
		console.log("Game Over");
		// display game over and points
	}
}