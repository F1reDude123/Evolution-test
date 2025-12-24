export default class DynamicBase {
  static tick() {
    requestAnimationFrame(() => this.tick();
  }
}
