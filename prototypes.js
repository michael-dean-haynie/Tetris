function Point(x, y, active = true){
	this.x = x;
	this.y = y;
	this.active = active;

	this.clone = function(){
		return new Point(this.x, this.y);
	}

	this.applyOffset = function (x, y){
		return new Point((x)+this.x, (y)+this.y);
	}

	this.getCtxOffset = function(){
		var cx = Config.pointSize * this.x; // canvas x offset
		var cy = (((Config.boardHeight + Config.boardStagingHeight) - 1) - this.y) * Config.pointSize; // canvas y offset
		return new Point(cx, cy);
	}

	this.paint = function(color){
		var o = this.getCtxOffset(); // o => offset
		Config.ctx.fillStyle = color;

		if (this.active === true){
			Config.ctx.fillRect(o.x, o.y, Config.pointSize, Config.pointSize);
			Config.ctx.strokeRect(o.x+1, o.y+1, Config.pointSize-2, Config.pointSize-2);
		}
	}

	this.erase = function(){
		var o = this.getCtxOffset();
		Config.ctx.fillStyle = (this.y < Config.boardHeight ? Config.boardPlayingColor : Config.boardStagingColor);
		Config.ctx.fillRect(o.x, o.y, Config.pointSize, Config.pointSize);
	}
}

function Block(shape, position, rp, color){

	this.shape = shape;
	this.position = position; // Positions start at zero (upright) and increment as they rotate 45 degrees clockwise.
	this.rp = rp; // rp => reference point
	this.points = Config.points.map(x => x) // just getting a copy of Config.Points
		.map(x => Config.bo[shape][position][x].clone().applyOffset(rp.x, rp.y)); // getting point from configured block offset descriptions and adding offset from rp (reference point)
	this.color = color;

	this.paint = function(){
		for (var pi = 0; pi < this.points.length; pi++){ // bi => this.points index
			this.points[pi].paint(this.color);
		}
	}

	this.erase = function(){
		for (var pi = 0; pi < this.points.length; pi++){ // bi => this.points index
			this.points[pi].erase();
		}
	}

	this.tryMove = function(dir, bb, abi){ // dir coresponds to arrows: u,d,l,r; bb => board.blocks; abi => activeBlockIndex

		// figure out what the new points would be
		ox = (dir == "l" ? -1 : dir == "r" ? 1 : 0);
		oy = (dir == "d" ? -1 : 0);

		var new_pos = this.position
		if (dir == "u"){
			new_pos = this.position == 3 ? 0 : this.position + 1;
		}

		var new_rp = this.rp.clone().applyOffset(ox, oy);
		var newPoints = Config.points.map(x => x) // just getting a copy of Config.Points
		.map(x => Config.bo[this.shape][new_pos][x].clone().applyOffset(new_rp.x, new_rp.y)); // getting point from configured block offset descriptions and adding offset from new_rp (new reference point)

		// Check that the new points are allowed
		for(var npi = 0; npi < newPoints.length; npi++){ // npi => newPoints index 
			var onp = newPoints[npi]; // onp => one new point

			// Check that it stays on the board
			if (onp.y < 0)                  { return false; }
			if (onp.x < 0)                  { return false; }
			if (onp.x >= Config.boardWidth) { return false };

			// Check against other blocks in board.blocks
			for (var bbi = 0; bbi < bb.length; bbi++){ // bb => function parameter "bb"; bbi => board.blocks index
				if (bbi != abi){ // abi => function parameter "abi"
					var obb = bb[bbi]; // obb => one board block
					for (var pi = 0; pi < obb.points.length; pi ++){ // pi => bb.points index
						var op = obb.points[pi]; // op => one point
						if (op.active == true){
							if(onp.x == op.x && onp.y == op.y) { return false; }
						}
					}
				}
			}
		}

		// Move block if this function hasn't returned false by now (then return true)
		this.erase();
		this.rp = new_rp;
		this.points = newPoints
		this.position = new_pos;
		this.paint();

		return true;
	}
}

function Board(){
	this.blocks = [];
	this.activeBlockIndex = null;
 
	this.paintBackground = function(){
		Config.ctx.fillStyle = Config.boardStagingColor;
		Config.ctx.fillRect(0, 0, Config.boardWidth * Config.pointSize, Config.boardStagingHeight * Config.pointSize);

		Config.ctx.fillStyle = Config.boardPlayingColor;
		Config.ctx.fillRect(0, Config.boardStagingHeight * Config.pointSize, Config.boardWidth * Config.pointSize, Config.boardheightStagingHeight * Config.pointSize);
	}

	this.paintBlocks = function(){
		for(var bi = 0; bi < this.blocks.length; bi++){
			b = this.blocks[bi];
			b.erase();
			b.paint();
		}
	}

	this.addBlock = function(){
		var s = Config.shapes[Math.floor(Math.random()*Config.shapes.length)]; // shape
		var p = Config.positions[Math.floor(Math.random()*Config.positions.length)]; // position
		var c = Config.colors[Math.floor(Math.random()*Config.colors.length)]; // color
		var rp = new Point(Math.floor(Config.boardWidth/2), Config.boardHeight + 2); // rp

		this.blocks.push(new Block(s, p, rp, c));
		this.activeBlockIndex = this.blocks.length - 1;
	}

	this.gameMove = function(){
		Config.movementLocked = true;

		var success = this.blocks[this.activeBlockIndex].tryMove("d", this.blocks, this.activeBlockIndex);
		if (!success){ this.activeBlockIndex = null; }

		Config.movementLocked = false;
	}

	this.playerMove = function(dir){ // dir => u,d,l,r
		if(!Config.movementLocked && this.activeBlockIndex != null){
			this.blocks[this.activeBlockIndex].tryMove(dir, this.blocks, this.activeBlockIndex);
		}
	}

	this.checkForFullRows = function(){

		// gather active points from non-active blocks into rows
		var rows = [];
		for (var i = 0; i < Config.boardHeight; i++) {rows[rows.length] = [];}

		for (var bi = 0; bi < this.blocks.length; bi++){
			if (bi != this.activeBlockIndex){
				b = this.blocks[bi];
				for(var pi = 0; pi < b.points.length; pi++){
					p = b.points[pi];
					if(p.active == true){
						var row = rows[p.y];
						row[row.length] = p;
					}
				}
			}
		}

		// move points down
		for (var ri = 0; ri < rows.length; ri++){
			var r = rows[ri];

			Config.debug.rowCounts[ri] = r.length;

			if (r.length == Config.boardWidth){
				// remove these points
				for(var i = 0; i < r.length; i++){
					p = r[i];
					p.active = false;
				}

				// add score points
				this.addScorePoints(Config.boardWidth);

				// shift higher rows down
				for(var i = ri+1; i < rows.length; i++){
					var points = rows[i];
					for (var pi = 0; pi < points.length; pi++){
						p = points[pi];
						p.erase();
						p.y--;
					}
				}
			}
		}

		// paint board
		this.paintBlocks();
	}

	this.addScorePoints = function(ammount){
		Config.score = Config.score + ammount

		var nss = Config.score.toString();
		var s = "0".repeat(8 - nss.length) + nss;

		var e = Config.scoreElement;
		e.textContent = s;
	}

	this.isGameOver = function(){
		for(var bi = 0; bi < this.blocks.length; bi++){
			if (bi != this.activeBlockIndex){
				var b = this.blocks[bi];
				for(var pi = 0; pi < b.points.length; pi++){
					var p = b.points[pi];
					if (p.active == true && p.y >= Config.boardHeight){ return true; }
				}
			}
		}

		return false;
	}

	this.gameOver = function(){
		clearInterval(Config.interval);
		var e = Config.gameOverElement;
		e.style.display = "block";
		s = (Config.boardHeight * Config.pointSize)/2;
		s = s.toString();
		s = s + "px";

		e.style.top = s;
	}
}