---
date: 2020-08-16
title: "Latex Tricks"
cover: "https://unsplash.it/400/300/?random?BigTest"
categories: 
    - Technology Tutorial
slug: "latex-tricks"
tags:
    - latex
---

## Theorems and Proofs

The idea is defining a theorem or other mathematical environment using `\newtheorem` command, then use the environment later. 

```latex
% Create a new environment named theorem, which would appear in the PDF as Theorem. The counter of this theorem would be recounted every section
\newtheorem{theorem}{Theorem}[section]

% This corollary environment is recounted after every theorem
\newtheorem{corollary}{Corollary}[theorem]

% This lemma environment uses the same counter as the theorem environment
\newtheorem{lemma}[theorem]{Lemma}
```

Proof is provided by the `amsthm` package. 

```latex
\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[english]{babel}

\usepackage{amsthm}

\begin{document}
\begin{lemma}
Given two line segments whose lengths are $a$ and $b$ respectively there 
is a real number $r$ such that $b=ra$.
\end{lemma}

\begin{proof}
To prove it by contradiction try and assume that the statement is false,
proceed from there and at some point you will arrive to a contradiction.
\end{proof}
\end{document}
```

## Special Characters

When writing mathematical expressions, sometimes, one needs to use special looking alphabets, but not Greek alphabets. Latex supports this with the following fonts:

```latex
% All of these must be placed within $$ or equation environment
\mathcal{A}
\mathfrank{A}
\mathrm{A}
```





