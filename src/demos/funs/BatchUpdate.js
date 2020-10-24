import React from 'react'

/**
 * batch update
 */
export default class BatchUpdate extends React.Component {
  constructor() {
    super()

    this.state = {
      num: 0
    };
  }

  componentDidMount() {

  }

  handleClick = () => {
    // 主动'batchUpdates'
    // setTimeout(() => {
    //   this.countNum();
    // }, 0);


    // 事件处理函数自带'batchUpdates'
    this.countNum();
  };

  countNum = () => {
    const num = this.state.num;

    this.setState({
      num: num + 1
    })
    console.log(this.state.num);
    this.setState({
      num: num + 2
    })
    console.log(this.state.num);
    this.setState({
      num: num + 3
    })
    console.log(this.state.num);
  };


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>按钮num:{this.state.num}</button>
      </div>
    )
  }
}


