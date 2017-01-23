function checkKey(e) {

  e = e || window.event;
  s = "Some other key";

  if (e.keyCode == '38') { // Up
    s = "Up";
    rotateBlock();

  }
  else if (e.keyCode == '40') { // Down
    s = "Down";
    moveBlock("d");
  }
  else if (e.keyCode == '37') { // Left
    s = "Left";
    moveBlock("l");
  }
  else if (e.keyCode == '39') { // Right
    s = "Right";
    moveBlock("r");
  }

  console.log(s);
}

function rotateBlock(){
  // console.log("Entering rotateBlock()");
  if (!GS.disableUserControl){
    var block = GS.blocks[GS.activeBlockIndex];
    var oldPosition = block.position;

    clearBlock(block);

    block.position = (block.position === 3 ? 0 : block.position + 1);
    var newPoints = getPointsForBlock(block);
    var doesWork = checkNewPoints(newPoints);
    if(!doesWork){
      block.position = oldPosition;
    }

    paintBlock(block);
  }
}

function moveBlock(direction){

  if (!GS.disableUserControl){
    var block = GS.blocks[GS.activeBlockIndex];
    var oldX = block.handlePoint.x;
    var oldY = block.handlePoint.y;

    clearBlock(block);

    // determine direction
    if(direction === "r"){
      block.handlePoint.x++;
    } else if (direction === "l"){
      block.handlePoint.x--;
    } else if (direction === "d"){
      block.handlePoint.y--;
    }

    // do checks
    var newPoints = getPointsForBlock(block);
    var doesWork = checkNewPoints(newPoints);
    if(!doesWork){
      // revert to old based on what direction
      if(direction === "r" || direction === "l"){
        block.handlePoint.x = oldX;
      } else if (direction === "d"){
        block.handlePoint.y = oldY;
      }
    }

    paintBlock(block);
  }
}