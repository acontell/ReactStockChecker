import React, { Component } from 'react';
import StockChecker from './components/StockChecker';
import ApiKey from './private/ApiKey';
import Stocks from './private/Stocks';
import Fetcher from './Fetcher';

export default class App extends Component {

	render() {
		
		return (
			<StockChecker apiKey={ApiKey} stocks={Stocks}/>
		);
	}
}
