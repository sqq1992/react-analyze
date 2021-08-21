import React from 'react'


export default class BatchUpdate extends React.Component {
  state = {
    num: 1,
  }

  handleUpdateNum =()=> {

    let a = () => {
      setTimeout(()=>{
        this.setState({
          num: this.state.num + 4,
        })
      })
    };
    this.setState({
      num: this.state.num + 2,
    })
    a();
  }

  render() {
    console.log('render~', this);
    return (
      <div className="batchUpdate">
        <p onClick={this.handleUpdateNum}>计数器{this.state.num}</p>
      </div>
    )
  }
}

