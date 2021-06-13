window.addEventListener('DOMContentLoaded', () => {

  const downBtn = document.querySelector('.down-button'),
        upBtn = document.querySelector('.up-button'),
        sidebar = document.querySelector('.sidebar'),
        mainslide = document.querySelector('.main-slide'),
        container = document.querySelector('.container')

  const slidesCount = mainslide.querySelectorAll('div').length

  let activeSlideIndex = 0
  
  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

  upBtn.addEventListener('click', () => {
    changeSlide('up')
  })

  downBtn.addEventListener('click', () => {
    changeSlide('down')
  })

  function changeSlide(direction) {
    if (direction === 'up') {
      activeSlideIndex++

      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0
      }      
    } else if (direction === 'down') {
      activeSlideIndex--

      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1
      }
    }

    const height = container.clientHeight

    mainslide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
  }


  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      changeSlide('up')
    }
    else if (e.keyCode == '40') {
      changeSlide('down')
    }
  }


})