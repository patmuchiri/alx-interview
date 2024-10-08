#!/usr/bin/python3
"""Module to generate Pascal’s triangle"""


def pascal_triangle(n):
    """
    Generate Pascal's triangle of size n.

    Pascal's triangle is a triangular array of the binomial coefficients.
    Each row represents the coefficients in the expansion of (a + b)^k.

    Args:
        n (int): The number of rows in Pascal's triangle.

    Returns:
        List[List[int]]: A list of integers representing Pascal's triangle.

    Example:
        >>> pascal_triangle(5)
        [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    """
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
