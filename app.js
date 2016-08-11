var timerid = 0;
document.getElementById("FO").addEventListener("click", function () {
    if (timerid != 0)
        return;

    timerid = setInterval(function () {
        var tmp = bgm.volume - 0.1;
        if (tmp > 0) {
            bgm.volume = tmp;
        } else {
            bgm.pause();
            bgm.volume = 1;
            bgm.currentTime = 0;
            clearInterval(timerid);
            timerid = 0;
        }
    }, 500);
});

var bgm = new Audio();
bgm.src = "assets/BGM/BGM1.mp3";
bgm.loop = true;
bgm.volume = 1;
document.getElementById("BGM1").addEventListener("click", function () {
    bgm.play();
});

var audio = new Audio();
audio.src = "assets/SE/SE1.mp3";

document.getElementById("SE1").addEventListener("click", function () {
    if (audio.currentTime > 0) {
        audio.currentTime = 0;
    }
    audio.play();
});
