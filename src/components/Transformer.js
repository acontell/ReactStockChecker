import HistoricalData from './HistoricalData';

export default class Transformer {

  static toHistoricalData(alphaVantageData) {

    return new HistoricalData(
      alphaVantageData['Meta Data']['3. Last Refreshed'],
      Transformer.toDailyData(alphaVantageData['Time Series (Daily)']));
  }

  static toDailyData(alphaVantageData) {
    return Object.keys(alphaVantageData)
      .reduce((acc, key) => {
        acc[key] = +alphaVantageData[key]['4. close'];
        return acc;
      }, {});
  }
}
