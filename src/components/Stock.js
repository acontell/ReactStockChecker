export default class Stock {

  constructor({id, name, nStocks, stockBuyingPrice, expectedPrice, pricePaidAfterTaxes}, historicalPrice) {
    this.symbol = id;
    this.name = name;
    this.numberOfShares = nStocks;
    this.stockBuyingPrice = stockBuyingPrice;
    this.expectedPrice = expectedPrice;
    this.pricePaidAfterTaxes = pricePaidAfterTaxes;
    this.historicalPrice = historicalPrice;
  }

  getCurrentPrice() {

    return this.historicalPrice.then(_ => 100);
  }

  getStockAppreciation() {

    return this.getCurrentPrice();
  }
}
