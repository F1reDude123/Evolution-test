export default class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  constructor(x) {
    this.x = x;
    this.y = x;
  }
  
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
  add(v) {
    this.x += v;
    this.y += v;
  }
  
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }
  sub(v) {
    this.x -= v;
    this.y -= v;
  }
  
  mul(v) {
    this.x *= v.x;
    this.y *= v.y;
  }
  mul(v) {
    this.x *= v;
    this.y *= v;
  }
  
  div(v) {
    this.x /= v.x;
    this.y /= v.y;
  }
  div(v) {
    this.x /= v;
    this.y /= v;
  }
  
  pow(v) {
    this.x = Math.pow(this.x, v.x);
    this.y = Math.pow(this.y, v.y);
  }
  pow(v) {
    this.x = Math.pow(this.x, v);
    this.y = Math.pow(this.y, v);
  }
}
