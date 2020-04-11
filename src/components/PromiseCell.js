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

    return (
        <td className="text-right">
          {this.state.fullfilled
            ? this.props.format(this.state.value)
            : <Spinner />
          }
        </td>
    );
	}
}
