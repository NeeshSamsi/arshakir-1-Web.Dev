# Tailwindcss Installation

Exactly from the [Official Docs](https://tailwindcss.com/docs/installation)

## Tailwind Font Configuration

Add the font .ttf files into assets/fonts/{name-of-font}/{font-file}.ttf

`@font-face` files into `tailwind.css` input file.

Configuration is from the [Docs](https://tailwindcss.com/docs/font-family#customizing)

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

## Tailwind Custom Colors Configuration

[Docs](https://tailwindcss.com/docs/customizing-colors#naming-your-colors)

Add the following into `theme{ extend: { colors: {}}}`. Alternatively to override default colors, add it within `theme: {}` and not `theme: {extend: {}}`

```js
dark: {
  primary: "#313131",
  secondary: "#514040",
  "testimonial-primary": "#32435C",
  "testimonial-secondary": "#6A635B",
},
light: "#F2F2F2",
accent: "#49AD09",
card: {
  primary: colors.white,
  secondary: "#EDEDED",
},
```
