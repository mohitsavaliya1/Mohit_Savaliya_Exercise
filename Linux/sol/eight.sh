#!/bin/bash

echo "\nfirst ten lines\n"
head word.txt

echo
echo "\nlast ten lines\n"
tail word.txt

echo
echo "\nline 3 to 8\n"
echo
sed -n 3,8p word.txt 

echo
echo "last 7 lines starting from second last"
echo
cat word.txt | rev | sed -n 2,+8p
