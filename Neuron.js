export default class Neuron {
  type = ["Normal", "Dopamine"][Math.round(Math.random())];
  bias = Math.random();
  value;
}
