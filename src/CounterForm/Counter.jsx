import { makeAutoObservable } from "mobx";

class counterStore {
  EuroCount = 0;
  UsdCount = 0;
  EuroBlock = false;
  UsdBlock = false;

  constructor() {
    makeAutoObservable(this);
  }

  euro(value) {
    const usdLength = value.length
    const usd = value * 1.07;
    if(usdLength > 0){
      this.UsdCount = usd.toFixed(4);
      this.UsdBlock = true;
    }
    else{
      this.UsdCount = 0
      this.UsdBlock = false
    }
  }

  usd(value) {
    const euroLength = value.length
    const euro = value - (value * 0.07);
    if(euroLength > 0){
      this.EuroBlock = true;
      this.EuroCount = euro.toFixed(4);
    }
    else{
      this.EuroBlock = false
      this.EuroCount = 0
    }
  }
}

const CounterStore = new counterStore();
export default CounterStore;
