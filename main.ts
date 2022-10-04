input.onButtonPressed(Button.A, function () {
    if (number == 0) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("G F G A - F E D ", 120)
    }
    if (number == 1) {
        basic.showIcon(IconNames.Heart)
        music.playMelody("B A G A G F A C5 ", 120)
    }
    if (number == 2) {
        basic.showIcon(IconNames.Asleep)
        music.playMelody("- - - - - - - - ", 120)
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let number = 0
number = randint(0, 2)
