let valueDisplays = document.querySelectorAll(
  '.numbers-wrapper-item__indicators'
)
let interval = 80000

function startAnimationOnScroll(scrollTriggerElement) {
  let triggerOffset =
    scrollTriggerElement.getBoundingClientRect().top + window.pageYOffset
  let isTriggered = false

  function startAnimation() {
    if (
      !isTriggered &&
      window.pageYOffset + window.innerHeight > triggerOffset
    ) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0
        let endValue = parseInt(valueDisplay.getAttribute('data-val'))
        let increment = endValue / (interval / 1000)
        let counter = setInterval(function () {
          startValue += increment
          valueDisplay.textContent = Math.floor(startValue)
          if (startValue >= endValue) {
            clearInterval(counter)
            valueDisplay.textContent = endValue
          }
        }, 50)
      })
      isTriggered = true
    }
  }

  window.addEventListener('scroll', startAnimation)
  startAnimation()
}

startAnimationOnScroll(document.querySelector('.numbers'))
