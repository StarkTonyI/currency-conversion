import { makeAutoObservable } from "mobx";

class counterStore {
  EuroCount = 0;
  UsdCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  euro(value) {
    const usd = value * 1.07;
    this.UsdCount = usd ? usd.toFixed(4) : 0;
  }

  usd(value) {
    const euro = value - (value * 0.07);
    this.EuroCount = euro ? euro.toFixed(4) : 0;
  }
}

const CounterStore = new counterStore();
export default CounterStore;
