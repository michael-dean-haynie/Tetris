function Point(x, y, id = null){
	this.x = x;
	this.y = y;
	this.id = id;
}

function Block(shape, position, cp){ // cp => centerPoint

	// Fill points
	var willbe_points = new Array(4).fill(null);
	switch(shape){
		case "I":
			switch(position){
				case 0:
					willbe_points[0] = new Point(cp.x+(0), cp.y+(2),  0);
					willbe_points[1] = new Point(cp.x+(0), cp.y+(1),  1);
					willbe_points[2] = new Point(cp.x+(0), cp.y+(0),  2);
					willbe_points[3] = new Point(cp.x+(0), cp.y+(-1), 3);
					break;

				case 1:
					willbe_points[0] = new Point(cp.x+(2),  cp.y+(0), 0);
					willbe_points[1] = new Point(cp.x+(1),  cp.y+(0), 1);
					willbe_points[2] = new Point(cp.x+(0),  cp.y+(0), 2);
					willbe_points[3] = new Point(cp.x+(-1), cp.y+(0), 3);
					break;

				case 2:
					willbe_points[0] = new Point(cp.x+(0), cp.y+(-1), 0);
					willbe_points[1] = new Point(cp.x+(0), cp.y+(0),  1);
					willbe_points[2] = new Point(cp.x+(0), cp.y+(1),  2);
					willbe_points[3] = new Point(cp.x+(0), cp.y+(2),  3);
					break;

				case 3:
					willbe_points[0] = new Point(cp.x+(-1), cp.y+(0), 0);
					willbe_points[1] = new Point(cp.x+(0),  cp.y+(0), 1);
					willbe_points[2] = new Point(cp.x+(1),  cp.y+(0), 2);
					willbe_points[3] = new Point(cp.x+(2),  cp.y+(0), 3);
					break;
			}
			break;

    case "J":
      switch(position){
        case 0:
          willbe_points[0] = new Point(cp.x+(0),  cp.y+(1),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(-1), 3);
          break;

        case 1:
          willbe_points[0] = new Point(cp.x+(0), cp.y+(0), 0);
          willbe_points[1] = new Point(cp.x+(0), cp.y+(0), 1);
          willbe_points[2] = new Point(cp.x+(0), cp.y+(0), 2);
          willbe_points[3] = new Point(cp.x+(0), cp.y+(0), 3);
          break;

        case 2:
          willbe_points[0] = new Point(cp.x+(1),  cp.y+(0), 0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0), 1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(0), 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(1), 3);
          break;

        case 3:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(0),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(1),  cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(1),  cp.y+(-1), 3);
          break;
      }
      break;

    case "L":
      switch(position){
        case 0:
          willbe_points[0] = new Point(cp.x+(0), cp.y+(1),  0);
          willbe_points[1] = new Point(cp.x+(0), cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0), cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(1), cp.y+(-1), 3);
          break;

        case 1:
          willbe_points[0] = new Point(cp.x+(1),  cp.y+(0),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(-1), 3);
          break;

        case 2:
          willbe_points[0] = new Point(cp.x+(0),  cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(1),  2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(1),  3);
          break;

        case 3:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(0), 0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0), 1);
          willbe_points[2] = new Point(cp.x+(1),  cp.y+(0), 2);
          willbe_points[3] = new Point(cp.x+(1),  cp.y+(1), 3);
          break;
      }
      break;

    case "O":
      switch(position){
        case 0:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(0),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(-1), 3);
          break;

        case 1:
          willbe_points[0] = new Point(cp.x+(0),  cp.y+(0),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(-1), 1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(0),  3);
          break;

        case 2:
          willbe_points[0] = new Point(cp.x+(0),  cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(-1), cp.y+(-1), 1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(0),  cp.y+(0),  3);
          break;

        case 3:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(-1), cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(0),  cp.y+(-1), 3);
          break;
      }
      break;

    case "S":
      switch(position){
        case 0:
          willbe_points[0] = new Point(cp.x+(1),  cp.y+(0),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(-1), 3);
          break;

        case 1:
          willbe_points[0] = new Point(cp.x+(0),  cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(1),  3);
          break;

        case 2:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(-1), 1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(1),  cp.y+(0),  3);
          break;

        case 3:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(1),  0);
          willbe_points[1] = new Point(cp.x+(-1), cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(0),  cp.y+(-1), 3);
          break;
      }
      break;

    case "T":
      switch(position){
        case 0:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(0),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(1),  cp.y+(0),  2);
          willbe_points[3] = new Point(cp.x+(0),  cp.y+(-1), 3);
          break;

        case 1:
          willbe_points[0] = new Point(cp.x+(0),  cp.y+(1),  0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0),  cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(0),  3);
          break;

        case 2:
          willbe_points[0] = new Point(cp.x+(1),  cp.y+(0), 0);
          willbe_points[1] = new Point(cp.x+(0),  cp.y+(0), 1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(0), 2);
          willbe_points[3] = new Point(cp.x+(0),  cp.y+(1), 3);
          break;

        case 3:
          willbe_points[0] = new Point(cp.x+(0), cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(0), cp.y+(0),  1);
          willbe_points[2] = new Point(cp.x+(0), cp.y+(1),  2);
          willbe_points[3] = new Point(cp.x+(1), cp.y+(0),  3);
          break;
      }
      break;

    case "Z":
      switch(position){
        case 0:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(0) , 0);
          willbe_points[1] = new Point(cp.x+(0) , cp.y+(0) , 1);
          willbe_points[2] = new Point(cp.x+(0) , cp.y+(-1), 2);
          willbe_points[3] = new Point(cp.x+(1) , cp.y+(-1), 3);
          break;

        case 1:
          willbe_points[0] = new Point(cp.x+(0) , cp.y+(1) , 0);
          willbe_points[1] = new Point(cp.x+(0) , cp.y+(0) , 1);
          willbe_points[2] = new Point(cp.x+(-1), cp.y+(0) , 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(-1), 3);
          break;

        case 2:
          willbe_points[0] = new Point(cp.x+(1) , cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(0) , cp.y+(-1), 1);
          willbe_points[2] = new Point(cp.x+(0) , cp.y+(0) , 2);
          willbe_points[3] = new Point(cp.x+(-1), cp.y+(0) , 3);
          break;

        case 3:
          willbe_points[0] = new Point(cp.x+(-1), cp.y+(-1), 0);
          willbe_points[1] = new Point(cp.x+(-1), cp.y+(0) , 1);
          willbe_points[2] = new Point(cp.x+(0) , cp.y+(0) , 2);

          willbe_points[3] = new Point(cp.x+(0) , cp.y+(1) , 3);
          break;
      }
      break;
	}


	this.shape = shape;
	this.position = position; // Positions start at zero (upright) and increment as they rotate 45 degrees clockwise.
	this.points = willbe_points;
}

function Board(width, height, pointSize){
	this.width = width;
	this.height = height;
	this.pointSize = pointSize;
	
}