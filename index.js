document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  //store the commands
  const movesList = document.querySelector("div#control-panel > ul#moves-container");
  document.addEventListener("keydown", function(event){
    const keyPressed = event.key;
    const li = document.createElement("li");
    switch (keyPressed){
      case "ArrowLeft":
        li.innerText = "left";
        li.id = "left";
        movesList.appendChild(li);
        break;
      case "ArrowRight":
        li.innerText = "right";
        li.id = "right";
        movesList.appendChild(li);
        break;
      case "ArrowUp":
        li.innerText = "up";
        li.id = "up";
        movesList.appendChild(li);
        break;
      case "ArrowDown":
        li.innerText = "down";
        li.id = "down";
        movesList.appendChild(li);
        break;
      }
  })

  //move the robot bonus question
  const moveButton = document.querySelector("#move-button");
  moveButton.addEventListener("click", function(){
    const allMoves = movesList.querySelectorAll("li");
    allMoves.forEach(function(ele,i){
      setTimeout(function(){
        move(ele.innerText);
        ele.remove();
      }, (i+1) * 1000);
    })
  })

  //move the robot
  // moveButton.addEventListener("click", function(){
  //   move(movesList.firstElementChild.innerText);
  //   movesList.removeChild(movesList.firstElementChild);
  // })

  //delete a move
  movesList.addEventListener("click", function(event){
    const toRemove = event.target.innerText;
    switch (toRemove){
      case "left":
        movesList.removeChild(movesList.querySelector("#left"));
        break;
      case "right":
        movesList.removeChild(movesList.querySelector("#right"));
        break;
      case "up":
        movesList.removeChild(movesList.querySelector("#up"));
        break;
      case "down":
        movesList.removeChild(movesList.querySelector("down"));
        break;
    }
  })



});
