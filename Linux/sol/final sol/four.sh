#!/bin/bash

num1=$1

for((i=1;i<=$num1;i++))
{
echo "$i"
}

a=1;
while [ $a -le $num1 ]
do
  echo $a
  a=$(( a+1 ))
done

b=1;
until [ $b -gt $num1 ]
do
  echo $b
  b=$(( b+1 ))
done
