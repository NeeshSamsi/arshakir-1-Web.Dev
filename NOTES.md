## Tailwindcss Installation

Exactly from the [Official Docs](https://tailwindcss.com/docs/installation)

## Tailwind Font Configuration

Add the font .ttf files into assets/fonts/{name-of-font}/{font-file}.ttf

```css
/* css/tailwind.css */
@layer base {
  @font-face {
    font-family: Inter;
    font-weight: 400;
    src: url("../assets/fonts/inter/Inter-Regular.ttf");
  }
  @font-face {
    font-family: Inter;
    font-weight: 600;
    src: url("../assets/fonts/inter/Inter-SemiBold.ttf");
  }
  @font-face {
    font-family: Inter;
    font-weight: 800;
    src: url("../assets/fonts/inter/Inter-ExtraBold.ttf");
  }

  @font-face {
    font-family: Gilroy;
    font-weight: 500;
    src: url("../assets/fonts/gilroy/Gilroy-Medium.ttf");
  }
  @font-face {
    font-family: Gilroy;
    font-weight: 600;
    src: url("../assets/fonts/gilroy/Gilroy-SemiBold.ttf");
  }
}
```

Add the following into the tailwind.config.js file within

```js
theme: {
  extend: {
  }
}
```

Alternatively if you want to override default font-serif and font-sans utility classes, add it within `theme: {}` and not `theme: {extend: {}}`

```javascript
// tailwind.config.js
fontFamily: {
  inter: ["Inter", "sans-serif"],
  gilroy: ["Gilroy", "sans-serif"],
},
```
