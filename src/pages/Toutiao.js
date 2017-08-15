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
    alert('准备刷！')
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
        <div>
          <h1>刷头条访问量</h1>
          <p>输入的地址是：{address}</p>
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
        <div>
          <ul>
            <li style={{listStyle: 'circle'}}>在手机端打开，如果是pc端，可以 F12 选择手机模式</li>
            <li>默认的是1000ms刷一次，启动之后去查看访问量，如果没变，请换下一个</li>
          </ul>
        </div>
      </div>
    )
  }
}
