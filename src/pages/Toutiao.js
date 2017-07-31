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
    if (!/www.wukong.com\/question/g.test(address)) {
      alert('请输入正确的地址！')
      this.setState({address: ''})
      return false;
    }
    setInterval(()=>{
      fetch(address).then((e)=>{
        // console.log(e)
      })
    }, 1000)
  }

  render() {
    let { address } = this.state;
    let btnStyle = {
      height: '30px', 
      border: '1px solid red', 
      padding: '0 20px'
    }
    let textStyle = {
      border: '1px solid red',
      height: '28px',
      marginRight: '10px'
    }
    return (
      <div>
        <p>刷头条访问量</p>
        <input 
          type="text" 
          style={textStyle}
          onChange={({target})=>{
            address = target.value
            this.setState({ address })
          }}
          value={address}/>
        <button 
          style={btnStyle}
          onClick={this.request.bind(this)}>btn</button>
      </div>
    )
  }
}