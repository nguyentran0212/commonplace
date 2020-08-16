---
date: 2020-08-15
title: "jQuery and Javascript Reference"
cover: "https://unsplash.it/400/300/?random?BigTest"
categories: 
    - Technology Tutorial
slug: "jquery-javascript"
tags:
    - jquery
    - javascript
    - web-development
---

## jQuery

### jQuery event.stopPropagation()

The `event.stopPropagation()` stops an event from bubbling to parent elements, preventing any parent event handlers from being executed. 

```js
// The span was defined inside a <p>, which is inside a <div> 
// the event.stopPropagation() ensures that only the handler of the <span> is called. 
// Otherwise, everytime I click <span>, other handlers would fire as well. 
$("span").click(function(event){
  event.stopPropagation();
  alert("The span element was clicked.");
});
$("p").click(function(event){
  alert("The p element was clicked.");
});
$("div").click(function(){
  alert("The div element was clicked.");
});
```