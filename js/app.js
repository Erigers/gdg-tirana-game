import Cloud from './Cloud.js'
import Bug from './Bug.js'

(() => {
  new Cloud({ size: 130 }).init()
  new Cloud({ startXPos: 50, startYPos: 100, speed: 50 }).init()
  new Bug({ color: 'red' }).init()
})();
