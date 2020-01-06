// Rover Object Goes Here
// ======================
let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}

// ======================
function turnLeft(rover) {

  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log(rover.direction);
      break;
    case 'S':
      rover.direction = 'E'
      console.log(rover.direction)
      break;
    case 'E':
      rover.direction = 'N'
      console.log(rover.direction)
      break;
    case 'W':
      rover.direction = 'S'
      console.log(rover.direction)
  }
  console.log("turnLeft was called!");
}



function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log(rover.direction);
      break;
    case 'S':
      rover.direction = 'W';
      console.log(rover.direction);
      break;

    case 'E':
      rover.direction = 'S';
      console.log(rover.direction);
      break;

    case 'W':
      rover.direction = 'N';
      console.log(rover.direction);
      break;
  }
  console.log("turnRight was called!");
}

// MOVING FORWARD
function moveForward(rover) {
  console.log("moveForward was called")

  if (rover.direction === 'N') {
    if (rover.y <= 0) { console.log('Player cannot leave the field') }
    else {
    rover.y--
    }
  }
  else if (rover.direction === 'S') {
    if (rover.y === 9) { console.log('Player cannot leave the field') }
    else {
      rover.y++;
    }
  }
  else if (rover.direction === 'E') {
    if (rover.x === 9) { console.log('Player cannot leave the field') }
    else {
      rover.x++
    }
  }
  else if (rover.direction === 'W') {
    if (rover.x = 0) { console.log('Player cannot leave the field') }
    else {
    rover.x--
    }
  }
}
// MOVE BACKWARDS
function moveBackwards(rover) {
  if (rover.direction === 'N') {
    if (rover.y <= 0) {
      console.log('Player cannot leave the field')
    }
    else {
      rover.y++
    }
  }
  //   Maybe alter boundary logic
  else if (rover.direction === 'S') {
    rover.y--;
  }
  else if (rover.direction === 'E') {
    if (rover.x === 9 || rover.x <= 0) { console.log('Player cannot leave the field') }
    else {
      rover.x--
    }
  }
  else if (rover.direction === 'W') {
    if (rover.x = 0) { console.log('Player cannot leave the field') }
    else {
    rover.x++
    }
  }
}
//Function that uses list of commands
function commands(str) {
  let moves = str.split('')

  moves.forEach(move => {
    if (move === 'f') {
      moveForward(rover)
      rover.travelLog.push([rover.x, rover.y])
    }
    else if (move === 'r') {
      turnRight(rover)
    }
    else if (move === 'l') {
      turnLeft(rover)
    }
    else if (move === 'b') {
      moveBackwards(rover)
      rover.travelLog.push([rover.x, rover.y])
    }
    //Validate input     
    else { console.log('That command is not a rover command. Please enter either f, r, l, or b!') }
  })
  //Log all previous locations from travel log
  console.log(rover.travelLog)
}

//UNCOMMENT THE LINE BELOW TO SEE CODE IN ACTION 
commands('rfbfrfb')
