export default class Player {
  constructor(attributes) {
    this.name = attributes.name
    this.balls = attributes.balls || []
  }

  setBalls(balls) {
    this.balls = balls
  }

  status() {
    if (this.balls.length > 0) {
      return this.balls.length.toString()
    } else {
      return "LOST"
    }
  }
}