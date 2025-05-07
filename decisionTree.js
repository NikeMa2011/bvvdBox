// 决策树

window.addEventListener("keydown", function (event) {
    keydown = event.key;
    inputString = input.value;

    if (debugIsON) {
        Cout("调试: 按下的按键为 " + keydown);
    }

    if (keydown == "Enter") {
        if (chinaTechtreeSoundtrackNames.includes(inputString)) playMusic(chinaTechtreeSoundtrack);
        if (warthunderMainThemeSoundtrackNames.includes(inputString)) playMusic(warthunderMainThemeSoundtrack);
        if (debugIsON) {
            Cout("调试: inputString 为 " + inputString);
        }
    } else if (keydown == ' ') {
        pauseMusic();
    }
});