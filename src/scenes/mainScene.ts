import { Scene3D } from '@enable3d/phaser-extension'

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
  }

  init() {
    this.accessThirdDimension()
  }

  async create() {
    // creates a nice scene
    this.third.warpSpeed()

    // adds a box
    this.third.add.box({ x: 1, y: 2 })

    // adds a box with physics
    this.third.physics.add.box({ x: -1, y: 2 })
    const model = await this.third.load.gltf('./models/table-all.gltf')
    console.log('.....', model)
    // throws some random object on the scene
    this.third.haveSomeFun()
  }

  update() {}
}
