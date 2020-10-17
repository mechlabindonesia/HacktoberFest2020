# The Hurdle Race

## Problem

A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by `1` unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return `0`.

## Input

The first line contains two space-separated integers `n` and `k`, the number of hurdles and the maximum height the character can jump naturally.
The second line contains `n` space-separated integers `height[i]` where `0 <= i < n`.

## Output

int: the minimum number of doses required, always `0` or more
