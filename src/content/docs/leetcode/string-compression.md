# LeetCode 443. String Compression

**Difficulty:** Medium
**Topics:** Two Pointers, String
**Problem Link:** [443. String Compression](https://leetcode.com/problems/string-compression/description/)

---

## Explanation

Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:

- If the group's length is 1, append the character to `s`.
- Otherwise, append the character followed by the group's length.

The compressed string `s` **should not be returned separately**, but instead, be stored **in the input character array `chars`**. Note that group lengths that are 10 or longer will be split into multiple characters in `chars`.

After you are done **modifying the input array**, return _the new length of the array_.

You must write an algorithm that uses only **constant extra space**.

## Examples

**Example 1:**

**Input**: chars = ["a","a","b","b","c","c","c"]
**Output**: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
**Explanation**: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

**Example 2:**

**Input**: chars = ["a"]
**Output**: Return 1, and the first character of the input array should be: ["a"]
**Explanation**: The only group is "a", which remains uncompressed since it's a single character.

**Example 3:**

**Input**: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
**Output**: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"]
**Explanation**: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

---

## Java Solution

```java
class Solution {
    public int compress(char[] chars) {
        int ans = 0;

        for (int i = 0; i < chars.length;) {
            final char letter = chars[i];
            int count = 0;
            while (i < chars.length && chars[i] == letter) {
                ++count;
                ++i;
            }
            chars[ans++] = letter;
            if (count > 1)
                for (final char c : String.valueOf(count).toCharArray())
                    chars[ans++] = c;
        }

        return ans;
    }
}
```

---

## Approach

- The problem requires **in-place compression** of consecutive repeating characters with constant extra space.
- We use a **write pointer** (`ans`) to track where to write compressed data and a **read pointer** (`i`) to traverse the array.
- For each group of consecutive characters, we **count the occurrences** and write the character followed by its count (if greater than 1).
- The count is converted to a string and each digit is written individually to handle counts ≥ 10.
- The function returns the new length of the compressed array.

## Explanation

- The variable `ans` is initialized to track the **write position** in the array → `int ans = 0;`.
- A `for` loop is used where `i` serves as the **read pointer**, starting at 0 and continuing until all characters are processed.
  - Note that `i` is **not incremented in the loop header** but inside the inner `while` loop.
- For each iteration, the current character is stored → `final char letter = chars[i];` and a counter is initialized → `int count = 0;`.
- The inner `while` loop counts consecutive occurrences of the current character:
  - It checks if `i` is within bounds and if `chars[i]` equals the current `letter`.
  - Both `count` and `i` are incremented with each matching character → `++count; ++i;`.
  - For example, if `chars = ['a','a','a','b','b']`, when `letter = 'a'`, the loop counts 3 occurrences and moves `i` to index 3.
- After counting, the character is written to the array at position `ans` → `chars[ans++] = letter;`.
  - The post-increment operator `ans++` writes at the current position then increments for the next write.
- If the count is greater than 1, the count must be written as well:
  - The count is converted to a string → `String.valueOf(count)`.
  - This string is converted to a character array → `.toCharArray()`.
  - A `for-each` loop iterates through each digit character and writes it to the array → `chars[ans++] = c;`.
  - For example, if `count = 12`, it writes `'1'` and `'2'` as separate characters at positions `ans` and `ans+1`.
- The outer loop continues until `i` reaches the end of the array, at which point all characters have been processed.
- Finally, `ans` represents the new length of the compressed array and is returned.

> **Two Pointers Technique:** The variable `i` acts as the read pointer to traverse and group consecutive characters, while `ans` acts as the write pointer to place compressed output, ensuring in-place modification without extra space.

## Time Complexity

- Let `n` be the length of the input array `chars`.
- The outer loop processes each character exactly once, as `i` advances through the entire array → `O(n)`.
- The inner `while` loop counts consecutive characters, but each character is visited only once across all iterations → `O(n)` total.
- Converting count to string and writing digits takes `O(d)` where `d` is the number of digits (at most `log₁₀(n)`), but across all groups this is amortized into `O(n)`.

**Overall time complexity:** `O(n)`

## Space Complexity

- The algorithm uses only a constant number of variables (`ans`, `i`, `letter`, `count`) → `O(1)`.
- The output is stored in the input array itself, requiring no additional space.
- The `String.valueOf(count).toCharArray()` creates a temporary character array, but this uses `O(log n)` space for each count, which is still considered constant space in the context of the problem constraints.

**Overall space complexity:** `O(1)`

## Key Takeaways

1. Uses **two pointers** (`i` for reading, `ans` for writing) for in-place array modification without extra space.
2. Efficiently counts consecutive characters with a single pass through the array.
3. Handles multi-digit counts by converting to string and writing each digit individually.
4. Modifies the input array directly, returning only the new length.
5. Achieves linear time complexity with constant space, meeting problem constraints.
6. The post-increment operator `ans++` simplifies writing and advancing the write pointer in one step.
7. The outer loop's increment is handled by the inner loop, allowing flexible advancement based on group size.