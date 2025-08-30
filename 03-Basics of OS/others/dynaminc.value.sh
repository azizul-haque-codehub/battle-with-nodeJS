#!/bin/bash

 add(){
sum=$(($1 + $2))
echo $sum
return $sum
    }
 
 echo "Your Result is: $(add $1 $2)"