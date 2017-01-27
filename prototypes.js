function Point(x, y, active = true){
	this.x = x;
	this.y = y;
	this.active = active;

	this.clone = function(){
		return new Point(this.x, this.y, this.active);
	}

	this.applyOffset = function (x, y){
		return new Point(x+this.x, y+this.y, this.active);
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
		.map(x => Config.bo[shape][position][x].clone().applyOffset(rp.x, rp.y)); // getting point from configured block offsed descriptions and adding offset from rp (reference point)
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

	this.addBlock = function(){
		var s = Config.shapes[Math.floor(Math.random()*Config.shapes.length)]; // shape
		var p = Config.positions[Math.floor(Math.random()*Config.positions.length)]; // position
		var c = Config.colors[Math.floor(Math.random()*Config.colors.length)]; // color
		var rp = new Point(Math.floor(Config.boardWidth/2), Config.boardHeight + 2); // rp

		this.blocks.push(new Block(s, p, rp, c));
		this.activeBlockIndex = this.blocks.length - 1;
	}
}