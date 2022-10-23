# heartbeat

def on_received_value_deprecated(name, value):
    global timerCounter
    led.toggle(2, 4)
    if name == "right":
        timerCounter = 0
        if value > 20 or value < -20:
            led.toggle(0, 4)
            Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, value - 5)
    if name == "left":
        timerCounter = 0
        if value > 20 or value < -20:
            led.toggle(4, 0)
            Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, value - 5)
radio.on_received_value_deprecated(on_received_value_deprecated)

def on_button_pressed_a():
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

timerCounter = 0
timerCounter = 0
basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        # . . . .
""")
radio.set_group(1)

def on_forever():
    global timerCounter
    led.toggle(2, 2)
    timerCounter += 1
    if timerCounter > 5:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 85)
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, 85)
    basic.clear_screen()
basic.forever(on_forever)
