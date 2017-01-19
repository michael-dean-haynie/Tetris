function main(){
	GS.mainCycleCount++;
	console.log("Entering main() [Cycle="+GS.mainCycleCount+"]");

	if(GS.gameIsOver === false){
		if(GS.activeBlockIndex === null){
			addBlock();
		}

		var doesWork = tryDropActiveBlock();
		if (doesWork){
			GS.blocks[GS.activeBlockIndex].y--;
		} else {
			GS.activeBlockIndex = null;
		}

		// Paint board


	} else {
		clearInterval(GS.mainLoopInterval);
		// display game over and points
	}
	// console.log("GS.blocks.length = " + GS.blocks.length);
	// console.log("ActiveBlockHandlePoint:");
	// console.log(GS.blocks[GS.activeBlockIndex].handlePoint);
	console.log("Exiting main() [Cycle="+GS.mainCycleCount+"]");
}