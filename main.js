function main(){
	GS.mainCycleCount++;
	// console.log("Entering main() [Cycle="+GS.mainCycleCount+"]");

	if(GS.gameIsOver === true){
		// End game, show score, play again?
	}

	if(GS.activeBlockIndex === null){
		addBlock();
		// console.log(GS.blocks);
	}

	// move block


	// console.log("Exiting main() [Cycle="+GS.mainCycleCount+"]");
}