import HistoricalData from '../models/HistoricalData';

export default class AlphaVantageDataToHistoricalData {

  convert(alphaVantageData) {

    return new HistoricalData(this.toDailyData(alphaVantageData['Time Series (Daily)']));
  }

  toDailyData(alphaVantageData) {

    return this.getOrderedDates(alphaVantageData)
      .reduce((acc, date) => acc.concat({
        date,
        price: +alphaVantageData[date]['4. close']
      }), []);
  }

  getOrderedDates(alphaVantageData) {
    return Object.keys(alphaVantageData).slice().sort(AlphaVantageDataToHistoricalData.orderByDateAsc);
  }

  static orderByDateAsc(date1, date2) {

    return date1 > date2 ? 1 : (date1 < date2 ? -1 : 0);
  }
}
