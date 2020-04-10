import React, { Component } from 'react';
import AllStocksTable from './AllStocksTable';
import Summary from './Summary';

export default class StockChecker extends Component {

	render() {

		return (
			<div className="p-3">
        <h1>What do you have?</h1>
				<br />
				<AllStocksTable stocks={this.props.stocks}/>
				<Summary />
      </div>
		);
	}
}
