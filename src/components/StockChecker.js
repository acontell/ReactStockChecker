import React, { Component } from 'react';
import PortfolioTable from './PortfolioTable';
import StockChart from './StockChart';
import Summary from './Summary';

function Portfolio({ portfolio, showChart }) {
	return (
		<>
			<h1>What do you have?</h1>
			<br />
			<PortfolioTable stocks={portfolio.stocks} showChart={showChart}/>
			<Summary portfolio={portfolio}/>
		</>
	);
}

export default class StockChecker extends Component {

	constructor(props) {

		super(props);
		this.showChart = this.showChart.bind(this);
		this.hideChart = this.hideChart.bind(this);
		this.state = {
			showChart: false,
			stock: null
		}
	}

	showChart(symbol) {

		this.setState((state, props) => ({
			showChart: props.portfolio.isAllDataLoaded(),
			stock: props.portfolio.findStockBySymbol(symbol)
		}));
	}

	hideChart() {

		this.setState(() => ({
			showChart: false,
			stock: null
		}));
	}

	render() {

		return (
			<div className="p-3">
				{ this.state.showChart
					? <StockChart hideChart={this.hideChart} stock={this.state.stock} />
					: <Portfolio showChart={this.showChart} portfolio={this.props.portfolio} />
				}
      </div>
		);
	}
}
