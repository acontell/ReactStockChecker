import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, AreaChart, Area } from 'recharts';

export default class Chart extends Component {

  render() {

    const { name, data } = this.props;

    return (
      <div>
        <h1>{name} chart</h1>
        <LineChart
          width={850} height={850} data={data}
          margin={{ top: 40, right: 20, bottom: 20, left: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip
            wrapperStyle={{
              borderColor: 'white',
              boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
            }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            labelStyle={{ fontWeight: 'bold', color: '#666666' }}
          />
          <Line dataKey="price" stroke="#ff7300" dot={false} />
          <Brush dataKey="date" startIndex={data.length - 40}>
            <AreaChart>
              <CartesianGrid />
              <YAxis hide domain={['auto', 'auto']} />
              <Area dataKey="price" stroke="#ff7300" fill="#ff7300" dot={false} />
            </AreaChart>
          </Brush>
        </LineChart>
      </div>
    );
  }
}
