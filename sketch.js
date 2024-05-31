let buttonYes, buttonNo, buttonA, buttonB;
let buttonNoPressed = false;
let buttonYesPressed = false;
let boxMain, talkLeft;
let portNPC;
let scene = 0;
let img1, img2, img3

function setup() {
  boxMain = createDiv('<br><br><br><br><p><font size = "+2">Last Stand</font></p><br>click to start');
  boxMain.class("nes-container is-dark is-centered");
  boxMain.size(700, 300);
  img1 = createDiv('<img src="assets/imgs/co-hill.gif" />');
  img2 = createDiv('<img src="assets/imgs/co-castle.gif" />');
  
  portNPC = createDiv('<p>hilo</p>');
  portNPC.class("nes-container is-rounded");
  portNPC.style('background-color', '#ffb');
  portNPC.size(150, 200);
  talkLeft = createDiv('<p>Will you help me?</p>');
  talkLeft.class("nes-balloon from-left");
  talkLeft.style('background-color', '#fff');
  talkLeft.size(470, 110);

  buttonYes = createButton("Yes")
  .mousePressed(()  => buttonYesPressed = true)
  .mouseReleased(() => buttonYesPressed = false);;
  buttonYes.class("nes-btn is-success");

  buttonNo = createButton("No")
  .mousePressed(()  => buttonNoPressed = true)
  .mouseReleased(() => buttonNoPressed = false);;
  buttonNo.class("nes-btn is-error");
}

function draw() {
  if (scene == 0){
    boxMain.position(50, 50)
    img1.position(270, 280)
    img2.position(560, 120)
    portNPC.position(-800, 260)
    talkLeft.position(-850, 270)
    buttonYes.position(-538, 400)
    buttonNo.position(-628, 400)
    if (mouseIsPressed == true) {
      scene = 1; // White
    }
  }
  else if (scene == 1){
  img1.position(247, 183)
  img2.position(540, 70)
  boxMain.class("nes-container is-dark with-title is-centered");
  boxMain.html('<p class="title">Last Stand</p>');
  boxMain.position(50, 50)
  portNPC.position(80, 260)
  talkLeft.position(250, 270)
  buttonYes.position(538, 400)
  buttonNo.position(628, 400)
    if (buttonNoPressed == true) {
      scene = 2; // White
    }
  }
  else if (scene == 2){
    boxMain.class("nes-container is-dark is-centered");
    boxMain.html('<br><br><br><br><p><font size = "+2" color="#f00">Game Over</font></p>');
    boxMain.position(50, 50)
    portNPC.position(-800, 260)
    talkLeft.position(-850, 270)
    buttonYes.position(-538, 400)
    buttonNo.position(-628, 400)
  }

}