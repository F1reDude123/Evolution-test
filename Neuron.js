export default class Neuron {
  type = ["Normal", "Dopamine"][Math.round((Math.random()*2)-1)];
  bias = Math.random();
  value;
}
