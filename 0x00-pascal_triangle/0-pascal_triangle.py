#!/usr/bin/python3
"""function that returns a list integers representing the Pascal’s triangle"""


def pascal_triangle(n):
    triangle = []
    for i in range(n):
        row = []
        for j in range(i + 1):
            if (j == 0) or (j == i):
                row.append(1)
            else:
                row.append(triangle[i - 1][j] + triangle[i - 1][j - 1])
        triangle.append(row)
    return triangle


result = pascal_triangle(5)
