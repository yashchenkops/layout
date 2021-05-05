class Stepper {
  constructor({
    selectorWrapper,
    stepsSelector,
    selectorProgress,
    prevButton,
    nextButton,
    numberSelector,
    background,
  }) {
    this.$el = document.querySelector(selectorWrapper)
    this.steps = [...this.$el.querySelectorAll(stepsSelector)]
    this.progress = document.querySelector(selectorProgress)
    this.prevButton = document.querySelector(prevButton)
    this.nextButton = document.querySelector(nextButton)
    this.number = document.querySelector(numberSelector)
    this.lengthSteps = this.steps.length
    this.oneNumberStep = parseInt(100 / this.steps.length)
    this.background = document.querySelector(background)
  }

  searchActiveStep() {
    const [activeStep] = this.steps.filter((item) =>
      item.classList.contains('active')
    )
    return activeStep
  }

  addClass(el, className) {
    el.classList.add(className)
  }

  async changeImg(url) {
    this.addStyle(this.background, 'opacity', '0')
    setTimeout(() => {
      this.background.setAttribute('src', url)
      this.addStyle(this.background, 'opacity', '1')
    }, 500)
  }

  prevStep() {
    const activeStep = this.searchActiveStep()
    if (!activeStep) return
    const stepNumber = Number(activeStep.dataset.step)
    const prevStepItem = this.steps[stepNumber - 2]

    if (stepNumber === 2) {
      this.addStyle(this.prevButton, 'display', 'none')
      this.prevButton.classList.remove('active')
    }

    activeStep.classList.remove('active')
    this.changeImg(prevStepItem.dataset.stepImg)

    this.addStyle(activeStep, 'display', 'none')
    this.addStyle(prevStepItem, 'display', 'block')
    this.addClass(prevStepItem, 'active')

    setTimeout(() => {
      this.addStyle(prevStepItem, 'transform', 'translateY(0%)')
      this.addStyle(prevStepItem, 'opacity', '1')
      this.calculateProgress('prev')
    }, 100)
  }

  nextStep() {
    if (!this.prevButton.classList.contains('active')) {
      this.addClass(this.prevButton, 'active')
      this.addStyle(this.prevButton, 'display', 'block')
    }

    const activeStep = this.searchActiveStep()

    if (!activeStep) return

    const stepNumber = Number(activeStep.dataset.step)

    if (stepNumber === this.steps.length) return

    activeStep.classList.remove('active')
    this.addStyle(activeStep, 'transform', 'translateY(-100%)')
    this.addStyle(activeStep, 'opacity', '0')
    this.changeImg(this.steps[stepNumber].dataset.stepImg)

    setTimeout(() => {
      this.addStyle(activeStep, 'display', 'none')
      this.addStyle(this.steps[stepNumber], 'display', 'block')
      this.addClass(this.steps[stepNumber], 'active')
      this.calculateProgress('next')
    }, 500)
  }

  calculateProgress(operation) {
    if (operation === 'prev') {
      const updateProgress =
        parseInt(this.progress.style.width) - this.oneNumberStep + '%'
      this.addStyle(this.progress, 'width', updateProgress)
      this.number.textContent = updateProgress
      return
    }
    const activeStep = this.searchActiveStep()

    let prevSteps = 0
    for (let i = 0; i < Number(activeStep.dataset.step); i++) {
      prevSteps++
    }
    const width = parseInt(prevSteps * this.oneNumberStep) + '%'
    this.number.textContent = width
    this.addStyle(this.progress, 'width', width)
  }

  addStyle(el, property, value) {
    el.style[property] = value
  }

  initListeners() {
    this.prevButton.addEventListener('click', this.prevStep.bind(this))
    this.nextButton.addEventListener('click', this.nextStep.bind(this))
  }

  init() {
    this.initListeners()
    this.progress.style.width = this.oneNumberStep + '%'
    this.number.textContent = this.oneNumberStep + '%'
    this.addStyle(this.$el, 'overflow', 'hidden')
    this.steps.forEach((step) => {
      this.addStyle(step, 'transition', '1s')
      this.addStyle(step, 'display', 'none')
    })
    this.addStyle(this.steps[0], 'display', 'block')
    this.background.setAttribute('src', this.steps[0].dataset.stepImg)
    this.addStyle(this.background, 'transition', '0.5s')
  }
}

const stepper = new Stepper({
  selectorWrapper: '[data-stepper]',
  stepsSelector: '[data-step]',
  selectorProgress: '[data-progress]',
  prevButton: '[data-prev]',
  nextButton: '[data-next]',
  numberSelector: '[data-number]',
  background: '[data-background]',
})

stepper.init()