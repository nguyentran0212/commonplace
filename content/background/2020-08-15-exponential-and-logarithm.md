---
date: 2020-08-15
title: "Growth and Exponential"
cover: "https://source.unsplash.com/random"
categories: 
    - Background
slug: "exponential-logarithm"
tags:
    - mathematics
    - algebra
---

## Growth

What does it mean by growth? Informally, it can be understood that after every cycle, a portion of the initial amount would be added to it. For instance, a 50\% growth means that after every cycle, 50\% of the initial amount would be added to it. In other words, $FinalAmount = InitialAmount \times (1+50\%)$. 

If we continue the circle, the most important thing to notice is that the initial amount of the next cycle is the final amount of the previous cycle. Thus after two cycles of 50\% growth, $FinalAmount = (InitialAmount \times (1+50\%) ) \times (1+50\%)$. This relationship can be formalized as follows:

$$
FinalAmount = InitialAmount \times Growth \\
Growth = (1+return)^x
$$

The variable $x$ denotes the number of growth cycles. Cycles are usually known as **period**.

## Discrete, Compound, and Continuous Growth

The introduction of the growth amount can happen at the end of a period.  This form of growth is called **Discrete Growth**. 

The growth can also happen many times within a period, adding up to the return percentage of that period. For instance, a 50% growth in four weeks can be broken into four weekly growths, each contributes 12.5% to the 50%. This form of growth is called **Compound Growth**. 

Let $n$ be the number of growths within a period, then:
$$
Growth = \left(1 + \frac{rate}{n}\right)^{nx}
$$

Here is an interesting observation. Compounding growth actually shorten the cycles, making the growth happen more often. While the relation between $12.5\% \times 4$ and 50\% appears linearly, it is actually not the case when we look at the formula. As a result, given the same $x$ and $return$, if $n > 1$, compound growth always returns a larger final value than discrete growth. Noted that compound growth is still a form of discrete growth, just with more smaller periods. 

**Continuous growth** is different. It means that the growth happens continuously at every moment, not jumpy between periods of compounds. **Continuous growth happens at the rate $e^x$**.

### An interesting observation concerning growth rate 

It is helpful to distinguish between the "input rate" and the "actual growth rate" of the compound and continuous growth processes. The input rate, which usually states something like "50% a year" is actually smaller than the compound of the continuous rate, calculated as $\left(1 + \frac{rate}{n}\right)^{n}$ or $e^{rate}$. 

The reason is that within the period, the fractions generated from the initial value also grow by themselves at the input rate, thus the total growth rate is larger than the input rate. 

### Negative Growth

Growth with a negative rate is called **decay**. For instance, an object losing 100% of its weight every year, compound continuously has the following growth / decay after $x$ years: 

$$
growth = e^{-1\times x} = \frac{1}{e^x}
$$

Interestingly, this rate is smaller than the input rate, because as the quantity of the decaying stuff reduces, the rate slows down as well. 

## The constant e

The more we shrink the period by adding more compounds, the  higher the compound growth. When the number of compounds $n$ approaches infinity, we also approaches the maximum compound growth. 

The constant $e$ is the max compound growth when the return is 100\%. Think of this constant as the limit of the growth in one time period as we increase the number of compounds. 

$$
e = \lim\limits_{n\rightarrow\infty}\left(1 + \frac{1}{n}\right)^n=2.718...
$$

### Translating e to other growth rates and time periods

If the growth rate is not 100\% each period, and the growth happens over multiple periods, then maximum compound growth of this rate $r$ over $t$ periods is:

$$
growth = e^{r \times t}
$$

How come? The constant $e$ applies to the growth rate of 100\% each period. If we compound 100 times in this period, we will have $e \approx \left(1+\frac{1}{100}\right)^{100}=\left(1+0.1\right)^{100}$. 

Now, let's assume that we are dealing with the growth rate of 50\% each period. If we compound 50 times, we will have $growth = \left(1 + \frac{0.5}{50}\right)^{50}=\left(1 + 0.1\right)^{50}$. Thus, $growth \approx e^{0.5}$.

All of this calculation happens within 1 time period, whatever that is. If we have $x$ time periods of growth, then the growth would be $e^x$. Thus, bringing it all together, we reach equation \ref{eq:growth_to_e}.

### Interesting observation regarding e^x

Recall that $x= r \times t$. Thus $e^x$ denotes the maximum compound growth at the rate $x$ over one period, or the rate of 100% over $x$ periods, or any mixture between these extremes. 

For instance, let's consider the growth $e^{0.3}$. This can means:
- The growth of 30\% in one period (e.g., year)
- The growth of 3\% in 10 periods
- The growth of 0.3\% in 100 periods