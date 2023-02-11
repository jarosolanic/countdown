basic.forever(function () {
    for (let _index = 0; _index <= 2; _index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - _index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO")
})
