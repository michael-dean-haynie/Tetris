function checkKey(e) {

  e = e || window.event;
  s = "Some other key";

  if (e.keyCode == '38') { // Up
    s = "Up";
    rotateBlock();

  }
  else if (e.keyCode == '40') { // Down
    s = "Down";
  }
  else if (e.keyCode == '37') { // Left
     s = "Left";
  }
  else if (e.keyCode == '39') { // Right
     s = "Right";
  }

  console.log(s);
}

function rotateBlock(){
  console.log("Entering rotateBlock()");
  var block = GS.blocks[GS.activeBlockIndex];
  if (!GS.disableUserControl){
    clearBlock(block);
    block.position = (block.position === 3 ? 0 : block.position + 1);
    paintBlock(block);
  }

}