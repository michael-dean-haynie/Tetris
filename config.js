var Config = {
	// Board
	boardWidth: 10,
	boardHeight: 20,
	pointSize: 30,

	//Canvas
	canvas: null,
	ctx: null,



}

// Initialize Canvas
Config.canvas = document.getElementById("canvas");
Config.ctx = Config.canvas.getContext("2d");
Config.ctx.lineWidth = Config.lineWidth;
Config.canvas.width = Config.pointSize * Config.boardWidth;
Config.canvas.height = Config.pointSize * Config.boardHeight;