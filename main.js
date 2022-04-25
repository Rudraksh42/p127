song = "";

function preload()
{
	song = loadSound("music.mp3");
}


function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
    video.center()


}



function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
