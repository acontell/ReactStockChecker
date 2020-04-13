const THREE_SECONDS = 3000;

export default class FakeClient {

  fetch(symbol, index, fallbackData) {

    return new Promise(resolve =>
      setTimeout(() => resolve(fallbackData), THREE_SECONDS));
  }
};
