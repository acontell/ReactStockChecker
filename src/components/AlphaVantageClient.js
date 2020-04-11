import axios from 'axios';
import apiKey from '../private/my_api_key';
import Stock from './Stock';
import Portfolio from './Portfolio';

// const BIT_MORE_OF_A_MINUTE = 65000;
const BIT_MORE_OF_A_MINUTE = 5000;
// Five calls per minute up to 500 calls a day
export default class AlphaVantageClient {

  fetch(portfolioJson) {

    return new Portfolio(this.addHistoricalDataToStocks(portfolioJson));
  }

  addHistoricalDataToStocks(portfolioJson) {

    return portfolioJson
      .map((stock, index) => new Stock(stock, this.fetchHistoricalData(stock.id, index)));
  }

  fetchHistoricalData(symbol, index) {

    return new Promise(resolve => setTimeout(() => {

      // axios.get(ApiKey.getDailySeriesUrl(symbol)).then(resolve);
      console.log('hola2');
      resolve();
    }, this.getDelay(index)));
  }

  fetchUrl(resolve, symbol) {

    return axios
      .get(this.getDailySeriesUrl(symbol))
      .then(resolve);
  }

  getDelay(index) {

    return Math.floor(index / 5) * BIT_MORE_OF_A_MINUTE;
  }

  getDailySeriesUrl(symbol) {

    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&apikey=${apiKey}&symbol=${symbol}`;
  }
};
