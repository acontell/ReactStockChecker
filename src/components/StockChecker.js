import React, { Component } from 'react';
import AllStocksTable from './AllStocksTable';
import Summary from './Summary';
import Fetcher from './Fetcher';

export default class StockChecker extends Component {
	#fetcher;

	constructor(props) {
		super(props);
		this.#fetcher = new Fetcher(props.stocks);
	}

	render() {

		return (
			<div className="p-3">
        <h1>What do you have?</h1>
				<br />
				<AllStocksTable fetcher={this.#fetcher} stocks={this.props.stocks}/>
				<Summary fetcher={this.#fetcher} />
      </div>
		);
	}
}
