
try {
  const music = new Audio("./music/Github Skyline.mp3");
}
catch(err) {
  cosnt music = new Audio("../music/Github Skyline.mp3");
}
music.play();
music.loop = true;
