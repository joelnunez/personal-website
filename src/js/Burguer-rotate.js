import DOM from './DOM'
const { nav, lineOne, lineTwo, lineThree } = DOM

const tablet = window.matchMedia('(min-width:620px)')

//burger animation and close sidebar
const animationNav = () => {
  if (nav.classList.contains('navbar__container--menu-nav-active')) {
    nav.classList.remove('navbar__container--menu-nav-active')
    lineOne.style.cssText = `transform: rotate(0deg) translate(0rem, 0rem);transition: transform .1s ease-in;`
    lineTwo.style.cssText = `transform: translateX(0%);background-color: $blue-primary; transition: transform .1s ease-in;`
    lineThree.style.cssText = `transform: rotate(0deg) translate(0rem, 0rem);transition: transform .1s ease-in;`
  } else {
    if (tablet.matches) {
      nav.classList.add('navbar__container--menu-nav-active')
      lineOne.style.cssText = `transform: rotate(45deg) translate(.8rem, .7rem);transition: transform .1s ease-in;`
      lineTwo.style.cssText = `transform: translateX(-50%);background-color: transparent; transition: transform .1s ease-in;`
      lineThree.style.cssText = `transform: rotate(-45deg) translate(.8rem, -.7rem);transition: transform .1s ease-in;`
    } else {
      nav.classList.add('navbar__container--menu-nav-active')
      lineOne.style.cssText = `transform: rotate(45deg) translate(.5rem, .7rem);transition: transform .1s ease-in;`
      lineTwo.style.cssText = `transform: translateX(-50%);background-color: transparent; transition: transform .1s ease-in;`
      lineThree.style.cssText = `transform: rotate(-45deg) translate(.5rem, -.7rem);transition: transform .1s ease-in;`
    }
  }
}

export default animationNav
