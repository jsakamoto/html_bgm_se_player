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

// SE(効果音)について、ボタン要素のIDと、そのボタンをクリックしたときに鳴らすSE音源との対応を定義
var seDefinitions = [
    { id: "SE1", src: "assets/SE/SE1.mp3" },
    { id: "SE2", src: "assets/SE/SE2.mp3" },
    { id: "SE3", src: "assets/SE/SE3.mp3" },
];

// 先の定義に従って、SEボタンクリック時に対応する効果音を鳴らす動作を配線
seDefinitions.forEach(function (seDefinition) {
    var audio = new Audio();
    audio.src = seDefinition.src;

    document.getElementById(seDefinition.id).addEventListener("click", function () {
        if (audio.currentTime > 0) {
            audio.currentTime = 0;
        }
        audio.play();
    });
});

