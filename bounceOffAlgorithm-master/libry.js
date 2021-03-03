
function bonce(movingob,fixedob){
    if (movingob.x - fixedob.x < fixedob.width/2 + movingob.width/2
      && fixedob.x - movingob.x < fixedob.width/2 + movingob.width/2) {
    movingob.velocityX = movingob.velocityX * (-1);
    fixedob.velocityX = fixedob.velocityX * (-1);
  }
  if (movingob.y - fixedob.y < fixedob.height/2 + movingob.height/2
    && fixedob.y - movingob.y < fixedob.height/2 + movingob.height/2){
    movingob.velocityY = movingob.velocityY * (-1);
    fixedob.velocityY = fixedob.velocityY * (-1);
  }
  }
  function coli(movingob,fixedob){
    if (movingob.x - fixedob.x < fixedob.width/2 + movingob.width/2
      && fixedob.x - movingob.x < fixedob.width/2 + movingob.width/2 
      && movingob.y - fixedob.y < fixedob.height/2 + movingob.height/2
      && fixedob.y - movingob.y < fixedob.height/2 + movingob.height/2) {
     return true
  }
  else{
     return false
  }
  }