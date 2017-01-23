function paintPoint (x, y, color){
	var cx = Config.pointSize * x; // canvas x offset
	var cy = ((Config.boardHeight - 1) - y) * Config.pointSize; // canvas y offset
	Config.ctx.fillStyle = color;

	// console.log("cx: " + cx);
	// console.log("cy: " + cy);

	Config.ctx.fillRect(cx, cy, Config.pointSize, Config.pointSize);
	Config.ctx.strokeRect(cx+1, cy+1, Config.pointSize-2, Config.pointSize-2);
}

function clearPoint(x, y){
	var cx = Config.pointSize * x; // canvas x offset
	var cy = ((Config.boardHeight - 1) - y) * Config.pointSize; // canvas y offset

	Config.ctx.clearRect(cx, cy, Config.pointSize, Config.pointSize);
}

function paintBlock(block){
	var points = getPointsForBlock(block);
	for(var i = 0; i < points.length; i++){
		var p = points[i] // p => point
		paintPoint(p.x, p.y, block.color);
	}
}

function clearBoard(){
	Config.ctx.clearRect(0, 0, Config.canvas.width, Config.canvas.height);
}

function paintBoard (){
	console.log("Entering paintboard()");
	clearBoard();

	for(var i = 0; i < GS.blocks.length; i++){
		paintBlock(GS.blocks[i]);
	}
}