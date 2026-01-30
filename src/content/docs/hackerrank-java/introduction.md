# Java - Introduction

> [Link](https://www.hackerrank.com/challenges/welcome-to-java/problem?isFullScreen=true)

**Welcome to the world of Java! In this challenge, we practice printing to stdout**

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

### Solution

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

### Java Basics for This Challenge

**1. Class**

- A class is like a **blueprint** or **container** for your program.
- Every Java program must have at least one class.

**2. Main Method**

- `public static void main(String[] args)` is **the entry point** of any Java program.
- When you run the program, Java starts executing from this method.
- Think of it like the “start button” of your program.

**3. System.out.println()**

- This prints text to the screen.
- `println` automatically moves to the **next line** after printing.

    ```System.out.println("Hello, World.");```

    ```System.out.println("Hello, Java.");```

**4. Why Two Print Statements?**

- The challenge requires **two separate lines**, so we can either use **two `println` statements** or include a newline character (`\n`) within a single print statement. The purpose of `\n` is to insert a **line break**, which moves the cursor to the next line so that the text appearing after it is printed on a new line.
    ```System.out.println("Hello, World.\nHello, Java.");```

> In Java, you define a class, start execution from the main method, and use `System.out.println()` to print to the screen.

---

### Explanation

- This challenge is to get familiar with printing statements on the output screens in Java.
- Java program always starts the execution from the `main()` method.
- `System.out.println` is used to display output on the main screen.
- `println` displays the output on the screen and moves the cursor on the next line. `print` on the other hand keeps the cursor on the same line.
- `\n` can be used instead of two separate `println` to get the output on two lines.
- There is no input for this challenge. The goal is to display a text on the screen and get familiar with the Java syntax.

### Time Complexity - O(1)

The program executes the fixed amount of statements i.e., 2 output statements every time the program is run. There is no input so the program remains static.

### Space Complexity - O(1)

The program always used a constant amount of memory, and no extra variables or data structures are required.

### Key Takeaways

- Every Java program should have a **class** and a `main()` method.
- The `main` method is the starting point of the program.
- `System.out.println()` is used to print output to the console.
- `println` automatically adds a new line after printing.
- The newline character `(\n)` can be used to print multiple lines within a single statement.
- Java syntax is strict, so proper structure and formatting are important.
- This challenge builds the foundation for understanding more advanced Java concepts.
