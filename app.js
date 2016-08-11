// 現在再生中の BGM の audio 要素を保持する変数
var currentPlayingBGM = null;

// BGMについて、ボタン要素のIDと、そのボタンをクリックしたときに鳴らすBGM音源との対応を定義
var bgmDefinitions = [
    { id: "BGM1", src: "assets/BGM/BGM1.mp3" },
    { id: "BGM2", src: "assets/BGM/BGM2.mp3" },
    { id: "BGM3", src: "assets/BGM/BGM3.mp3" },
];

// 先の定義に従って、SEボタンクリック時に対応する効果音を鳴らす動作を配線
bgmDefinitions.forEach(function (bgmDefinition) {
    var audio = new Audio();
    audio.src = bgmDefinition.src;
    audio.loop = true;

    document.getElementById(bgmDefinition.id).addEventListener("click", function () {
        // このBGMが現在再生中で、かつ、フェードアウト途中でもなければ、繰り返しボタンクリックされても何もしない
        if (currentPlayingBGM == audio && timerid == 0) return;

        // フェードアウト用のタイマーが有効でフェードアウト処理最中なら、そのタイマーを停止してフェードアウト処理を中止
        if (timerid != 0) {
            clearInterval(timerid);
            timerid = 0;
        }

        // 他の BGM が再生中なら停止
        if (currentPlayingBGM != null) {
            currentPlayingBGM.pause();
            currentPlayingBGM = null;
        }

        // 曲の先頭から再生開始し、現在再生中BGMのaudio要素をマーク
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
        currentPlayingBGM = audio;
    });
});

// フェードアウトボタンがクリックされたときのフェードアウト処理
var timerid = 0;
document.getElementById("FO").addEventListener("click", function () {
    if (timerid != 0 || currentPlayingBGM == null)
        return;

    timerid = setInterval(function () {
        var tmp = currentPlayingBGM.volume - 0.1;
        if (tmp > 0) {
            currentPlayingBGM.volume = tmp;
        } else {
            currentPlayingBGM.pause();
            currentPlayingBGM = null;
            clearInterval(timerid);
            timerid = 0;
        }
    }, 500);
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

