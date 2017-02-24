import mapToObj from 'map-to-obj'

export default class ChainMap {
  constructor(parentChain) {
    this.parentChain = parentChain
    this.options = new Map()
  }

  set(key, value) {
    this.options.set(key, value)
    return this
  }

  get(key) {
    return this.options.get(key)
  }

  has(key) {
    return this.options.has(key)
  }

  keys() {
    return this.options.keys()
  }

  entries() {
    return mapToObj(this.options)
  }

  values() {
    return [...this.options.values()]
  }

  delete(key) {
    this.options.delete(key)
  }

  end() {
    return this.parentChain
  }
}
