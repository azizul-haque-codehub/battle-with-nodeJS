#!/bin/bash
# toggle keyboard backlight (on/off)
toggleKbBacklight() {
BACKLIGHT="/sys/class/leds/input8::scrolllock/brightness"
MAX=$(cat /sys/class/leds/input8::scrolllock/max_brightness)
CURRENT=$(cat $BACKLIGHT)

if [ "$CURRENT" -eq "0" ]; then
    # turn on 
    echo $MAX | sudo tee $BACKLIGHT
else
    # turn off
    echo 0 | sudo tee $BACKLIGHT
fi
}
 