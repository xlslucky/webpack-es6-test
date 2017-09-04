import React, { Component } from 'react';
import { Link } from 'react-router';

import { Header } from '../components/Header';

import { addNum } from '../utils';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    addNum()
  }

  render() {
    return (
      <div className="con">
        <Header />
        <ul style={{paddingLeft: '40px', margin: '16px 0'}}>
          <li style={{listStyle: 'disc'}}>等我有时间了再来写！</li>
        </ul>
      </div>
    )
  }
}
