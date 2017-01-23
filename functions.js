function addBlock(){
	var shapes = ["L", "T", "I", "O", "Z"];
	var shapesToStartingHandlePoints = {L:{x:3,y:21},T:{x:3,y:21},I:{x:3,y:21},O:{x:3,y:20},Z:{x:4,y:20}};
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

		// Check that none have x > 9
		if (newPoint.x > 9){return false;}

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
				if(p.y > 19){ return true;}
			}
		}
	}
	return false;
}
