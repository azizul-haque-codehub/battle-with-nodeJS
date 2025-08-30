#!/bin/bash

while read -r line; do
    echo "You said: $line"
done < input.txt
