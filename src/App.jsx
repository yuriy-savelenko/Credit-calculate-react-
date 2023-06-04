import './index.scss';
import { useState } from 'react';
import ResultDiv from './components/ResultDiv';
import Input from './components/Input';
import InputPercent from './components/InputPercent';

function App() {

  const [price, setPrice] = useState(10000);
  const [term, setTerm] = useState(1);
  const [percent, setPercent] = useState(10);
  const initialPay = Math.round(price * (percent / 100));
  const monthPay = Math.round((price - initialPay) * ((0.035 * Math.pow((1 + 0.035), term)) / (Math.pow((1 + 0.035), term) - 1)));
  const sum = Math.round(initialPay + term * monthPay);

  // function calculateSum() {
  //   return initialPay + term * monthPay;
  // }

  return (
    <div className="container">
      <div className="container__top">
        <h1 className="title">Calculate the cost of a car for leasing</h1>
        <div className="container__inputs">
          <Input min={10000} max={300000} value={price} setValue={setPrice} description='Car Price' span='$' />
          <InputPercent initialPay={initialPay} min={10} max={60} value={percent} setValue={setPercent} description='Initial payment' />
          <Input min={1} max={60} value={term} setValue={setTerm} description='Lease term' span='month' />
        </div>
      </div>
      <div className="container__bottom">
        <ResultDiv value={sum} description='The amount of the lease agreement' />
        <ResultDiv value={monthPay} description='Monthly payment' />
        <button className="btn">Submit your application</button>
      </div>
    </div>
  );
}

export default App;
