# B4ckbone
A powerful way to use CSS grid.

## What is it?
B4ckbone is another method to create a page layout instead of the traditional container / wrapper.

## How it works?
It use CSS grid to create three columns on each side and a middle column containing the content. The middle column value is `1fr` and has a `max-width` on it.

![example](https://github.com/spicrd/b4ckbone/blob/assets/img1.jpg?raw=true)

The value of everything is inside the variables file. The nomenclature of each selector and css variable is fully customisable.

It is possible for an element inside the grid to start and end at a different column. All scenario cases are possible.

![different_sizes](https://github.com/spicrd/b4ckbone/blob/assets/img2.jpg?raw=true)

B4ckbone provide two CSS variables for the remaining space before the content: `--left-spacing` and `--right-spacing`. It also provide each value for each column: `--edge`, `--breakout` and `--popout`.

You can center the content by adding the `centered` class on the grid itself or a child of the grid. It will add padding on the right and on the left.

![Centered](https://github.com/spicrd/b4ckbone/blob/assets/img3.jpg?raw=true)

## How to use it?
If you want it as it is, take the `bundle.min.css` file inside the dist folder and import it in your project 
```html
<link rel="stylesheet" href="path/to/bundle.css">
```
if you want to add your own values to the columns take the `bundle.css` file and import it the same way mentioned earlier. You can also take the SCSS file and compile it on your end.

You can modify the variable values in the `variables.scss` file:
```scss
#{$selector} {
    --#{$middle}-max-width: 80rem;
    --#{$col1}: 1rem;
    --#{$col2}: 0rem;
    --#{$col3}: 0rem;

    @media (min-width: 768px) {
        --#{$col2}: max(1rem, 6vw);
        --#{$col1}: clamp(1rem, 6vw, 5rem);
    }

    @media (min-width: 1024px) {
        --#{$col3}: max(1rem, 6vw);
    }
}
```
or in the `bundle.css` file:
```css
.b4ckbone {
  --content-max-width: 80rem;
  --edge: 1rem;
  --breakout: 0rem;
  --popout: 0rem;
}
@media (min-width: 768px) {
  .b4ckbone {
    --breakout: max(1rem, 6vw);
    --edge: clamp(1rem, 6vw, 5rem);
  }
}
@media (min-width: 1024px) {
  .b4ckbone {
    --popout: max(1rem, 6vw);
  }
}
```
In the HTML, you need to add a tag with the class `b4ckbone` (or one of your choice if you changed the selector variable) and add the column classes to setup your elements in the layout.
```html
<div class="b4ckbone">
    <div>Content</div>
    <div class="content">Content</div>
    <div class="popout">Popout</div>
    <div class="breakout">Breakout</div>
    <div class="full">
        <div>Full</div>
    </div>
</div>
```
There is a full example in the example folder.

## Shout-out
B4ckbone was inspired by this [Youtube video](https://youtu.be/c13gpBrnGEw?si=Glp5qkXwMVw_3Sje) from [Kevin Powell](https://www.youtube.com/@KevinPowell)
