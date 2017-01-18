function addBlock(){
	var shapes = ["L", "T", "I", "O", "Z"];
	var shape = shapes[Math.floor(Math.random()*shapes.length)];
	var newActiveBlockIndex = GS.blocks.length;

	var newBlock = {
		index: newActiveBlockIndex,
		shape: shape,
		points: getStartingPoints(shape)
	}

	GS.blocks.push(newBlock);
	GS.activeBlockIndex = newActiveBlockIndex;
}

function getStartingPoints(shape){
	switch (shape){
		case "L":
			return [{x:3,y:22},{x:3,y:21},{x:3,y:20},{x:4,y:20}];
			break;

		case "T":
			return [{x:3,y:22},{x:3,y:21},{x:4,y:21},{x:3,y:20}];
			break;

		case "I":
			return [{x:3,y:23},{x:3,y:22},{x:3,y:21},{x:3,y:20}];
			break;

		case "O":
			return [{x:3,y:21},{x:4,y:21},{x:3,y:20},{x:4,y:20}];
			break;

		case "Z":
			return [{x:3,y:21},{x:4,y:21},{x:4,y:20},{x:5,y:20}];
			break;
	}
}