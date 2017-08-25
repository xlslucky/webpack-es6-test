import React, { Component } from 'react';
import { Link } from 'react-router';

export class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      newName: '',
      list: this.props.list
    }
  }

  componentDidMount() {
    // console.log(this.state.list)
  }

  render() {
    let { list, newName } = this.state;
    return (
      <div>
        <div>
          <input 
            onChange={({target})=>{
              newName = target.value;
              this.setState({newName})
            }}
            type="text" 
            value={newName}/>
          <button onClick={this.props.add.bind(this, newName)}>添加</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <span>我是 {item.name} </span>
                  <button onClick={this.props.remove.bind(this, index)}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
