// heartbeat
radio.onReceivedValueDeprecated(function (name, value) {
    led.toggle(2, 4)
    if (name == "right") {
        timerCounter = 0
        led.toggle(0, 4)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, Math.abs(value - 5))
    }
    if (name == "left") {
        timerCounter = 0
        led.toggle(4, 0)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, Math.abs(value - 5))
    }
    if (name == "trot") {
        timerCounter = 0
        led.toggle(4, 0)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, Math.abs(value - 5))
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, Math.abs(120 + 60 - value - 5))
    }
})
input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
})
let timerCounter = 0
timerCounter = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `)
radio.setGroup(1)
basic.forever(function () {
    led.toggle(2, 2)
    timerCounter += 1
    if (timerCounter > 5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 85)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 85)
    }
    basic.clearScreen()
})
