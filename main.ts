let c = 0
let f = 0
input.onButtonPressed(Button.A, function () {
    c = input.temperature()
    basic.showNumber(c)
})
input.onButtonPressed(Button.B, function () {
    c = input.temperature()
    f = 32 + c * (18 / 10)
    basic.showNumber(f)
})
