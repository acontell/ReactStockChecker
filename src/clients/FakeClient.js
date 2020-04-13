const THREE_SECONDS = 3000;

export default class FakeClient {
  #converter;

  constructor(converter) {

    this.#converter = converter;
  }

  fetch(symbol, index, fallbackData) {

    return new Promise(resolve =>
      setTimeout(() => resolve(fallbackData), THREE_SECONDS));
  }
};
