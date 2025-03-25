$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150,690,100,20);
    createPlatform(270,670,100,20);
    createPlatform(500,570,100,20);
    createPlatform(590,450,100,20);
    createPlatform(655,370,100,20);
    createPlatform(900,370,100,20);
    createPlatform(1200,400,100,20);
    createPlatform(1300,500,100,20);
    createPlatform(820,420,100,20)


    // TODO 3 - Create Collectables
    createCollectable("steve",300,640);
    createCollectable("steve",450,540);
    createCollectable("steve",600,400);
    createCollectable("steve",800,220);
    createCollectable("steve",1300,240);
    createCollectable("steve",1130,250);




    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("top", 500, 1000);
    createCannon("top", 600, 1000);
    createCannon("top", 800, 1000);
    createCannon("top", 1300,1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
