# LeetCode 238. Product of Array Except Self

**Difficulty:** Medium

**Topics:** Arrays, Prefix Sum

**Problem Link:** [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)

---

## Problem Statement

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a **32-bit** integer.

You must write an algorithm that runs in **O(n) time** and **without using the division operation**.

**Example 1:**

Input: nums = `[1,2,3,4]`
Output: `[24,12,8,6]`

**Example 2:**

Input: nums = `[-1,1,0,-3,3]`
Output: `[0,0,9,0,0]`

---

## Java

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        int prefix[] = new int[n];
        int suffix[] = new int[n];

        prefix[0] = 1;
        for (int i = 1; i < n; ++i) {
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        suffix[n-1] = 1;
        for (int i = n - 2; i >= 0; --i) {
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        for (int i = 0; i < n; ++i) {
            ans[i] = prefix[i] * suffix[i];
        }

        return ans;
    }
}
```

## Explanation

- The `productExceptSelf` method takes an integer array `nums` and returns an array `ans` where each element at index `i` contains the product of all elements in `nums` except `nums[i]`.

- Three arrays are created:
  - `ans[]` - stores the final result
  - `prefix[]` - stores the product of all elements to the left of each index
  - `suffix[]` - stores the product of all elements to the right of each index

- **Building the prefix array:**
  - `prefix[0]` is initialized to `1` since there are no elements to the left of the first element
  - The `for` loop iterates from index `1` to `n-1`
  - For each index `i`, `prefix[i]` is calculated as `prefix[i-1] * nums[i-1]`
  - This means `prefix[i]` contains the product of all elements before index `i`

- **Building the suffix array:**
  - `suffix[n-1]` is initialized to `1` since there are no elements to the right of the last element
  - The `for` loop iterates backwards from index `n-2` to `0`
  - For each index `i`, `suffix[i]` is calculated as `suffix[i+1] * nums[i+1]`
  - This means `suffix[i]` contains the product of all elements after index `i`

- **Computing the final answer:**
  - The final `for` loop iterates through all indices
  - For each index `i`, `ans[i]` is calculated as `prefix[i] * suffix[i]`
  - This gives the product of all elements except `nums[i]`, since:
    - `prefix[i]` = product of all elements before `i`
    - `suffix[i]` = product of all elements after `i`
    - Their product excludes only `nums[i]`

- The method returns the `ans` array containing the desired products.

---

## Time Complexity & Space Complexity

### Time Complexity: **O(n)**

The algorithm performs three separate passes through the array:

- **First pass:** Building the `prefix` array by iterating from index `1` to `n-1`
- **Second pass:** Building the `suffix` array by iterating from index `n-2` to `0`
- **Third pass:** Computing the final `ans` array by iterating through all indices

Each pass visits every element exactly once, and all operations within the loops (multiplication, assignment) run in **constant time** `O(1)`.

Since there are three sequential loops, each taking `O(n)` time, the total time complexity is `O(n) + O(n) + O(n) = O(3n)`, which simplifies to **O(n)**.

---

### Space Complexity: **O(n)**

The solution uses three additional arrays:

- `ans[]` of size `n` - stores the final result
- `prefix[]` of size `n` - stores prefix products
- `suffix[]` of size `n` - stores suffix products

Each array requires linear space proportional to the input size.

The total auxiliary space used is `O(n) + O(n) + O(n) = O(3n)`, which simplifies to **O(n)**.

**Note:** If the output array `ans[]` is not counted towards space complexity (as per some conventions), the space complexity would still be **O(n)** due to the `prefix` and `suffix` arrays.

---

## Key Takeaways

- The problem is solved using the **prefix-suffix product approach**, avoiding division.
- Two auxiliary arrays (`prefix` and `suffix`) store cumulative products from left and right respectively.
- The **prefix array** at index `i` contains the product of all elements before index `i`.
- The **suffix array** at index `i` contains the product of all elements after index `i`.
- Multiplying `prefix[i]` and `suffix[i]` gives the product of all elements except `nums[i]`.
- The algorithm handles **edge cases** naturally, including arrays with zeros.
- The solution achieves **O(n) time complexity** with three linear passes.
- **No division operation** is used, satisfying the problem constraint.
- The approach can be optimized to **O(1) extra space** by computing prefix and suffix products directly in the output array.