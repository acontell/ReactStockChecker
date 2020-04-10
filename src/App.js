import React, { Component } from 'react';
import StockChecker from './components/StockChecker';
import Stocks from './private/Stocks';

export default class App extends Component {

	render() {

		return (
			<StockChecker stocks={Stocks}/>
		);
	}
}
