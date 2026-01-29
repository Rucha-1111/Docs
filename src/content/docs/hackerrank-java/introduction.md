# [HackerRank Java - Introduction](https://www.hackerrank.com/challenges/welcome-to-java/problem?isFullScreen=true)

### Welcome to the world of Java! In this challenge, we practice printing to stdout.

The code stubs in your editor declare a Solution class and a main method. Complete the main method by copying the two lines of code below and pasting them inside the body of your main method.

``` java
System.out.println("Hello, World.");
System.out.println("Hello, Java.");
```

**Input Format**
There is no input for this challenge.

**Output Format**

You must print two lines of output:

Print `Hello, World.` on the first line.
Print `Hello, Java.` on the second line.

**Sample Output**

``` java
Hello, World.
Hello, Java.
```

## Solution

``` java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        System.out.println("Hello, World. \nHello, Java.");
    }
}
```

## Java Basics for This Challenge

1. **Class**

   * A class is like a **blueprint** or **container** for your program.
   * Every Java program must have at least one class.
   * In HackerRank, the class must be called `Solution` because the platform expects that name.

   ```public class Solution { ... }```

2. **Main Method**

   * `public static void main(String[] args)` is **the entry point** of any Java program.
   * When you run the program, Java starts executing from this method.
   * Think of it like the “start button” of your program.

   ```public static void main(String[] args) { ... }```

3. **System.out.println()**

   * This prints text to the screen.
   * `println` automatically moves to the **next line** after printing.


    ```System.out.println("Hello, World.");```

    ```System.out.println("Hello, Java.");```

5. **Why Two Print Statements?**

   * The challenge wants **two separate lines**, so we can use two `println` statements as well as put `\n` in one line.
    ```System.out.println("Hello, World.\nHello, Java.");```

> In Java, you define a class, start execution from the main method, and use `System.out.println()` to print to the screen.

---

## Explanation


## Time Complexity

## Space Complexity

## Key Takeaways



