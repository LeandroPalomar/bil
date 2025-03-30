radio.onReceivedString(function (receivedString) {
    if (receivedString == "a") {
        bitbot.go(BBDirection.Forward, fart)
    } else if (receivedString == "b") {
        bitbot.rotate(BBRobotDirection.Right, fart)
    } else if (receivedString == "c") {
        bitbot.go(BBDirection.Reverse, fart)
    } else {
        bitbot.rotate(BBRobotDirection.Left, fart)
    }
})
let fart = 0
fart = 60
radio.setGroup(1)
bitbot.setLedColor(0x00FF00)
basic.forever(function () {
	
})
