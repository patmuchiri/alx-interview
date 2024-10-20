#!/usr/bin/python3
"""
In a text file, there is a single character H. Your text editor can execute
only two operations in this file: Copy All and Paste.
Given a number n, write a method that calculates the fewest number of
operations needed to result in exactly n H characters in the file.
Returns an integer
If n is impossible to achieve, return 0
"""


def minOperations(n):
    """
    Calculate the minimum number of operations needed to obtain exactly
    n 'H' characters in a text file starting with a single 'H'. The operations
    are Copy All and Paste.

    Parameters:
    n (int): The target number of 'H' characters.

    Returns:
    int: The minimum number of operations needed, or 0 if n is impossible
    to achieve.
    """
    if n <= 1:
        return 0

    operations = 0  # Initialize the number of operations to 0
    factor = 2  # Start with the smallest possible factor, 2

    # Loop to find the smallest factors and divide n
    while n > 1:
        # Divide n by the factor as many times as possible
        while n % factor == 0:
            operations += factor  # Add the factor to the count of operations
            n /= factor  # Reduce n by dividing it by the factor
        factor += 1  # Move to the next possible factor

    return operations


# Example usage and testing
if __name__ == "__main__":
    n = 4
    print("Min # of operations to reach {} characters: {}"
          .format(n, minOperations(n)))

    n = 12
    print("Min # of operations to reach {} characters: {}"
          .format(n, minOperations(n)))
