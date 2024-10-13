#!/usr/bin/python3

""" The Lockboxes Method """


def canUnlockAll(boxes):
    """ determines if all the boxes can be opened """
    if isinstance(boxes, list):
        list_len = len(boxes)
        opened_boxes = set([0])

        keys = [0]

        while keys:
            current_key = keys.pop()

            for key in boxes[current_key]:
                if key not in opened_boxes and key < list_len:
                    opened_boxes.add(key)
                    keys.append(key)
        return len(opened_boxes) == list_len
