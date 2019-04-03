require('./smooth-scroll.polyfills');

const scroll = new SmoothScroll('a[href*="#"]',{
     easing: 'easeOutCubic'
})