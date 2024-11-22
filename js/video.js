const video = document.querySelector(".video");

// #1 Initialize the video element and turn off autoplay and turn off looping

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

// #2 Play the video and update the volume information
let slider = document.querySelector("#slider");
let output = document.querySelector("#volume");

document.querySelector("#play").addEventListener("click", function() {
	output.innerHTML = slider.value + "%";
	video.play();
	console.log("Play Video");
});



// #3 Pause the video

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Puse Video");
});


// #4 Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video was slowed down to " + video.playbackRate);
});


// #5 Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate / 0.9).toFixed(5);
	console.log("Video was speeded up to " + video.playbackRate);
});


// #6 Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
		console.log("Current location of the video " + video.currentTime)
	}
	else {
		video.currentTime = 0;
		console.log("Oops! This is the end of the video. Restarting... " + video.currentTime)
	}
});


// #7 Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Video was unmuted")
	}
	else{
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Video was muted")
	}
});


// #8 Change the volume based on the slider and update the volume information.

// output.innerHTML = slider.value + "%";
// video.volume = slider.value / 100;
slider.addEventListener('input', function(){
	output.innerHTML = this.value + "%";
	video.volume = this.value / 100;
	console.log("Volume is changed " + video.volume);
});


// #9 Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Wow, this is so oldschool");
});


// #10 Remove the oldSchool class from the video

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Modern style is back");
});
