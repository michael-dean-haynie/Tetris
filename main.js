function main(){
	GS.mainCycleCount++;
	console.log("Entering main() [Cycle="+GS.mainCycleCount+"]");

	if(GS.gameIsOver === false){
		if(GS.activeBlockIndex === null){
			addBlock();
		}

		tryMoveActiveBlock();


	} else {
		clearInterval(GS.mainLoopInterval);
		// display game over and points
	}
	console.log("Exiting main() [Cycle="+GS.mainCycleCount+"]");
}