#!/bin/bash

num1=$1
num2=$2

if [ $num1 -gt $num2 ] ; then
   echo -e "\nmax num is $num1 and min num is $num2\n"
else
   echo -e "\nmax num is $num2 and min num is $num1\n"
fi

if [ $num1 -ge 0 ] ; then
   echo -e "\nnum1 is positive\n"
else
   echo -e "\nnum1 is negative\n"
fi

if [ $num2 -ge 0 ] ; then
   echo -e "\nnum2 is positive\n"
else
   echo -e "\nnum2 is negative\n"
fi

