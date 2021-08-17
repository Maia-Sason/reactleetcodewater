# Leet Code Container With Most Water Visualized

Based on Leetcode problem #11.

From Leetcode:

>Given n non-negative integers a1, a2, ..., an , where each represents a point
>at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
>of the line i is at (i, ai) and (i, 0). Find two lines, which, together with 
>the x-axis forms a container, such that the container contains the most water.

>Notice that you may not slant the container.

> **Input** height = [1,8,6,2,5,4,8,3,7]
> **Output** 49
> **Explanation** The above vertical lines are represented by array [1,8,6,2,5
> 4,8,3,7]. In this case, the max area of water (blue section) the container
> can contain is 49.

## Live Demo:
https://maia-sason.github.io/reactleetcodewater/

## How it works and why?:

I wanted to create a visualized version of this problem because it lends itself well for visualization.

The output number comes from the distance between the most optimal lowest tower and its distance from the highest tower. The reason is that the lowest tower is the limiter of the entire equation, it doesn't matter how high your highest tower is if the lower tower has a value of 1. Water will not go over the lower tower.

The best lower tower would be a tower that is considerably high and far from the first tower.
In order to find that tower we need to go through all of the towers, multiply the lower tower by its distance to the higher tower and see which 2 towers produce the best outcome.

### Naive Approach:

Brute force approach would be O(N^2) if we were to loop over all the tower in a nested fashion.

There is a better approach however.

### Better Approach:

A better approach would be to use two pointers, one at the start and one at the end, moving the value of the index of the lowest tower further inwards and saving the outcome in a `maxValue` updating it only if the `maxValue` is less than the current value.

This would be an O(N) solution as we would only need to go through the array of heights once to find the answer.

### Usage:

Input a sequence of numbers separated by spaces in the input field.
On submit the columns highlighted in red are the best columns to hold the most water.


### Tech used:

* React
* React-Redux
* thunk