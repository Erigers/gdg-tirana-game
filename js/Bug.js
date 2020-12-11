class Bug {
  constructor({ color = 'red' }) {
    this.color = color
    this.width = '50px'
    this.height = '50px'
  }

  __setInitialPosition (bug) {
    bug.style.position = 'absolute'
    bug.style.top = '100px'
    bug.style.left = '300px'
  }

  init () {
    const bug = document.createElement('div')
    bug.className += 'bug'
    bug.style.width = this.width
    bug.style.height = this.height
    if (this.color === 'red') {
      bug.style.background = 'url("../assets/red-bug.png") center center no-repeat'
    } else if (this.color === 'green') {
      bug.style.background = 'url("../assets/green-bug.png") center center no-repeat'
    } else if (this.color === 'yellow') {
      bug.style.background = 'url("../assets/yellow-bug.png") center center no-repeat'
    }
    bug.style.backgroundSize = 'contain'
    this.__setInitialPosition(bug)
    document.body.appendChild(bug)
  }
}

export default Bug
