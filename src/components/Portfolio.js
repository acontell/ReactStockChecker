export default class Portfolio {

  constructor(stocks) {
    this.stocks = stocks;
  }

  static emptyPortfolio() {
    return new Portfolio([]);
  }

  getTotalInvested() {

    return new Promise(resolve => setTimeout(resolve, 3000)).then(x => 500);
  }

  getAllStocksRealValue() {

    return this.getTotalInvested();
  }

  getTotalAppreciation() {

    return this.getTotalInvested();
  }
}
