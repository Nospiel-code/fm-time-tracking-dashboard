# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot


### Links

- [Solution URL](https://github.com/Nospiel-code/fm-time-tracking-dashboard)
- [Live Site URL](https://nospiel-code.github.io/fm-time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned about aria-labels and how to use them.

```
<button aria-label="interactive button">
                <svg aria-hidden="true"> 
```

How to fetch JSON Data using JavaScript

```
function getJsonData(timeframe) {
    fetch("./data.json")
        .then((res) => {
            return res.json();
        }).then(data => {
```


### Useful resources

- [How to fetch JSON](https://www.geeksforgeeks.org/read-json-file-using-javascript/) - This helped me to load the JSON data for the project. I will use this approach for other projects as well.
- [Aria-Labels]((https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)) - Mozilla Docs on how to use Aria-Labels.

## Author

- Frontend Mentor - [@yNospiel-code](https://www.frontendmentor.io/profile/Nospiel-code)
- Twitter - [@tomsdev4](https://www.twitter.com/tomsdev4)
