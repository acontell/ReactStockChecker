import Stock from '../models/Stock';
import Portfolio from '../models/Portfolio';

export default class PortfolioJsonToPortfolio {
  #fallbackData;
  #client;

  constructor(fallbackData, client) {

    this.#fallbackData = fallbackData;
    this.#client = client;
  }

  convert(portfolioJson) {

    return new Portfolio(this.getStocksWithHistoricalData(portfolioJson));
  }

  getStocksWithHistoricalData(portfolioJson) {

    return portfolioJson
      .map((stock, index) => new Stock(stock, this.#client.fetch(stock.id, index, this.#fallbackData[stock.id])));
  }
}
