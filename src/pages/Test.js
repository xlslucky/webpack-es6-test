import React, { Component } from 'react';
import { Link } from 'react-router';

import { Header } from '../components/Header';
import { List } from '../components/List';

export class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: '大鹏' },
        { name: '春光' },
        { name: '张鑫' },
        { name: '胥昂' },
      ]
    };
  }

  componentDidMount() {

  }

  removeItem(index) {
    let { list } = this.state;
    list.splice(index, 1)
    this.setState({list})
  }

  addItem(name) {
    if (!name) {
      alert('请输入姓名！')
      return false;
    }
    let { list } = this.state;
    list.push({name})
    this.setState({list})
  }

  render() {
    let { list } = this.state;
    return (
      <div className="con">
        <Header />
        <List list={list} remove={this.removeItem} add={this.addItem} />
      </div>
    )
  }
}
