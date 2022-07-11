const music = new Audio("./music/Github Skyline.mp3");
if(!music) {
  music = new Audio("../music/Github Skyline.mp3");
}
music.play();
music.loop = true;
