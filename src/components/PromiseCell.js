import React, { Component } from 'react';
import Spinner from './Spinner';
import NumberUtils from './NumberUtils';

export default class PromiseCell extends Component {
  #promise;
  #format;

  constructor(props) {
    super(props);

    this.#promise = new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    this.state = {fullfilled: false};
    this.#format = this.props.format || NumberUtils.identity;
  }

  componentDidMount() {

    this.#promise.then(_ => this.setState({fullfilled: true, value: 400}))
  }

	render() {

    return (
        <td className="text-right">
          {this.state.fullfilled
            ? this.#format(this.state.value)
            : <Spinner />
          }
        </td>
    );
	}
}
