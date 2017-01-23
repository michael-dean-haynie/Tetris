var Config = {
	mainLoopSpeed: 100,
	canvas : null,
	ctx : null,
	pointSize: 30,
	boardWidth: 10,
	boardHeight: 24,
	fillColors: ["red", "blue", "green", "orange", "brown", "purple", "yellow"],
	strokeColor: "black",
	lineWidth: 1

}

// Initialize
Config.canvas = document.getElementById("canvas");
Config.ctx = Config.canvas.getContext("2d");
Config.ctx.lineWidth = Config.lineWidth;
Config.canvas.width = Config.pointSize * Config.boardWidth;
Config.canvas.height = Config.pointSize * Config.boardHeight;
