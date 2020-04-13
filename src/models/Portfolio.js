import axios from 'axios';

export default class Portfolio {

  constructor(stocks) {
    this.stocks = stocks;
  }

  getTotalInvested() {

    return this.stocks.map(stock => stock.pricePaidAfterTaxes)
      .reduce((acc, pricePaidAfterTaxes) => acc + pricePaidAfterTaxes, 0);
  }

  getAllStocksRealValue() {

    return axios.all(this.stocks.map(stock => stock.getCurrentValue()))
      .then(result => result.reduce((acc, currentValue) => acc + currentValue, 0));
  }

  getTotalGainings() {

    return this.getAllStocksRealValue()
      .then(realValue => realValue - this.getTotalInvested());
  }
}
