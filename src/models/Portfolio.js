import axios from 'axios';

export default class Portfolio {
  #isRealValueResolved;
  #isTotalGainingsResolved;

  constructor(stocks) {

    this.stocks = stocks;
    this.#isRealValueResolved = false;
    this.#isTotalGainingsResolved = false;
  }

  getTotalInvested() {

    return this.stocks.map(stock => stock.pricePaidAfterTaxes)
      .reduce((acc, pricePaidAfterTaxes) => acc + pricePaidAfterTaxes, 0);
  }

  getAllStocksRealValue() {

    return axios.all(this.stocks.map(stock => stock.getCurrentValue()))
      .then(result => result.reduce((acc, currentValue) => acc + currentValue, 0))
      .then(result => {
        this.#isRealValueResolved = true;
        return result;
      });
  }

  getTotalGainings() {

    return this.getAllStocksRealValue()
      .then(realValue => realValue - this.getTotalInvested())
      .then(result => {
        this.#isTotalGainingsResolved = true;
        return result;
      });
  }

  isAllDataLoaded() {

    return this.#isTotalGainingsResolved && this.#isRealValueResolved;
  }

  findStockBySymbol(symbol) {

    return this.stocks.find(stock => stock.symbol === symbol);
  }
}
