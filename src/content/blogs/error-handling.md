---
title: Error Handling as Part of Design
date: 2026-01-18
tags: ['Software Design', 'Developer Practices']
---


# Error Handling as Part of Design

Planning for errors was a foreign concept for me during my first project. Because if the code runs on my entered test cases, then it is fine and ready to compete with a multi-billion dollar company!

When we think of design, as we did in our last article (Designing Before Implementation: When It Helps), we often think about how things work when everything goes right.

The happy path.

The perfect input.

The ideal user.

But real-life software is a combination of network failures, API chaos, invalid inputs, and so on, thereby making error handling an integral part of design. Because if the system goes crazy after something unexpected happens, then that is not a user problem but rather a design problem.

---

## Hiding Errors or Handling Errors

Error handling — try-catch blocks. That is our introduction to error handling for all of us. And for most of us, the thinking stops there as well. But error handling is much, much, **MUCH** bigger than that.

To understand it, let’s take a very basic example — a login form.

Simple. Right?

Well, if the user enters a correct email and password → done! But a lot can actually go wrong.

For instance:

- Email is in an invalid format
- Password field is empty
- The server is down
- Internet connection drops

During these instances, how should a system behave then?

- Crash! If only you want to have an unhappy lot of people.
- Fail silently. Worse than a crash!
- Tell the user what happened? Absolutely YES!!!

User sees:

- “Invalid email format” instead of “Login failed”
- “Incorrect password” instead of “Something went wrong”
- “Network issue, please try again” instead of a blank screen

This is proper error handling. Not writing more code, but rather respecting the person on the other side of the screen.

---

## Designing For Failure

Yes!

When we keep in mind, assuming the user will enter the correct password and email, we overlook input validation, user messages, and system failures, to name a few.

Now let us shift our mindset from:

**“How does this feature work?”** to **“How will this feature fail?”**

That is all.

You now start planning for:

- invalid inputs
- system failures
- network issues
- fewer crashes

Planning for failure, though it seems pessimistic, sets you up for a successful experience — not just when things work, but when they don’t.

When we design by keeping errors in mind, we become responsible.

---

## Error Handling For Maintainability

Well-designed errors allow:

- logs to be helpful
- code to be cleaner
- flows to be clearer
- fewer things to break unexpectedly
- systems to extend easily

Making the system understandable when it breaks.

---

## Final Thoughts

A system that works only when everything goes right is set up for failure from the start.

Real systems assume things will go wrong and respond to them gracefully. Planning things from the very beginning is how a system is shaped from the start.
