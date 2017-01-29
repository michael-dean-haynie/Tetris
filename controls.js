function checkKey(e) {

  e = e || window.event;
  s = "?";

  if (e.keyCode == '38') { // Up
    s = "u";
  }
  else if (e.keyCode == '40') { // Down
    s = "d";
  }
  else if (e.keyCode == '37') { // Left
    s = "l";
  }
  else if (e.keyCode == '39') { // Right
    s = "r";
  }

  if(["u", "d", "l", "r"].indexOf(s) > -1){
  	Config.board.playerMove(s);
  }
  // console.log(s);
}
