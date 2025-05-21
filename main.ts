radio.setGroup(15);
radio.setTransmitSerialNumber(true)

basic.forever(function () {
    let x = input.acceleration(Dimension.X);
    let y = input.acceleration(Dimension.Y);
    radio.sendValue("x", x);
    radio.sendValue("y", y);
    basic.pause(100);
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop");
})
input.onButtonPressed(Button.B, function () {
})
