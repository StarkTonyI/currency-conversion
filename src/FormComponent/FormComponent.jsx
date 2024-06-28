import React from 'react';
import { observer } from 'mobx-react-lite';
import CounterStore from '../CounterForm/Counter';
import './FormComponentStyle.css'

const FormComponent = observer(() => {
  console.log(`${CounterStore.EuroBlock} - EURO`);
  console.log(`${CounterStore.UsdBlock} - USD`)
  return (
    <div className='container'>
      <div className="form-control">
        <p className='euro'>EURO</p>
        <input
          className="input input-alt"
          required=""
          type="text"
          onChange={(value) => CounterStore.euro(value.target.value)}
          placeholder={CounterStore.EuroCount}
          disabled={CounterStore.EuroBlock}
        />
        <span className="input-border input-border-alt"></span>
      </div>
      <div className="form-control">
        <p className='usd'>USD</p>
        <input
          className="input input-alt"
          required=""
          type="text"
          onChange={(value) => CounterStore.usd(value.target.value)}
          placeholder={CounterStore.UsdCount}
          disabled={CounterStore.UsdBlock}
        />
        <span className="input-border input-border-alt"></span>
      </div>
    </div>
  );
});

export default FormComponent;
