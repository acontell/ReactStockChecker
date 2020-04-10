import React, { Component } from 'react';
import PromiseCell from './PromiseCell';
import NumberUtils from './NumberUtils';

export default class Summary extends Component {

	render() {

		return (
      <div className="card">
        <h5 className="card-header">Summary</h5>
        <table className="table table-hover">
          <tbody>
            <tr>
              <td><b>Total Invested:</b></td>
              <PromiseCell value='totalInvested' format={NumberUtils.formatCurrency} />
            </tr>
            <tr>
              <td><b>Real Value:</b></td>
              <PromiseCell value='allStocksRealValue' format={NumberUtils.formatCurrency} />
            </tr>
            <tr>
              <td><b>Appreciation:</b></td>
              <PromiseCell value='totalAppreciation' format={NumberUtils.formatCurrency} />
            </tr>
          </tbody>
        </table>
      </div>
		);
	}
}
