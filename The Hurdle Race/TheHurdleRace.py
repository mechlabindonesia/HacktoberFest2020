import math
import os
import random
import re
import sys

def hurdleRace(k, height):
    maxHurdles = max(height)
    potion = maxHurdles-k

    if potion <= 0:
        return 0
    else:
        return potion
    

if __name__ == '__main__':
    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    height = list(map(int, input().rstrip().split()))

    result = hurdleRace(k, height)

    print(str(result) + '\n')
