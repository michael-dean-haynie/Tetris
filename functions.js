function addBlock(){
	var shapes = ["L", "T", "I", "O", "Z"];
	var shapesToStartingHandlePoints = {L:{x:3,y:21},T:{x:3,y:21},I:{x:3,y:21},O:{x:3,y:20},Z:{x:4,y:20}};
	var shape = shapes[Math.floor(Math.random()*shapes.length)];
	var newActiveBlockIndex = GS.blocks.length;

	var newBlock = {
		index: newActiveBlockIndex,
		shape: shape,
		handlePoint: shapesToStartingHandlePoints[shape],
		possition: 0
	}

	GS.blocks.push(newBlock);
	GS.activeBlockIndex = newActiveBlockIndex;
}

function getPointsForBlock(block){
	var hp = block.handlePoint;
	switch (block.shape){
		case "L":
			switch (block.possition){
				case 0:
					return [hp,{x:hp.x,y:hp.y+1},{x:hp.x,y:hp.x-1},{x:hp.x+1,y:hp.y-1}];break;
				case 1:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 2:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 3:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
			}break;

		case "L":
			switch (block.possition){
				case 0:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;;break;
				case 1:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 2:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 3:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
			}break;

		case "L":
			switch (block.possition){
				case 0:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;;break;
				case 1:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 2:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 3:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
			}break;

		case "L":
			switch (block.possition){
				case 0:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;;break;
				case 1:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 2:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 3:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
			}break;

			case "L":
			switch (block.possition){
				case 0:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;;break;
				case 1:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 2:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
				case 3:
					return [hp,{x:0,y:0},{x:0,y:0},{x:0,y:0}];break;
			}break;
	}
}

function tryMoveActiveBlock(){
	var newPoints = GetNewPoints(GS.blocks[GS.ActiveBlockIndex], "drop");
	var doesWork = checkNewPoints(newPoints);

}

function GetNewPoints(block, moveType = "drop"){
	if(moveType === "drop"){

	} else if (moveType === "rotate"){

	}
}
