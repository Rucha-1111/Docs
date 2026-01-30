# Java Stdin and Stdout I

> [Link](https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/problem?isFullScreen=true)

**Most HackerRank challenges require you to read input from stdin (standard input) and write output to stdout (standard output).**

### Task

In this challenge, you must read  integers from stdin and then print them to stdout. Each integer must be printed on a new line. To make the problem a little easier, a portion of the code is provided for you in the editor below.

**Input Format**

There are  lines of input, and each line contains a single integer.

**Sample Input**

```
42
100
125
```

**Sample Output**

```
42
100
125
```

### Solution

```java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        sc.close();
    }
}
```

### Java Basics For This Challenge

- Here’s a clean **“Java Basics for This Challenge”** explanation you can use.

---

## Java Basics for This Challenge

- **Import Statements**

  - `import java.io.*;` and `import java.util.*;` allow us to use built-in Java classes.
  - These libraries include tools for handling input, output, and utilities like `Scanner`.

- **Class Declaration**

  - `public class Solution` defines the main class of the program.
  - In Java, every program must have at least one class.
  - The class name must match the file name when submitting on platforms like HackerRank.

- **Main Method**

  - `public static void main(String[] args)` is the entry point of the program.
  - Java starts executing the code from this method.
  - Whatever is written inside this method runs when the program is executed.

- **Scanner for Input**

  - `Scanner sc = new Scanner(System.in);`
  - The `Scanner` class is used to take input from the user through the keyboard.
  - `System.in` tells the program to read input from standard input (console).

- **Reading Integers**

  - `int a = sc.nextInt();`
  - `int b = sc.nextInt();`
  - `int c = sc.nextInt();`
  - `nextInt()` reads integer values entered by the user.
  - Each value is stored in a separate variable.

- **Printing Output**

  - `System.out.println(a);`
  - `System.out.println(b);`
  - `System.out.println(c);`
  - `println()` prints the value to the screen and moves to the next line after printing.

- **Closing the Scanner**

  - `sc.close();`
  - This is used to free system resources after input is taken.
  - It is considered good programming practice.

---

### Explanation

- This program reads three integer inputs from the user and prints them on separate lines.
- The `Scanner` class is used to take input from standard input (keyboard).
- Each call to `nextInt()` reads one integer value entered by the user.
- The values are stored in three variables: `a`, `b`, and `c`.
- `System.out.println()` is then used to print each value on a new line.
- The challenge mainly tests your understanding of basic input and output operations in Java.
- Closing the scanner using `sc.close()` is good practice as it prevents resource leaks.

---

### Time Complexity

- **O(1)** — The program performs a fixed number of operations.
- It reads three integers and prints them without using loops or complex logic.
- Execution time does not depend on input size.

---

### Space Complexity

- **O(1)** — Only three integer variables are stored.
- No additional data structures are used.
- Memory usage remains constant.

---

### Key Takeaways

- The `Scanner` class is commonly used for taking input in Java.
- `nextInt()` reads integer values from user input.
- `System.out.println()` prints output and moves to the next line automatically.
- Java programs always start execution from the `main` method.
- Closing resources like `Scanner` is considered good coding practice.
- Understanding input and output is essential before moving to advanced Java concepts.
