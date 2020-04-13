import axios from 'axios';
import apiKey from '../private/my_api_key';

const BIT_MORE_OF_A_MINUTE = 65000;

// Five calls per minute up to 500 calls a day
export default class AlphaVantageClient {
  #converter;

  constructor(converter) {

    this.#converter = converter;
  }

  fetch(symbol, index, fallbackData) {

    return new Promise(resolve =>
      setTimeout(this.fetchUrl.bind(this, resolve, symbol, fallbackData), this.getDelay(index)));
  }

  fetchUrl(resolve, symbol, fallbackData) {

    return axios
      .get(this.getDailySeriesUrl(symbol))
      .then(response => response.data)
      .then(this.#converter.convert)
      .then(resolve)
      .catch(e => {
        console.error(`Error retrieving stock with symbol ${symbol}, returning fallback value.`);
        resolve(fallbackData);
      });
  }

  getDelay(index) {

    return Math.floor(index / 5) * BIT_MORE_OF_A_MINUTE;
  }

  getDailySeriesUrl(symbol) {

    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&apikey=${apiKey}&symbol=${symbol}`;
  }
};
