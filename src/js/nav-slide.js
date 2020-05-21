import DOM from './DOM'
import animationNav from './Burguer-rotate'

const { burguer, navbar, about, portfolio, contact, curriculum } = DOM

const navSlide = () => {
  //box shadow in navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.offsetTop + navbar.offsetHeight) {
      navbar.style.boxShadow = '0px 0.5px 1.5px 1px rgba(0,0,0,1)'
    } else {
      navbar.style.boxShadow = '0px 0.5px 0.5px 0.5px rgba(0,0,0,0.4)'
    }
  })

  //burger menu eventListener
  burguer.addEventListener('click', () => {
    animationNav()
  })

  //sidebar close when you click the links
  const scrollClose = (item) => {
    item.addEventListener('click', () => {
      animationNav()
    })
  }

  const navItems = [about, portfolio, contact, curriculum].forEach((navItem) =>
    scrollClose(navItem)
  )
}

export default navSlide
