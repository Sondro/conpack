import ChainMap from './chain-map'
import ChainSet from './chain-set'

export default class Resolve extends ChainMap {
  constructor(parentChain) {
    super(parentChain)
    this.modules = new ChainSet(this)
    this.extensions = new ChainSet(this)
  }

  toConfig() {
    return {
      modules: this.modules.values(),
      extensions: this.extensions.values()
    }
  }
}