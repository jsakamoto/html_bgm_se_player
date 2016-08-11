// 現在再生中の BGM の audio 要素を保持する変数
var currentPlayingBGM = null;

// BGM の再生音量 (0~1)
var masterVolume = 1;

// 音源ファイルの先行読み込みを要求する audio 要素をストックする
var preloadRequests = [];

// BGMについて、ボタン要素のIDと、そのボタンをクリックしたときに鳴らすBGM音源との対応を定義
var bgmDefinitions = [
    { id: "BGM1", src: "assets/BGM/BGM1.mp3" },
    { id: "BGM2", src: "assets/BGM/BGM2.mp3" },
    { id: "BGM3", src: "assets/BGM/BGM3.mp3" },
];

// 先の定義に従って、BGMボタンクリック時に対応する効果音を鳴らす動作を配線
bgmDefinitions.forEach(function (bgmDefinition) {
    var audio = new Audio();
    audio.src = bgmDefinition.src;
    preloadRequests.push(audio);

    document.getElementById(bgmDefinition.id).addEventListener("click", function () {
        preloadAudio();

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
        audio.volume = masterVolume;
        audio.loop = true;
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

// 音量について、ボタン要素のIDと、そのボタンをクリックしたときに設定する音量(0~1)との対応を定義
var volumeDefinitions = [
    { id: "Volume1", volume: 0.4 },
    { id: "Volume2", volume: 0.7 },
    { id: "Volume3", volume: 1 },
];

// 先の定義に従って、音量ボタンクリック時に対応する音量設定動作を配線
volumeDefinitions.forEach(function (volumeDefinition) {
    document.getElementById(volumeDefinition.id).addEventListener("click", function () {
        masterVolume = volumeDefinition.volume;
        if (currentPlayingBGM != null && timerid == 0) {
            currentPlayingBGM.volume = volumeDefinition.volume;
        }
    });
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
    preloadRequests.push(audio);

    document.getElementById(seDefinition.id).addEventListener("click", function () {
        preloadAudio();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    });
});

function preloadAudio() {
    while ((toPreload = preloadRequests.pop()) != null) {
        toPreload.loop = false;
        toPreload.volume = 0;
        toPreload.play();
    }
}