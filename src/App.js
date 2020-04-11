import React, { Component } from 'react';
import StockChecker from './components/StockChecker';
import AlphaVantageClient from './components/AlphaVantageClient';
import portfolioJson from './private/my_portfolio';
import fallbackData from './private/my_fallback_data';

const portfolio = new AlphaVantageClient(fallbackData).fetch(portfolioJson);

export default class App extends Component {

	render() {

		return (
			<StockChecker portfolio={portfolio} />
		);
	}
}
