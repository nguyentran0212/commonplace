---
date: 2020-08-16
title: "Excel Tricks"
cover: "https://unsplash.it/400/300/?random?BigTest"
categories: 
    - Technology Tutorial
slug: "excel-tricks"
tags:
    - excel
---

Collection of tricks in working with Excel spreadsheets. These are hard-earned pieces of knowledge that I might need to use again and again. 

## Exporting Tab Delimited Files

To export tab delimited files with excel, choose the format `Tab delimited file (.txt)` when `Save As` a file. Using the `csv` option would create comma delimited files. 

## Split Text in a Cell

We can split the text into parts using a delimiter and capture a part of that text using the following formula

```sh
# Get the first word of the text
=LEFT(A2, SEARCH(" ",A2,1))

# Get the last word of the text
=RIGHT(A2,LEN(A2)-SEARCH(" ",A2,1))
```



Some important excel functions:

- `Search([delimiter], [text], [starting location])`
- `LEFT([text to extract], [number of characters to extract])`
- `RIGHT([text to extract], [number of characters from the right])`



## Combine texts and values

We can combine different content together to form the content of a cell using `&`

## Find time difference between two points

Assume that the endpoint and starting point of a period are stored in B1 and A1 cells. We can find the time difference between them as follows:

```sh
# The calculation results in the number day, so we multiply by 24 to find hours and 1440 (i.e., 24 x 60) to find the minutes
=(B1 - A1) * 24
=(B1 - A1) * 1440
```



