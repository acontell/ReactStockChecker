import HistoricalData from '../models/HistoricalData';

export default class AlphaVantageDataToHistoricalData {

  convert(alphaVantageData) {

    return new HistoricalData(
      alphaVantageData['Meta Data']['3. Last Refreshed'],
      this.toDailyData(alphaVantageData['Time Series (Daily)']));
  }

  toDailyData(alphaVantageData) {
    
    return Object.keys(alphaVantageData)
      .reduce((acc, key) => {
        acc[key] = +alphaVantageData[key]['4. close'];
        return acc;
      }, {});
  }
}
