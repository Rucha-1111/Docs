---
title: "What I Learned About Technical Writing (And Why Your Documentation Probably Needs Help)"
date: 2026-01-23
tags: ['Documentation', 'Technical Writing', 'Software Development']
---

Let's be honest: most technical documentation is terrible. You know it, I know it, and that frustrated developer at 2 AM googling "how to implement OAuth" definitely knows it. After completing Google's Technical Writing course, I finally understand why—and more importantly, how to fix it.

## What Actually Is Technical Writing?

_[**Technical writing**](https://technicalwriterhq.com/writing/technical-writing/) is a form of writing that focuses on conveying complex information in a clear, concise, and easy-to-understand manner. It creates user manuals, instructional guides, technical reports, and software documentation. The goal is to break down technical concepts and processes into simple, digestible information that the intended audience can easily follow, whether they are experts or novices._

Or to put it in simple words :- Technical writing is the art of explaining complex stuff without making people's brains hurt. It's the difference between documentation that gets you promoted and documentation that gets thrown into the digital bin.

At its core, technical writing transforms complicated technical concepts into clear, actionable information. Whether you're writing API documentation, user guides, or internal wikis, the mission stays the same: help your reader accomplish something without needing a PhD to understand you.

Now before we get into the grammar rules and technical details, a fair question: _why did I take this course in the first place?_
I realized that writing had quietly become my favorite part of building things. Not just writing code, but writing about it, explaining how something works, why it exists, and how someone else can use it without frustration. I’d often spend more time refining README files, guides, and explanations than the actual implementation. This course felt like the right way to turn that instinct into a real skill—to learn how clarity is designed, not guessed, and how good documentation can be just as impactful as good code.

## The Grammar Refresher Nobody Asked For (But Everyone Needs)

Here's something embarrassing I discovered: I'd completely forgotten what half the parts of speech actually do. When you speak a language fluently, you stop thinking about _why_ sentences work - you just know they do. Turns out, that's a problem when you're trying to write crystal-clear documentation.

Let me break down the building blocks:

### The Core Players

**Nouns** are your people, places, things, and concepts. In code, they are your classes and variables. When I write "The database stores user credentials," both "database" and "credentials" are nouns.

**Pronouns** are shortcuts that reference nouns you've already mentioned. They're like pointers in programming - super useful until they create confusion. More on that disaster later.

**Verbs** are action words that show what's happening. Every sentence needs at least one. "The API returns JSON" has a nice, clear verb. "The API is being used for JSON returning" has a verb that should be fired.

**Adjectives** describe nouns (red balloon, critical error, annoying bug), while **adverbs** modify verbs, adjectives, or other adverbs (runs quickly, extremely important, very slowly).

**Prepositions** show relationships between things, usually answering "where?" The config file is _in_ the root directory, _on_ the server, _under_ version control.

**Conjunctions** connect words or phrases _within_ a sentence (and, but, or), while **transitions** connect entire sentences together (however, therefore, meanwhile).

### Why This Actually Matters

Understanding these components isn't an academic exercise. When your documentation confuses users, it's usually because one of these elements went rogue. Pronouns point to the wrong noun. Weak verbs muddy the action. Transitions vanish, leaving readers lost between ideas.

## The Terminology Tightrope: Acronyms, Glossaries, and Consistency

One lesson hit hard: inconsistent terminology destroys comprehension faster than anything else.

### The Acronym Problem

Remember when acronyms meant something to you? HTML used to stand for HyperText Markup Language. Now? Most web developers just call it HTML and move on. The expansion has become irrelevant.

Here's the rule: spell out an acronym on first use if your audience might not know it, then use the acronym consistently afterward. For example:

> "Configure your Continuous Integration/Continuous Deployment (CI/CD) pipeline. The CI/CD system will automatically run tests on each commit."

Don't flip-flop between "CI/CD," "continuous integration," and "the deployment system." Pick one term and stick with it like your documentation depends on it (because it does).

### When You Need a Glossary

If you're using more than five specialized terms that readers might not know, create a glossary. Think of it as a mini-FAQ for your terminology. Your future self, and every confused reader, will thank you!

## Pronouns: The Silent Documentation Killer

Pronouns are evil geniuses. They make writing flow smoothly but create ambiguity that can ruin your documentation.

Consider this nightmare:

> "After the API calls the webhook, it processes the response. If it fails, it retries up to three times before it logs an error."

What does "it" refer to in each instance? The API? The webhook? The response? Nobody knows, and that's the problem.

Here's the fix:

> "After the API calls the webhook, the API processes the response. If the webhook fails, the API retries up to three times before logging an error."

Yes, it's more repetitive. Yes, it's also crystal clear. In technical writing, clarity beats elegance. Every. Single. Time.

### The "This" and "That" Trap

These pronouns are particularly sneaky:

> "The function validates input before processing. This improves security."

What's "this"? The validation? The processing? The entire previous sentence? Clarify it:

> "The function validates input before processing. This validation step improves security."

One extra word eliminates all ambiguity.

## Active Voice vs. Passive Voice: The Showdown

Here's the formula:

- **Active Voice:** Actor + Verb + Target
- **Passive Voice:** Target + Verb + Actor

Active voice examples:

- The developer writes the code.
- The system processes requests.
- You configure the settings.

Passive voice examples:

- The code is written by the developer.
- Requests are processed by the system.
- The settings are configured.

### Why Active Voice Wins

Active voice is direct, clear, and assigns responsibility. It tells you who does what. Passive voice hides the actor, which creates confusion in technical documentation:

> "The database was deleted."

By whom? A script? A user? A very confused intern? We'll never know.

Compare it to:

> "The automated cleanup script deleted the database."

Now we know exactly what happened and can debug accordingly.

**Important note:** Passive voice isn't always wrong. Sometimes the actor doesn't matter ("The server was restarted at 3 AM"). Just use it deliberately, not by accident.

## Writing with Clarity: Strong Verbs and Concrete Language

### Pick Strong Verbs

Weak verbs make documentation squishy and vague. Strong verbs make it precise and actionable.

**Weak:** The application is able to handle 10,000 requests.
**Strong:** The application handles 10,000 requests.

**Weak:** The function makes a determination about user permissions.
**Strong:** The function determines user permissions.

**Weak:** There is a process that validates the input.
**Strong:** The validator checks the input.

See the pattern? Strong verbs cut the fluff and get to the point.

### Eliminate "There Is" and "There Are"

These phrases are documentation weeds. They add words without adding meaning.

**Before:** There are three configuration options available to users.
**After:** Three configuration options are available to users.
**Even better:** Users can configure three options.

### Ditch the Dictionary Words and Flowery Language T

Turns out, elegance in poetry can be chaos in documentation. Technical documentation should be packed with facts, not with adjectives like "extremely," "very," or "incredibly." Your readers don't need poetry, they need instructions.

**Bad:** The API provides incredibly robust and extremely powerful functionality.
**Good:** The API provides authentication, rate limiting, and caching.

Facts beat flattery every time.

## The Power of Shorter Sentences

Long sentences are like long meetings: occasionally necessary, usually avoidable, and almost always painful.

**Too long:** "The system, which processes user requests by first validating authentication tokens and then checking rate limits before finally executing the requested operation, can handle approximately 50,000 requests per minute during peak load times."

**Better:** "The system processes user requests in three steps: validate authentication, check rate limits, and execute operations. It handles 50,000 requests per minute during peak loads."

Break complex ideas into digestible chunks. Your readers' working memory will thank you.

### When to Use Lists Instead

If you're explaining three or more things, consider using a list instead of a run-on sentence. Lists make information scannable and reduce cognitive load.

## Bulleted vs. Numbered Lists: There's Actually a Difference

Before this course, I used bullet points and numbered lists interchangeably. Rookie mistake.

Here's the rule: **Order matters? Use numbers. Order doesn't matter? Use bullets.**

### Bulleted Lists (Unordered)

Use bullets when the sequence is irrelevant:

The API supports the following authentication methods:

- OAuth 2.0
- API keys
- JWT tokens

You can rearrange these items without changing the meaning.

### Numbered Lists (Ordered)

Use numbers when sequence matters:

To make a peanut butter and jelly sandwich:

**Prerequisites:** 2 slices of bread, peanut butter, jelly, a knife

1. Take 2 slices of bread
2. Spread peanut butter on one slice
3. Spread jelly on the other slice
4. Press the slices together
5. Cut and serve

Doing step 2 before step 1 will get messy. Order matters!

### Start with Imperative Verbs

Numbered lists work best when each item starts with a command verb (imperative verb). This creates parallel structure and makes instructions action-oriented:

1. **Download** the installer from the website
2. **Run** the installation wizard
3. **Configure** your preferences
4. **Restart** the application

This pattern is scannable, clear, and impossible to misunderstand. Take our "Peanut Butter & Jelly Sandwich" example. The first word of each point is a **verb**.

### Parallel Structure Matters

Keep your list items grammatically consistent—each item should start the same way (same verb form, tone, and structure).

**Non-parallel (bad):**

- Configuring the database  ← starts with a gerund (-ing)
- Set up authentication     ← starts with an imperative verb
- The cache should be enabled ← starts with a full sentence

**Parallel (good):**

- Configure the database    ← all imperative verbs
- Set up authentication
- Enable the cache

Notice how in the good version, every item **starts with a verb in the same form**. This makes lists easier to scan, more professional, and prevents your reader from stumbling over inconsistent phrasing.

### What's an Embedded List?

An **embedded list** is a list of items included **inside a sentence**, separated by commas (and usually with “and” before the last item).

**Example:**
"The system supports JSON, XML, and CSV formats."

Embedded lists are best when:

- The items are short
- There are only a few items
- You want to keep the sentence flowing

Use **bulleted or numbered lists** instead when:

- Items are long or complex
- Each item needs explanation
- You want the reader to scan them quickly

Think of it this way: embedded lists are like a **mini list inside a sentence**, while bulleted/numbered lists are like **full, standalone lists** for clarity.

## The "That" vs. "Which" Mystery Solved

This one trips up even experienced writers.

**That** introduces essential information (restrictive clause):
> "Install the packages that are listed in requirements.txt."

The phrase "that are listed in requirements.txt" is essential, we're only talking about those specific packages.

**Which** introduces bonus information (non-restrictive clause) and uses commas:
> "The authentication system, which uses OAuth 2.0, requires HTTPS."

The phrase "which uses OAuth 2.0" is extra context. The sentence works without it.

Pro tip: If you can remove the clause and the sentence still makes sense, use "which" with commas. If removing it breaks the meaning, use "that" without commas.

## Paragraphs: The Forgotten Foundation

Good paragraphs are like good functions: they do one thing well. (_Just a little programming humour so you do not get bored mid-blog!_)

### One Paragraph = One Topic

Each paragraph should focus on a single idea. When you switch topics, start a new paragraph. This keeps your documentation organized and scannable.

### The Sweet Spot

Too short (one sentence): feels choppy and disconnected.
Too long (15+ sentences): becomes a wall of text nobody reads.
Just right (3-6 sentences): provides context, details, and breathing room.

### Answers the Reader's Questions

A strong paragraph answers three questions:

- **What:** What is this thing?
- **Why:** Why does it matter?
- **How:** How does it work or how do I use it?

Example:

> **What:** You should only hit snooze a limited number of times, **Why:** because infinite snoozing turns a calm morning into a full-blown life crisis, **How:** after the fifth snooze, you wake up late, skip breakfast, and spend the rest of the day blaming that one “just five more minutes.”

## Know Your Audience (Or Watch Your Documentation Fail)

Here's a truth bomb: documentation written for everyone works for no one.

Good documentation explicitly states its intended audience at the beginning. For example:

> **Audience:** This guide is for backend developers familiar with Node.js and Express who want to implement authentication in their APIs.

When you know your audience, you can:

- Use the right level of technical detail
- Skip explaining things they already know
- Focus on what they actually need

Writing for senior developers? Skip the "what is a REST API" intro. Writing for beginners? Define your terms and provide context.

## Tables: When to Use Them

Tables organize information that has multiple attributes. Use them when you're comparing things or presenting structured data:

| HTTP Method | Action | Example |
|-------------|--------|---------|
| GET | Retrieve data | Fetch user profile |
| POST | Create data | Create new user |
| PUT | Update data | Update user email |
| DELETE | Remove data | Delete user account |

Tables work great for reference material but terrible for narrative explanations!

## Why This All Matters

Technical writing isn't just about following rules, it's about respecting your readers' time and brain power. Every ambiguous pronoun, every weak verb, every wall-of-text paragraph makes your documentation harder to use. And hard-to-use documentation means frustrated users, wasted time, and angry developers.

The difference between good documentation and great documentation is often just attention to these fundamentals. Clear pronouns. Strong verbs. Active voice. Appropriate lists. Focused paragraphs.

Master these basics, and you'll write documentation that people actually want to read. And in a world drowning in terrible docs, that's a superpower worth having.

---

## Final Thoughts

Taking [Google's Technical Writing Course](https://developers.google.com/tech-writing) forced me to confront uncomfortable truths about my writing. I'd been using pronouns carelessly, mixing up list types, and drowning sentences in passive voice.

But here's the good news: technical writing is a skill, not a talent. You can learn it, practice it, and get dramatically better at it. Start with one improvement, maybe eliminating "there is" constructions or using active voice, and build from there.

Your future readers (and your career) will thank you.

---

_Want to improve your technical writing? Start by reviewing your last piece of documentation through this lens. How many ambiguous pronouns can you find? How many passive voice constructions? The answers might surprise you._
