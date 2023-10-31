//(c)2023 hoanglongplanner
//This script responsible for playing sounds with some buttons and sliders

//--Variable--

var song;
var SliderVolume;
var SliderPitch;
var SliderPan;
var PlayButton;
var DefaultButton;
var PanicButton;
var MutateButton;

//--Process--

function preload(){
  song = loadSound("audio/hoanglongplanner-AliciaMomentoMovement.mp3");
}

function setup() {
  createCanvas(200, 200);
  background(random(255));

  SliderVolume = createSlider(0, 1, 0.5, 0.01);
  SliderPitch = createSlider(0, 5, 1, 0.01);
  SliderPan = createSlider(-1, 1, 0, 0.01);

  PlayButton = createButton("play");
  PlayButton.mousePressed(TogglePlayback);

  DefaultButton = createButton("default");
  DefaultButton.mousePressed(ToggleDefault);

  PanicButton = createButton("panic!!");
  PanicButton.mousePressed(TogglePanic);

  MutateButton = createButton("mutate");  
}

function draw() {
  UpdateSong()
}

function UpdateSong(){
  song.setVolume(SliderVolume.value());
  song.rate(SliderPitch.value());
  song.pan(SliderPan.value());
}

function TogglePlayback(){
  if(!song.isPlaying()){    
    song.play();
  }
  else{
    song.pause();
  }
}

function ToggleDefault(){  
  SliderVolume.value(0.5);
  SliderPitch.value(1);
  SliderPan.value(0);
  UpdateSong();
}

function TogglePanic(){
  SliderVolume.value(0.5);
  SliderPitch.value(1);
  SliderPan.value(0);
  UpdateSong();
  song.stop();
}
