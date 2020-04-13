import React, { Component } from 'react';
import StockChecker from './components/StockChecker';
import Chart from './components/Chart';
// import AlphaVantageClient from './clients/AlphaVantageClient';
import FakeClient from './clients/FakeClient';
import AlphaVantageDataToHistoricalData from './converters/AlphaVantageDataToHistoricalData';
import PortfolioJsonToPortfolio from './converters/PortfolioJsonToPortfolio';
import portfolioJson from './private/my_portfolio';
import fallbackData from './private/my_fallback_data';

const converter = new AlphaVantageDataToHistoricalData();
const client = new FakeClient(converter);
const portfolio = new PortfolioJsonToPortfolio(fallbackData, client).convert(portfolioJson);

export default class App extends Component {

	render() {

		return (
			// <StockChecker portfolio={portfolio} />
			<Chart />
		);
	}
}
