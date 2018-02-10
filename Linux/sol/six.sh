#!/bin/bash

#wc -w *.txt
#find *.txt -print0 | xargs -0 cat | wc -w

ls $1 | find . -name "*.txt" | xargs grep -o "moh" | wc -l
