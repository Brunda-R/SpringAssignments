import React from "react";
import './styletable.css'
import { stockData } from "./model/data";

const Stocks = () => {
  return (
    <p>
      <HomePageHeader />
      <div>
      <table >
          <tr  class="theader" >
              <th>Company</th><th>Ticker</th><th>Stock Price</th><th>Time elapsed</th>
          </tr>
        {stockData.map((data, index) => {
          return (
              <Stock
                key={index}
                index={index}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
          );
          })}
    </table>
      </div>
    </p>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

const Stock = ({index, company, ticker, stockPrice, timeElapsed}) => {
    var classname;
    if(index%2==0)
    classname="even";
    else
    classname="odd";
  if (!company) return <div />;
  return (
    
        <tr class={classname}>
          <td>
            {company}
          </td>
          <td>
        {ticker}
          </td>
          <td>
            {stockPrice}
          </td>
          <td>
            {timeElapsed}
          </td>
        </tr>
      
  );
};

export default Stocks;