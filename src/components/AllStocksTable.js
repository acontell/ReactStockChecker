import React, { Component } from 'react';
import PromiseCell from './PromiseCell';
import NumberUtils from './NumberUtils';

function Cell({ value, isHeader, format = NumberUtils.identity }) {

	return isHeader
					? <th scope="row">{format(value)}</th>
					: <td className="text-right">{format(value)}</td>;
}

function Row({ stock }) {

  return (
    <tr>
      <Cell value={stock.name} isHeader={true} />
      <Cell value={stock.stockBuyingPrice} format={NumberUtils.formatCurrency} />
      <PromiseCell promise={stock.getCurrentPrice()} format={NumberUtils.formatCurrency} />
      <PromiseCell promise={stock.getStockAppreciation()} format={NumberUtils.formatPercentage} />
      <Cell value={stock.pricePaidAfterTaxes} format={NumberUtils.formatCurrency} />
    </tr>
  );
}

export default class AllStocksTable extends Component {

	render() {

		return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th className="text-right" scope="col">Stock Buying Price</th>
            <th className="text-right" scope="col">Current Price</th>
            <th className="text-right" scope="col">Appreciation</th>
            <th className="text-right" scope="col">Amount Invested</th>
          </tr>
        </thead>
        <tbody>
          { this.props.stocks.map(stock => <Row key={stock.symbol} stock={stock} />) }
        </tbody>
      </table>
		);
	}
}
