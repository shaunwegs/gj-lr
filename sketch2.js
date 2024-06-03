let buttonYes, buttonNo, buttonA, buttonB, buttonC, buttonD;
let buttonNoPressed = false;
let buttonYesPressed = false;
let buttonAPressed = false;
let buttonBPressed = false;
let buttonCPressed = false;
let buttonDPressed = false;
let boxMain, talkLeft, boxPanel;
let portNPC;
let portName;
let act = 0;
let scene = 0;
let shot = 0;
let line = 0
let img1, img2, img3
let port1;
let counting = 0;


let song;
let isLooping = false;
let talkKing, talkKing2, talkDark;
let gameOver;
let chatter = false;

let currentPos = ""

let char1 = "";
let char1Pos = "";
let char1Best = "";
let char1Hp = "";
let char1Def = "";
let char1Att = "";

let char2 = "";
let char2Pos = "";
let char2Best = "";
let char2Hp = "";
let char2Def = "";
let char2Att = "";

let char3 = "";
let char3Pos = "";
let char3Best = "";
let char3Hp = "";
let char3Def = "";
let char3Att = "";

let char4 = "";
let char4Pos = "";
let char4Best = "";
let char4Hp = "";
let char4Def = "";
let char4Att = "";

function setup() {
  song = createAudio('assets/sound/moonlight-loop.mp3');
  talkKing = loadSound('assets/sound/deep-chatter.wav');
  talkKing2 = loadSound('assets/sound/deep-chatter2.wav');
  talkDark = loadSound('assets/sound/dark-chatter.wav');
  gameOver = loadSound('assets/sound/game-over.mp3');

  boxMain = createDiv('<br><br><br><p><font size = "+2">a MRUU production</font></p><br>click to start');
  boxMain.class("nes-container is-centered");
  boxMain.style('background-color', '#ffb');
  boxMain.size(700, 300);
  boxPanel = createDiv('<br>');
  boxPanel.class("nes-container is-centered");
  boxPanel.style('background-color', '#606060');
  boxPanel.size(480, 380);
  img1 = createDiv('<img src="assets/imgs/co-hill-s.gif" />');
  img2 = createDiv('<img src="assets/imgs/co-castle-s.gif" />');
  img3 = createDiv('<img src="assets/imgs/co-castlewall-s.gif" />');
  
  portNPC = createDiv('<p><font size="-2">PPP</font></p>');
  portNPC.class("nes-container is-rounded is-centered");
  portNPC.style('background-color', '#ffb');
  portNPC.size(158, 230);
  port1 = createDiv('<img src="assets/imgs/king.gif" />');
  portName = createP('<p><font size="-2">King Haphe</font></p>');
  

  talkLeft = createDiv('<p>PPP</p>');
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

  buttonA = createButton("credits")
  .mousePressed(()  => buttonAPressed = true)
  .mouseReleased(() => buttonAPressed = false);;
  buttonA.class("nes-btn");

  buttonB = createButton("Start")
  .mousePressed(()  => buttonBPressed = true)
  .mouseReleased(() => buttonBPressed = false);;
  buttonB.class("nes-btn");

  buttonC = createButton("go back")
  .mousePressed(()  => buttonCPressed = true)
  .mouseReleased(() => buttonCPressed = false);;
  buttonC.class("nes-btn");

  buttonD = createButton("go back")
  .mousePressed(()  => buttonDPressed = true)
  .mouseReleased(() => buttonDPressed = false);;
  buttonD.class("nes-btn");
}

function draw() {
  if (act == 0){
    if (scene == 0){
      counting++;
      boxMain.position(50, 50)
      boxPanel.position(-955, 225)
      portNPC.position(-800, 260)
      port1.position(-575, 260)
      portName.position(-575, 260)
      talkLeft.position(-850, 270)
      buttonYes.position(-538, 400)
      buttonNo.position(-628, 400)
      buttonA.position(606, 360)
      buttonB.position(-628, 400)
      buttonC.position(-628, 400)
      buttonD.position(-628, 400)
      img1.position(-965, 285)
      img2.position(-635, 205)
      img3.position(-575, 260)

      boxMain.html('<br><br><br><p><font size = "+2">a MRUU production</font></p><br>click to start');
      boxMain.style('background-color', '#ffb');
 

      if (buttonAPressed == true) {
        buttonA.position(-348, 280)
        act = 8; // Start
        scene = 0;
        buttonAPressed = false;
        if(isLooping === false) {
          song.loop();
          isLooping = true;
          }
      }
      else if (mouseIsPressed == true && counting > 30) {
        buttonA.position(-348, 280)
        scene = 1;
      }
    }
    else if (scene == 1){
    boxMain.class("nes-container is-dark is-centered");
    boxMain.style('background-color', '#373737');
    boxMain.html('<br><br><br><p><font size = "+2">Last Stand</font><br><font size="-1">v. a.0.1</font></p>');
  
    img1.position(265, 280)
    img2.position(635, 205)
    img3.position(575, 260)
    buttonB.position(348, 260)
    if (buttonBPressed == true) {
      act = 1; // Start
      scene = 0;
      buttonB.position(-348, 280)
      buttonBPressed = false;
    }
  }
  }
  else if (act == 1){
    if (scene == 0){
      if (shot == 0){
        img1.position(247, 245)
        img2.position(635, 153)
        img3.position(575, 208)
        boxMain.class("nes-container is-dark with-title is-centered");
        boxMain.html('<p class="title">Last Stand</p>');
        boxMain.position(50, 50)
        portNPC.position(72, 272)
        portName.position(106, 478)
        port1.position(80, 280)
        talkLeft.position(250, 285)
        talkLeft.html('<p>It has been a long time since I called on you, Marshal.</p>');
        buttonA.position(558, 420)
        buttonA.html('Continue')
        if (chatter === false){
          talkKing.play();
          chatter = true;
        }

          if (buttonAPressed == true) {
            shot = 1; // continue
            buttonAPressed = false;
            chatter = false;
          }
      } else if (shot == 1){
        talkLeft.html('<p>The kingdom needs you. Will you listen to this old king?</p>');
        buttonA.position(-558, 420)
        buttonYes.position(558, 420)
        buttonNo.position(648, 420)
        if (chatter === false){
          talkKing2.play();
          chatter = true;
        }
        if (buttonNoPressed == true) {
          buttonNoPressed = false;
          chatter = false;
          act = 9; // Game Over
        }
        if (buttonYesPressed == true) {
          buttonYesPressed = false;
          chatter = false;
          shot = 2; // Game Over
        }
      } else if (shot == 2){
        talkLeft.html('<p>Thank you, Marshal. The night is dark, and evil looms.</p>');
        buttonA.position(558, 420)
        buttonYes.position(-538, 420)
        buttonNo.position(-628, 420)
        if (chatter === false){
          talkKing.play();
          chatter = true;
        }
        if (buttonAPressed == true) {
          shot = 3; // continue
          chatter = false;
          buttonAPressed = false;
        }
      } else if (shot == 3){
        talkLeft.html('<p>We need you to command a defense to protect our kingdom.</p>');
        buttonB.position(558, 420)
        buttonYes.position(-538, 420)
        buttonNo.position(-628, 420)
        buttonB.html('Continue')
        if (chatter === false){
          talkKing.play();
          chatter = true;
        }
        if (buttonBPressed == true) {
          shot = 4; // continue
          chatter = false;
          buttonBPressed = false;
        }
      } else if (shot == 4){
        talkLeft.html('<p>Will you help us? <br>Will you save our kingdom?</p>');
        buttonA.position(-558, 420)
        buttonB.position(-558, 420)
        buttonYes.position(558, 420)
        buttonNo.position(648, 420)
        if (chatter === false){
          talkKing2.play();
          chatter = true;
        }
        if (buttonYesPressed == true) {
          buttonYesPressed = false;
          chatter = false;
          shot = 5; // continue
        }
        if (buttonNoPressed == true) {
          buttonNoPressed = false;
          chatter = false;
          act = 9; // Game Over
        }
      } else if (shot == 5){
      boxPanel.html("<br>")
      talkLeft.html('<p>Thank you, Marshal.<br>What should we do first?</p>');
      portNPC.position(72, 98)
      portName.position(106, 304)
      port1.position(80, 106)
      img1.position(-847, 245)
      img2.position(-635, 153)
      img3.position(-575, 208)
      boxPanel.position(255, 224)
      boxPanel.size(480, 150)
      talkLeft.position(250, 75)
      buttonA.position(268, 240)
      buttonA.html('Tell me of this evil.')
      buttonB.position(268, 300)
      buttonB.html("Let's start recruiting.")
      buttonYes.position(-558, 420)
      buttonNo.position(-648, 420)
      if (chatter === false){
        talkKing.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 6; // learn about dark lord
        buttonAPressed = false;
        port1.html('<img src="assets/imgs/villian.gif" />');
        portName.html('<p><font size="-2" color="#faa">Dark Lord</font></p>');
        portNPC.style('background-color', '#600');
        portName.position(108, 304)
      }
      if (buttonBPressed == true) {
        chatter = false;
        shot = 7.0; // learn about warriors
        buttonBPressed = false;
      }
    }
    else if (shot == 6){
      img1.position(-847, 245)
      img2.position(-635, 153)
      img3.position(-575, 208)
      boxPanel.position(255, 80)
      boxPanel.size(480, 400)
      boxPanel.html("<font color='#ffb'>The Dark Lord Patripher, first of his name. He leads the forces of night, seeking to snuff out our very existence.<br><br>His most fearsome and final threat, threatens us now; the Nox Mensa. Do not underestimate this lumbering construct, it wields a sonic power.</font>")
      talkLeft.position(-850, 75)
      buttonA.position(268, 410)
      buttonA.html('Go Back')
      buttonB.position(-868, 300)
      buttonB.html("Let's start recruiting.")
      buttonYes.position(-558, 410)
      buttonNo.position(-648, 420)
      if (chatter === false){
        talkDark.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 5; // back
        buttonAPressed = false;
        port1.html('<img src="assets/imgs/king.gif" />');
        portName.html('<p><font size="-2">King Haphe</font></p>');
        portNPC.style('background-color', '#ffb');
      }

    }
    else if (shot == 7){
      boxPanel.html("<font color='#ffb'>Markob, tower guard.<br> Jakry, squire master.<br>Steferly, blacksmith. <br> Dawnie, court mage.<br> Kimbifer, executioner.<br> Paulerson, healer.</font>")
      talkLeft.html('<p>There are few in the castle we can call upon. You can command four.</p>');
      boxPanel.position(255, 224)
      boxPanel.size(480, 250)
      talkLeft.position(250, 75)
      buttonA.position(268, 410)
      buttonA.html('Go Back')
      buttonB.position(514, 410)
      buttonB.html("Continue...")
      buttonYes.position(-558, 410)
      buttonNo.position(-648, 420)
      if (chatter === false){
        talkKing2.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 5; // back
        buttonAPressed = false;
      }

      if (buttonBPressed == true) {
        chatter = false;
        shot = 710; // next
        buttonBPressed = false;
      }

    }

    else if (shot == 710){
      boxPanel.html("<font color='#ffb' size='+1'>Markob, Tower Guard</font><br><font color='#ffb' size='-1'> skilled with a bow.<br>Longstanding position in the castle's defense.<br><br>Likes avocado on pizza.</font>")
      talkLeft.html("<p>Markob? Let's see...</p>");
      boxPanel.position(255, 174)
      boxPanel.size(480, 300)
      talkLeft.position(250, 75)
      talkLeft.size(470, 60);
      buttonA.position(268, 410)
      buttonA.html('Hire him')
      buttonB.position(514, 410)
      buttonB.html("Continue...")
      buttonYes.position(-558, 410)
      buttonNo.position(-648, 420)
      if (chatter === false){
        talkKing2.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 711; // hire
        buttonAPressed = false;
      }

      if (buttonBPressed == true) {
        chatter = false;
        shot = 720; // next
        buttonBPressed = false;
      }

    }

    else if (shot == 711){
      boxPanel.html("<font color='#ffb'>Place Markob in the...</font>")
      talkLeft.html("<p>Where should he serve?</p>");
      boxPanel.position(255, 174)
      boxPanel.size(480, 300)
      talkLeft.position(250, 75)
      talkLeft.size(470, 60);
      buttonA.position(368, 230)
      buttonA.html('1st Position')
      buttonB.position(368, 290)
      buttonB.html('2nd Position')
      buttonC.position(368, 350)
      buttonC.html('3rd Position')
      buttonD.position(368, 410)
      buttonD.html('4th Position')
      buttonNo.position(560, 480)
      buttonNo.html("Cancel...")
      buttonYes.position(-558, 410)
      if (chatter === false){
        talkKing2.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 712; // back
        char1 = "Markob";
        currentPos = "1"
        buttonAPressed = false;
      }

      if (buttonBPressed == true) {
        chatter = false;
        shot = 712; 
        char2 = "Markob";
        currentPos = "2"
        buttonBPressed = false;
      }

      if (buttonCPressed == true) {
        chatter = false;
        shot = 712; 
        char3 = "Markob";
        currentPos = "3"
        buttonCPressed = false;
      }

      if (buttonDPressed == true) {
        chatter = false;
        shot = 712; 
        char4 = "Markob";
        currentPos = "4"
        buttonDPressed = false;
      }

      if (buttonNoPressed == true) {
        chatter = false;
        shot = 710; // next
        buttonNoPressed = false;
        buttonC.position(-568, 410)
        buttonD.position(-568, 410)
      }

    }

    else if (shot == 712){
      boxPanel.html("<font color='#ffb'>Place Markob in the...</font>")
      talkLeft.html("<p>Where should he serve?</p>");
      boxPanel.position(255, 174)
      boxPanel.size(480, 300)
      talkLeft.position(250, 75)
      talkLeft.size(470, 60);
      buttonA.position(368, 230)
      buttonA.html('Front-Line')
      buttonB.position(368, 290)
      buttonB.html('Mid-Line')
      buttonC.position(368, 350)
      buttonC.html('Back-Line')
      buttonD.position(-568, 350)
      buttonNo.position(560, 480)
      buttonNo.html("Cancel...")
      buttonYes.position(-558, 410)
      if (chatter === false){
        talkKing2.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 713; // back
        char1 = "Markob";
        buttonAPressed = false;
      }

      if (buttonBPressed == true) {
        chatter = false;
        shot = 713; 
        char2 = "Markob";
        buttonBPressed = false;
      }

      if (buttonCPressed == true) {
        chatter = false;
        shot = 713; 
        char3 = "Markob";
        buttonCPressed = false;
      }

      if (buttonNoPressed == true) {
        chatter = false;
        shot = 710; // next
        buttonNoPressed = false;
        buttonC.position(-568, 410)
        buttonD.position(-568, 410)
      }

    }

    else if (shot === 720){
      boxPanel.html("<font color='#ffb' size='+1'>Jakry, Squire Master</font><br><font color='#ffb' size='-1'> basic skills with a sword.<br>Years of training younger recruits for the King's troops.<br><br>Hates avocado on pizza.</font>")
      talkLeft.html("<p>Jakry? Let's see...</p>");
      boxPanel.position(255, 174)
      boxPanel.size(480, 300)
      talkLeft.position(250, 75)
      talkLeft.size(470, 60);
      buttonA.position(268, 410)
      buttonA.html('Hire him')
      buttonB.position(514, 410)
      buttonB.html("Continue...")
      buttonYes.position(-558, 410)
      buttonNo.position(-648, 420)
      if (chatter === false){
        talkKing2.play();
        chatter = true;
      }
      if (buttonAPressed == true) {
        chatter = false;
        shot = 721; // hire
        buttonAPressed = false;
      }

      if (buttonBPressed == true) {
        chatter = false;
        shot = 720; // next
        buttonBPressed = false;
      }

    }

    }

  }
  else if (act == 8){
    counting = 0;
    boxMain.style('background-color', '#373737');
    boxMain.html('<p><font size = "+2" color="#ddd">Credits</font><br><br><font color="#ddd">UI from NES.css, by B.C.Rikko<br><br>Sound and music from Pixabay<br><br>Coded with VSC & p5.js<br><br>All art by me</p></font>');
    boxMain.position(50, 50)  
    img1.position(-847, 245)
    img2.position(-835, 153)
    img3.position(-875, 208)
    portNPC.position(-800, 260)
    port1.position(-880, 280)
    portName.position(-806, 478)
    talkLeft.position(-850, 270)
    buttonYes.position(-538, 400)
    buttonNo.position(-628, 400)
    buttonC.position(606, 360)
    if (buttonCPressed == true) {
      act = 0; // back
      scene = 0;
      shot = 0;
      buttonC.position(-348, 280)
      buttonAPressed = false;
      buttonCPressed = false;
    }
  }
  else if (act == 9){
    boxMain.class("nes-container is-dark is-centered");
    boxMain.html('<br><br><br><br><p><font size = "+2" color="#f00">Game Over</font></p>');
    boxMain.position(50, 50)  
    img1.position(-847, 245)
    img2.position(-835, 153)
    img3.position(-875, 208)
    portNPC.position(-800, 260)
    port1.position(-880, 280)
    portName.position(-806, 478)
    talkLeft.position(-850, 270)
    buttonYes.position(-538, 400)
    buttonNo.position(-628, 400)
    if (chatter === false){
      song.stop();
      gameOver.play();
      chatter = true;
    }

  }

}

function mousePressed(){

    playSound('mySound2')
   if(isLooping === false) {
    song.volume(.5)
    song.loop();
    isLooping = true;
    }
}

function playSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}