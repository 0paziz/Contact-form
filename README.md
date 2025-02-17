# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


### Screenshot

![](./screenshot.jpg)
DesktopView States:

![Data Entry](SolutionDesing/DesktopviewDataEntry.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/0paziz/Contact-form)
- Live Site URL: [Add live site URL here](https://0paziz.github.io/Contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Sass
- Mobile-first workflow
- git , github
- DOM -javaScript


### What I learned

This challenge was quite interesting! I really enjoyed figuring out and working on this contact form challenge. I learned a lot of features, including form validation and styling, to achieve the final goal. It was an amazing challenge, and now I am proud of myself for reaching a satisfying design outcome.

One of the struggles I had was figuring out how to achieve the radio button design. So, I researched it until I got it to work. Here’s how you can do the same! 

The following CSS code customizes the appearance of radio buttons by styling the label::before pseudo-element.


```css
input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    border-radius: 50%; /* Make it circular */
    background-color: white;
    margin-right: 8px;
    vertical-align: middle;
    transition: background 0.3s, border 0.3s, box-shadow 0.3s;
}

/* When the radio button is checked */
input[type="radio"]:checked + label::before {
    background-color: hsl(169, 82%, 27%);
    border-color: hsl(169, 82%, 27%);
    box-shadow: inset 0 0 0 5px white; /* Inner circle effect */
}

```

### Useful resources

- [CSS radio button](https://dev.to/gscode/10-radio-button-css-style-examples-ph6) - This helped me for styling radio button. I really liked this pattern and will use it going forward.


## Author

- Website - [Aziz-portfolio](https://0paziz.github.io/Aziz-portfolio/index.html)
- Frontend Mentor - [@0paziz](https://www.frontendmentor.io/profile/@0paziz)
- Linkedin - [abdiaziz-omar](https://www.linkedin.com/in/abdiaziz-omar-876b06256/)
