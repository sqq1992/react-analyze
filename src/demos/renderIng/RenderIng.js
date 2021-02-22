import React from 'react'

/**
 * batch update
 */
export default class RenderIng extends React.Component {
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
        <header id="sb">
          <button title={this.state.num} onClick={this.handleClick}>按钮num:{this.state.num}</button>
          <p>
            Edit <code>rendering</code> and save rendering
          </p>
          <a href="">
            Learn React
          </a>
        </header>

      </div>
    )
  }
}


