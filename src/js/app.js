import navSlide from './nav-slide'

//init fn
navSlide()

//scrollOut.js Library
ScrollOut({
  once: true,
})

//Smoth scroll library
const scroll = new SmoothScroll('a[href*="#"]')

//AOS.js library
AOS.init({
  duration: 800,
})
