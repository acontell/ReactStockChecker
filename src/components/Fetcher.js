import ApiKey from '../private/ApiKey';

export default class Fetcher {
  #stocks;
  #intradayUrl;
  #intradayPromises;

  constructor(stocks) {
    const apiKey = new ApiKey();
    this.#stocks = stocks;
    this.#intradayUrl = apiKey.getIntradayUrl();
    this.#intradayPromises = stocks
      .map(stock => stock.id)
      .map(id => ({id, promise: Promise.resolve(id)}));
  }

  getResult(action, id = -1) {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
  }
};
