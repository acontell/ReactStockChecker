import React, { Component } from 'react';
import PromiseCell from './PromiseCell';
import Cell from './Cell';
import NumberUtils from '../utils/NumberUtils';

export default class Summary extends Component {

	render() {

		return (
      <div className="card">
        <h5 className="card-header">Summary</h5>
        <table className="table table-hover">
          <tbody>
            <tr>
              <td><b>Total Invested:</b></td>
              <Cell value={this.props.portfolio.getTotalInvested()} format={NumberUtils.formatCurrency} />
            </tr>
            <tr>
              <td><b>Real Value:</b></td>
              <PromiseCell promise={this.props.portfolio.getAllStocksRealValue()} format={NumberUtils.formatCurrency} />
            </tr>
            <tr>
              <td><b>Gainings:</b></td>
              <PromiseCell promise={this.props.portfolio.getTotalGainings()} isColorEnabled={true} format={NumberUtils.formatCurrency} />
            </tr>
          </tbody>
        </table>
      </div>
		);
	}
}
