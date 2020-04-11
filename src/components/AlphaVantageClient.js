import axios from 'axios';
import apiKey from '../private/my_api_key';
import Stock from './Stock';
import Portfolio from './Portfolio';
import Transformer from './Transformer';

const BIT_MORE_OF_A_MINUTE = 65000;

// Five calls per minute up to 500 calls a day
export default class AlphaVantageClient {
  #fallbackData;

  constructor(fallbackData) {

    this.#fallbackData = fallbackData;
  }

  fetch(portfolioJson) {

    return new Portfolio(this.addHistoricalDataToStocks(portfolioJson));
  }

  addHistoricalDataToStocks(portfolioJson) {

    return portfolioJson
      .map((stock, index) => new Stock(stock, this.fetchHistoricalData(stock.id, index)));
  }

  fetchHistoricalData(symbol, index) {

    return new Promise(resolve =>
      setTimeout(this.fetchUrl.bind(this, resolve, symbol), this.getDelay(index)));
  }

  fetchUrl(resolve, symbol) {

    return axios
      .get(this.getDailySeriesUrl(symbol))
      .then(response => response.data)
      .then(Transformer.toHistoricalData)
      .then(resolve)
      .catch(e => {
        console.error(`Error retrieving stock with symbol ${symbol}, returning fallback value.`);
        resolve(this.#fallbackData[symbol]);
      })
  }

  getDelay(index) {

    return Math.floor(index / 5) * BIT_MORE_OF_A_MINUTE;
  }

  getDailySeriesUrl(symbol) {

    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&apikey=${apiKey}&symbol=${symbol}`;
  }
};
