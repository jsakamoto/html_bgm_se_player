# BGM/SEプレイヤーアプリ(HTML実装) #

「[Code 2016](http://codejp.connpass.com/event/34473/)」のDay1に開催された

「きんぎょばち(1) BGMとSE鳴らすモバイルアプリを、各々自分ができるやりかたでクローンしてみる」

のHTML実装です。

## 要件の実装状況 ##

- [X] BGM と SE (効果音) がある
- [X] それぞれ 3 種類程度
- [X] BGM と SE は同時に鳴らせる必要がある
- [X] BGM はループ再生、フェードアウト、音量の選択(最大、小さめの2種)が出来ること
- [X] SE の再生は1度切りで音量も最大の１つだけ
- [X] 全ての操作が行いやすい (タップしやすい) こと
    - とりあえずは外観整備した

## サンプルで使用している音源

サンプルで使用している音源は下記のサイトの著作物となっております。

### BGM音源： 01SoundEarth

フリー素材＞ループ＞ファミコン風8bit
→ [https://01earth.net/sound/material/loop/8bit/](https://01earth.net/sound/material/loop/8bit/)

- lo_025.mp3 → BGM1.mp3
- lo_027.mp3 → BGM2.mp3
- lo_029.mp3 → BGM3.mp3

### SE音源： 効果音ラボ

戦闘[1] ファンタジー・格闘
→ [http://soundeffect-lab.info/sound/battle/](http://soundeffect-lab.info/sound/battle/)

- magic-flame2.mp3 → SE1.mp3
- magic-poison1.mp3 → SE2.mp3
- magic-status-cure1.mp3 → SE3.mp3