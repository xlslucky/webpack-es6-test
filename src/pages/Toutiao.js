import React, { Component } from 'react';
import { Link } from 'react-router';

export class Toutiao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
  }

  request() {
    let { address } = this.state;
    if (!address) {
      alert('请输入地址！')
      return false;
    }
    setInterval(()=>{
      fetch(address).then((e)=>{
        console.log(e)
      })
    }, 1000)
  }

  render() {
    let { address } = this.state;
    return (
      <div>
        <p>刷头条访问量</p>
        <input 
          type="text" 
          onChange={({target})=>{
            address = target.value
            this.setState({ address })
          }}
          value={address}/>
        <button onClick={this.request.bind(this)}>btn</button>
      </div>
    )
  }
}