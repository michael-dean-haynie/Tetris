function addBlock(){
	var shapes = ["L", "T", "I", "O", "Z"];
	var xs = Math.floor(Config.boardWidth/2); // x start offset
	var ys = Config.boardHeight - 3; // y start offset
	var shapesToStartingHandlePoints = {L:{x:xs,y:ys},T:{x:xs,y:ys},I:{x:xs,y:ys},O:{x:xs,y:ys-1},Z:{x:xs,y:ys-1}};

	var shape = shapes[Math.floor(Math.random()*shapes.length)];
	var newActiveBlockIndex = GS.blocks.length;
	var color = Config.fillColors[Math.floor(Math.random()*Config.fillColors.length)];

	var newBlock = {
		index: newActiveBlockIndex,
		shape: shape,
		handlePoint: shapesToStartingHandlePoints[shape],
		position: 0,
		color: color
	}

	GS.blocks.push(newBlock);
	GS.activeBlockIndex = newActiveBlockIndex;
}

function getPointsForBlock(block){
	var hp = block.handlePoint;
	switch (block.shape){
		case "L":
			switch (block.position){
				case 0:
					return [hp,{x:hp.x,y:hp.y+1},{x:hp.x,y:hp.y-1},{x:hp.x+1,y:hp.y-1}];break;
				case 1:
					return [hp,{x:hp.x+1,y:hp.y},{x:hp.x-1,y:hp.y},{x:hp.x-1,y:hp.y-1}];break;
				case 2:
					return [hp,{x:hp.x,y:hp.y+1},{x:hp.x,y:hp.y-1},{x:hp.x-1,y:hp.y+1}];break;
				case 3:
					return [hp,{x:hp.x+1,y:hp.y},{x:hp.x-1,y:hp.y},{x:hp.x+1,y:hp.y+1}];break;
			}break;

		case "T":
			switch (block.position){
				case 0:
					return [hp,{x:hp.x,y:hp.y+1},{x:hp.x+1,y:hp.y},{x:hp.x,y:hp.y-1}];break;
				case 1:
					return [hp,{x:hp.x-1,y:hp.y},{x:hp.x,y:hp.y-1},{x:hp.x+1,y:hp.y}];break;
				case 2:
					return [hp,{x:hp.x,y:hp.y+1},{x:hp.x-1,y:hp.y},{x:hp.x,y:hp.y-1}];break;
				case 3:
					return [hp,{x:hp.x-1,y:hp.y},{x:hp.x,y:hp.y+1},{x:hp.x+1,y:hp.y}];break;
			}break;

		case "I":
			switch (block.position){
				case 0:
				case 2:
					return [hp,{x:hp.x,y:hp.y+2},{x:hp.x,y:hp.y+1},{x:hp.x,y:hp.y-1}];break;
				case 1:
				case 3:
					return [hp,{x:hp.x+2,y:hp.y},{x:hp.x+1,y:hp.y},{x:hp.x-1,y:hp.y}];break;
			}break;

		case "O":
			switch (block.position){
				case 0:
				case 1:
				case 2:
				case 3:
					return [hp,{x:hp.x,y:hp.y+1},{x:hp.x+1,y:hp.y+1},{x:hp.x+1,y:hp.y}];break;
			}break;

			case "Z":
				switch (block.position){
					case 0:
					case 2:
						return [hp,{x:hp.x-1,y:hp.y+1},{x:hp.x,y:hp.y+1},{x:hp.x+1,y:hp.y}];break;
					case 1:
					case 3:
						return [hp,{x:hp.x+1,y:hp.y-1},{x:hp.x,y:hp.y+1},{x:hp.x+1,y:hp.y}];break;
			}break;
	}
}

function checkNewPoints(points){ // returns true if it's good, false if it's not.
	for (var np = 0; np < points.length; np++){ // np => new point index
		var newPoint = points[np];

		// Check that none have y < 0
		if (newPoint.y < 0){return false;}

		// Check that none have x < 0
		if (newPoint.x < 0){return false;}

		// Check that none have x > Config.boardWidth - 1
		if (newPoint.x > (Config.boardWidth - 1)){return false;}

		// Check against other points of inactive blocks
		for(var b = 0; b < GS.blocks.length; b++){ // b => blocks index
			if(b != GS.activeBlockIndex){
				var blockPoints = getPointsForBlock(GS.blocks[b]);
				for (var bp = 0; bp < blockPoints.length; bp++){ // bp => block points index
					var blockPoint = blockPoints[bp];
					if(newPoint.x == blockPoint.x && newPoint.y == blockPoint.y){return false;}
				}
			}
		}
	}

	// return true if noting nothing above triggered return
	return true;
}

function tryDropActiveBlock(){
	GS.disableUserControl = true;
	var block = GS.blocks[GS.activeBlockIndex];

	block.handlePoint.y--;
	var newPoints = getPointsForBlock(block);
	var doesWork = checkNewPoints(newPoints);
	block.handlePoint.y++;

	GS.disableUserControl = false;
	return doesWork;
}

function checkIsGameOver(){
	var blocks = GS.blocks;
	for(var i = 0; i < blocks.length; i++){
		if (i != GS.activeBlockIndex){
			var points = getPointsForBlock(blocks[i]);
			for(var e = 0; e < points.length; e++){
				var p = points[e];
				if(p.y > (Config.boardHeight - 4 - 1)){ return true;}
			}
		}
	}
	return false;
}

// function checkForFullRows(){
// 	// Iterate through non active points and increment the row count for the row that the point is in (y) then see which rows are full


// 	// Build up row counts
// 	var rowCounts = Array(Config.boardHeight - 4); // initialize with as many elements as needed
// 	var rowcounts = rowcounts.fill(0); // set elements to 0

// 	var blocks = GS.blocks;
// 	for (var bi = 0; bi < blocks.length; bi++){ // bi => blocks index
// 		if (bi != Config.activeBlockIndex){
// 			var b = blocks[bi]; // b => block
// 			var points = getPointsForBlock(b);
// 			for (var pi = 0; pi < points.length; pi++){ // pi -> points index
// 				var p = points[p] // p => point
// 				rowCounts[p.y]++;
// 			}
// 		}
// 	}


// 	// remove rows that are full
// 	var removedRows = [];
// 	for (var rci = 0; rci < rowCounts.length; rci++){ // rci => rowCount index
// 		var c = rowCounts[rci]; // c => count
// 		if(c === Config.boardWidth){
// 			removeRow(rci);
// 			addPoints(Config.boardWidth);
// 			removedRows.push(rci);
// 		}
// 	}

// 	// scrunch rest of rows down
// 	removedRows.sort();
// 	for (var rri = 0; rri < removedRows.length; rri++){ // rri => removedRows index
// 		var r = removedRows[rri]; // r => row
		
// 	}
// }