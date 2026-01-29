# LeetCode 334. Increasing Triplet Subsequence

**Difficulty:** Medium

**Topics:** Arrays, Greedy

**Problem Link:** [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/description/)

---

## Problem Statement

Given an integer array `nums`, return `true` if there exists a triple of indices `(i, j, k)` such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

**Example 1:**

Input: nums = `[1,2,3,4,5]`
Output: `true`
Explanation: Any triplet where i < j < k is valid.

**Example 2:**

Input: nums = `[5,4,3,2,1]`
Output: `false`
Explanation: No triplet exists.

**Example 3:**

Input: nums = `[2,1,5,0,4,6]`
Output: `true`
Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.

---

## Java

```java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        int first = Integer.MAX_VALUE;
        int second = Integer.MAX_VALUE;

        for(int num : nums) {
            if (num <= first) {
                first = num;
            }
            else if (num <= second) {
                second = num;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
```

## Explanation

- The `increasingTriplet` method takes an integer array `nums` and returns a boolean value indicating whether an increasing triplet subsequence exists.

- Two variables are initialized:
  - `first` - tracks the smallest element encountered so far, initialized to `Integer.MAX_VALUE`
  - `second` - tracks the smallest element greater than `first`, initialized to `Integer.MAX_VALUE`

- A **for-each loop** iterates through each element `num` in the array:

  - **First condition:** `if (num <= first)`
    - If the current number is less than or equal to `first`, update `first` to `num`
    - This ensures `first` always holds the smallest value seen so far

  - **Second condition:** `else if (num <= second)`
    - If the current number is greater than `first` but less than or equal to `second`, update `second` to `num`
    - This means we've found a potential second element of the triplet
    - `second` now holds the smallest number that is greater than `first`

  - **Third condition:** `else`
    - If the current number is greater than both `first` and `second`, an increasing triplet exists
    - The triplet is: `first < second < num`
    - Return `true` immediately

- If the loop completes without finding a triplet, return `false`.

- **Key insight:** We don't need to track the actual indices. We only need to maintain two values (`first` and `second`) that represent potential candidates for the first two elements of an increasing triplet. When we find a third element larger than both, we know a valid triplet exists.

---

## Time Complexity & Space Complexity

### Time Complexity: O(n)

The algorithm performs a single pass through the array:

- The **for-each loop** iterates through each element in `nums` exactly once
- Inside the loop, all operations (comparisons, assignments) execute in **constant time** `O(1)`
- There are no nested loops or recursive calls
- Early termination occurs when a triplet is found, but worst-case still requires checking all elements

If the array contains `n` elements, the algorithm performs at most `n` comparisons, resulting in **linear time complexity**.

---

### Space Complexity: O(1)

The solution uses only a constant amount of extra space:

- Two integer variables: `first` and `second`
- Loop variable `num` (used in for-each loop)
- No additional data structures are created
- Memory usage remains constant regardless of input size

The space complexity is **constant** as it does not scale with the size of the input array.

---

## Key Takeaways

- The problem is solved using a **greedy approach** with two tracking variables.
- `first` maintains the smallest element encountered, acting as a potential first element of the triplet.
- `second` maintains the smallest element greater than `first`, acting as a potential second element.
- When any element larger than both `first` and `second` is found, a valid triplet exists.
- The algorithm achieves **O(n) time complexity** with a single pass through the array.
- **Early termination** occurs as soon as a valid triplet is discovered.
- The solution uses **O(1) space complexity**, requiring only two variables.
- The actual **indices are not stored**, only the values needed to detect the increasing pattern.
- The algorithm handles **edge cases** naturally, including arrays with duplicates and descending sequences.
- This approach is more efficient than brute force `O(n³)` or sorting-based `O(n log n)` solutions.