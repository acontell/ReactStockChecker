import React, { Component } from 'react';
import PromiseCell from './PromiseCell';
import NumberUtils from './NumberUtils';

function Cell({ value, isHeader, format = NumberUtils.identity }) {

	return isHeader
					? <th scope="row">{format(value)}</th>
					: <td className="text-right">{format(value)}</td>;
}

function Row({ stock: {name, stockBuyingPrice, pricePaidAfterTaxes } }) {

  return (
    <tr>
      <Cell value={name} isHeader={true} />
      <Cell value={stockBuyingPrice} format={NumberUtils.formatCurrency} />
      <PromiseCell value='currentPrice' format={NumberUtils.formatCurrency}  />
      <PromiseCell value='stockAppreciation' format={NumberUtils.formatPercentage} />
      <Cell value={pricePaidAfterTaxes} format={NumberUtils.formatCurrency} />
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
          { this.props.stocks.map(stock => <Row key={stock.id} stock={stock} />) }
        </tbody>
      </table>
		);
	}
}
