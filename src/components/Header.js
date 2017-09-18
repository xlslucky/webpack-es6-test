import React, { Component } from 'react';
import { Link } from 'react-router';

import 'css/home.css';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-main">
          <a href="/" className="logo"></a>
        </div>
      </div>
    )
  }
}
