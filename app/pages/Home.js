import React, { Component } from 'react';
import { Link } from 'react-router';

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是首页</h2>
        <Link to="/children">进入下一页</Link>
      </div>
    )
  }
}