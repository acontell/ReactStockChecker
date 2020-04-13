import React, { Component } from 'react';
import NumberUtils from '../utils/NumberUtils';

export default class Cell extends Component {

	render() {

    const { value, isHeader, format = NumberUtils.identity } = this.props;

    return isHeader
  					? <th scope="row">{format(value)}</th>
  					: <td className="text-right">{format(value)}</td>;
	}
}
