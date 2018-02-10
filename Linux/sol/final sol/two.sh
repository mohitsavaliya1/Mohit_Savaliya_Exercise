#!/bin/bash

ls | grep -E '\-|\_|\*|\$' | xargs rm -f
