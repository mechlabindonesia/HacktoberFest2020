import math
import os
import random
import re
import sys

def designerPdfViewer(h, word):
    asciiA = ord('a')
    listWord = []

    for c in word:
        asciiC = ord(c)
        indexC = asciiC-asciiA
        listWord.append(h[indexC])

    area = len(word) * max(listWord)

    return area

if __name__ == '__main__':
    
    h = list(map(int, input().rstrip().split()))

    word = input()

    result = designerPdfViewer(h, word)

    print(str(result) + '\n')

