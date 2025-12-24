import DynamicBase from "https://f1redude123.github.io/Evolution-test/DynamicBase.js";

// To be improved
export default class Physics extends DynamicBase {
  objects = [];
  constructor(g) {
    this.gravity = g;
  }
  static tick() {
    this.objects = this.objects.map(function(o) {
      o.velocity -= this.gravity;
    });
  }
}
