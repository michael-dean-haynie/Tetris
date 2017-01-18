function addBlock(){
	var shapes = ["L", "T", "I", "O", "Z"];
	var shape = shapes[Math.floor(Math.random()*shapes.length)];
	var newActiveBlockIndex = GS.blocks.length;

	var newBlock = {
		shape: shape,
		index: newActiveBlockIndex
	}

	GS.blocks.append(newBlock);
	GS.activeBlockIndex = newActiveBlockIndex;
}