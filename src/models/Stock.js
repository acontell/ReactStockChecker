export default class Stock {

  constructor({id, name, nStocks, stockBuyingPrice, expectedPrice, pricePaidAfterTaxes}, historicalData) {

    this.symbol = id;
    this.name = name;
    this.numberOfShares = nStocks;
    this.stockBuyingPrice = stockBuyingPrice;
    this.expectedPrice = expectedPrice;
    this.pricePaidAfterTaxes = pricePaidAfterTaxes;
    this.historicalData = historicalData;
  }

  getCurrentPrice() {

    return this.historicalData
      .then(({ dailyData }) => dailyData[dailyData.length - 1].price);
  }

  getCurrentValue() {

    return this.getCurrentPrice()
      .then(currentPrice => currentPrice * this.numberOfShares);
  }

  getStockAppreciation() {

    return this.getCurrentPrice()
      .then(currentPrice => ((currentPrice - this.stockBuyingPrice) / this.stockBuyingPrice));
  }

  getGainings() {
    return this.getCurrentValue()
      .then(currentValue => currentValue - this.pricePaidAfterTaxes);
  }
}
