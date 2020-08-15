---
date: 2020-08-15
title: "Logarithm"
cover: "https://source.unsplash.com/random"
categories: 
    - Background
slug: "logarithm"
tags:
    - mathematics
    - algebra
---

The exponential lets us know how much stuffs we will have at a certain growth rate, based on the amount of time that we give it. On the other hand, **logarithm lets us know how much time we need to reach a final amount if that amount grows at a certain growth rate**. 

$$
e^x = growth \Leftrightarrow \ln(growth) = \log_e(growth) = x = r \times t
$$

Natural Logarithm is the amount of time periods $t$ necessary to reach a growth value, given that the rate is 100\% and the compound is continuous. 

## Logarithmic Arithmetic

The arithmetic of logarithm is as follows:

$$
\begin{aligned}
\ln(1) & = 0 \\
\ln(x) & = - \ln\left(\frac{1}{x}\right) \\
\ln(negative) & = undefined \\
\ln(a*b) & = \ln(a) + \ln(b) \\
\ln(a/b) & = \ln(a) - \ln(b)
\end{aligned}
$$

The expression $\ln(1)$ is the time it takes to growth from the current value to $1 \times$ the current value. Because we are already there, no time is needed, thus $\ln(1) = 0$.

To understand $\ln(x) = - \ln\left(\frac{1}{x}\right)$, we need to see that $\ln\left(\frac{1}{x}\right)$ means the time it takes to grow to the amount to the $\left(\frac{1}{x}\right)$ of the initial amount. In other words, it is the amount of time taken to shrink or decay an amount by $x$. It is the same amount of time, but in different direction. Therefore, intuitively, $\ln(x) = - \ln\left(\frac{1}{x}\right)$

Because we can never grow our initial positive value to a negative number, there is no such amount of time that we wait will make it happen. Thus $\ln(negative) = undefined$

How to understand $\ln(a*b)$? We can understand via an example. $\ln(9)$ is the time taken to grow to 9 times the initial amount. It is equivalent to waiting for the initial amount of grow 3 times, and for that amount to grow 3 more times to reach a factor of 9 in the end. The amount of time waiting for any initial amount to grow 3 times at 100\% rate, continuous compound is $\ln(3)$. Thus, $\ln(9) = \ln(3*3) = \ln(3) + \ln(3)$. Thus, it means that  $\ln(a*b) = \ln(a) + \ln(b)$.

How to understand $\ln(a/b)$? Think of it as the time taken for growing by $a$ minus the time taking to grow to $\frac{1}{b}$ or decay to $b$. Remember that growing to $b$ and decaying to $1/b$ requires the same amount of time, just in different directions. Thus, $\ln(a/b) = \ln(a) - \ln(b)$.

## Mental Math Shortcut: Rule of 72

This rule helps us to calculate quickly the amount of time it takes for an initial amount to double. It states that:

$$
\begin{aligned}
TimeToDouble = \frac{72}{RateInPercentage}
\end{aligned}
$$

It is derived based on $ln(2) = 0.693$, which means that $Rate \times TimeToDouble = 0.693$, which means $TimeToDouble = \frac{0.693}{Rate} \approx \frac{72}{RateInPercentage}$. The number 72 was chosen for being easier for mental calculation. 