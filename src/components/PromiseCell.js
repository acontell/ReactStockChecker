import React, { Component } from 'react';
import Spinner from './Spinner';

export default class PromiseCell extends Component {

  constructor(props) {

    super(props);
    this.state = {fullfilled: false};
  }

  componentDidMount() {

    this.props.promise.then(value => this.setState({fullfilled: true, value}))
  }

	render() {

    const textColor = this.state.value > 0 ? 'text-success' : 'text-danger';
    const className = `text-right ${this.props.isColorEnabled ? textColor : ''}`;

    return (
        <td className={className}>
          {this.state.fullfilled
            ? this.props.format(this.state.value)
            : <Spinner />
          }
        </td>
    );
	}
}
