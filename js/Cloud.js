class Cloud {
  constructor({ startXPos = 0, startYPos = 0, size = 100, speed = 100 }) {
    this.size = `${size}px`
    this.speed = speed
    this.startXPos = `${startXPos}px`
    this.startYPos = `${startYPos}px`
  }

  __setAnimation (cloud) {
    cloud.style.animation = `cloudAnimation ${this.speed}s infinite`
  }

  init () {
    const cloud = document.createElement('div')
    cloud.className += 'cloud'
    cloud.style.background = 'url("../assets/cloud.png") center center no-repeat'
    cloud.style.backgroundSize = 'contain'
    cloud.style.width = this.size
    cloud.style.height = this.size
    cloud.style.position = 'absolute'
    cloud.style.top = this.startYPos
    cloud.style.left = this.startXPos
    cloud.style.marginleft = `-${this.startXPos}`
    this.__setAnimation(cloud)
    document.body.appendChild(cloud)
  }
}

export default Cloud
