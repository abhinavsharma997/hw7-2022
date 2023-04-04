var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.querySelector(".video").autoplay = false;
	console.log("Autoplay is off!")
	document.querySelector(".video").loop = false;
	console.log("Looping is off too!")
	

});


 document.querySelector("#play").addEventListener("click", function() {
 console.log("Video is playing");
 video.play();
 document.querySelector("#volume").innerHTML = video.volume*100 + "%";
 });

document.querySelector("#pause").addEventListener("click", function() {
console.log("Video is paused");
video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video is slowed");
	cr = video.playbackRate/10;
	ncr = video.playbackRate - cr;
	video.playbackRate = ncr;
	console.log("New Playback speed is: ", ncr)
	});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Video is sped up");
	cr = video.playbackRate/10;
	ncr = video.playbackRate + cr;
	video.playbackRate = ncr;
	console.log("New Playback speed is: ", ncr)
	});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Video is skipped by 10 seconds");
	cr = video.currentTime;
	cr = cr + 10;
	if(cr >= video.duration){
		cr = 0;
	}
	video.currentTime = cr;
	console.log("New time is: ", cr)
	});

document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted)
	if (!video.muted){
		video.muted = true;
		console.log("Video is muted");
		document.querySelector("#mute").innerHTML= "Unmute"
	}
	else
	{
		video.muted = false;
		console.log("Video is unmuted");
		document.querySelector("#mute").innerHTML= "Mute"
	}
	});

document.querySelector("#slider").addEventListener("change", function() {
	cv = document.querySelector("#slider").value;
	console.log(cv);
	video.volume = cv/100;
	document.querySelector("#volume").innerHTML = cv + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Adding oldSchool")
    video.classList.add("oldSchool")
    
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Moving back to Original")
    video.classList.remove("oldSchool")
    
});	

