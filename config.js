var Config = {
	// Board
	boardWidth: 10,
	boardHeight: 20,
	pointSize: 30,
	boardStagingHeight: 4,
	boardStagingColor: "LightGrey",
	boardPlayingColor: "white",

	// Canvas
	canvas: null,
	ctx: null,
	lineWidth: 1,

	// Constants
	bo: blockOffsets,
	shapes: ["I", "J", "L", "O", "S", "T", "Z"],
	positions: [0,1,2,3],
	points: [0,1,2,3],
	colors: ["red", "blue", "green", "orange", "brown", "purple", "yellow"]


}

// Initialize Canvas
Config.canvas = document.getElementById("canvas");
Config.ctx = Config.canvas.getContext("2d");
Config.ctx.lineWidth = Config.lineWidth;
Config.canvas.width = Config.pointSize * Config.boardWidth;
Config.canvas.height = Config.pointSize * (Config.boardHeight + Config.boardStagingHeight);