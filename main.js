const input = document.getElementById("input");
let inputString;

let isMusicPlaying = false, musicPlayed;

let keydown;

// 从作者的本地设备复制的qwq
// Author: NikeMa2011(github)
// 2025年5月6日
let debugIsON = false;

function Cout(string, value) {
    if (value === undefined) {
        console.log(string);
    } else if (value === "warn") {
        console.warn(string);
    } else if (value === "error") {
        console.error(string);
    } else {
        console.log("参数 value 的输入是无效的");
    }
}
function debug(value) {
    if (value === undefined) {
        if (debugIsON) {
            debugIsON = false;
        } else if (!debugIsON) {
            debugIsON = true;
        }
    } else {
        if (trueSets.includes(value)) {
            if (debugIsON) {
                Cout("debugisON 已经为 真(" + debugIsON + ")");
            }
            debugIsON = true;
        } else if (false.includes(value)) {
            if (!debugIsON) {
                Cout("debugisON 已经为 假(" + debugIsON + ")");
            }
        } else {
            Cout("参数 value 的输入是无效的");
        }
    }
}

// 完成

function playMusic(music) {
    if (isMusicPlaying) {
        musicPlayed.pause();
        musicPlayed = null;
        isMusicPlaying = false;
    }
    music.play();
    musicPlayed = music;
    isMusicPlaying = true;

    if (debugIsON) {
        Cout("调试: isMusicPlaying 为 " + isMusicPlaying + " , musicPlayed 为 " + musicPlayed.src);
    }
}
function pauseMusic() {
    if (isMusicPlaying) {
        musicPlayed.pause();
        isMusicPlaying = false;
    } else {
        musicPlayed.play();
        isMusicPlaying = true;
    }

    if (debugIsON) {
        Cout("调试: isMusicPlaying 为 " + isMusicPlaying + " , musicPlayed 为 " + musicPlayed.src);
    }
}