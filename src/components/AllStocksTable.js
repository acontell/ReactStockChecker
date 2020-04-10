import React, { Component } from 'react';
import PromiseCell from './PromiseCell';
import NumberUtils from './NumberUtils';

function Cell({ value, isHeader, format = NumberUtils.identity }) {

	return isHeader
					? <th scope="row">{format(value)}</th>
					: <td className="text-right">{format(value)}</td>;
}

function Row({ stock: {id, name, stockBuyingPrice, pricePaidAfterTaxes }, fetcher }) {

  return (
    <tr>
      <Cell value={name} isHeader={true} />
      <Cell value={stockBuyingPrice} format={NumberUtils.formatCurrency} />
      <PromiseCell fetcher={fetcher} action='currentPrice' for={id} format={NumberUtils.formatCurrency}  />
      <PromiseCell fetcher={fetcher} action='stockAppreciation' for={id} format={NumberUtils.formatPercentage} />
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
          { this.props.stocks.map(stock => <Row fetcher={this.props.fetcher} key={stock.id} stock={stock} />) }
        </tbody>
      </table>
		);
	}
}
