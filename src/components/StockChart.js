import React, { Component } from 'react';
import Chart from './Chart';
import Spinner from './Spinner';

export default class StockChart extends Component {

  constructor(props) {

    super(props);
    this.state = {
      showChart: false,
      data: {}
    };
  }

  componentDidMount() {

    this.props.stock.historicalData
      .then(({ dailyData }) => {
        this.setState({
          showChart: true,
          data: dailyData
        });
      });
  }

  render() {

    const {stock: { name }, hideChart} = this.props;

    return (
      <div className="text-center">
        {this.state.showChart
          ? <Chart name={name} data={this.state.data} />
          : <Spinner />
        }
        {this.state.showChart && <button type="button" className="btn btn-info" onClick={hideChart}>Back</button>}
      </div>
    );
  }
}
