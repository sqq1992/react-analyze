import React from 'react'

export default class RefDemo extends React.Component {
  constructor() {
    super()
    this.objRef = React.createRef()

    this.state = {
      name:"zy"
    };

    // { current: null }
  }

  componentDidMount() {
    // console.log(`span1: ${this.refs.ref1.textContent}`)
    // console.log(`span2: ${this.ref2.textContent}`)
    // console.log(`span3: ${this.ref3.current.textContent}`)
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got'
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got'
    }, 1000)
  }

  handleShow(){
    console.log('323')
    let a = ((((500 - 2 + 5000 / 10) / 25) | 0) + 1) * 25
    this.setState({
      name: 'sun'
    })
  }

  render() {
    return (
      <>
        <div onClick={this.handleShow.bind(this)}>{this.state.name}</div>
        <p ref="stringRef">span1</p>
        <p ref={ele => (this.methodRef = ele)}>span3</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}

// export default () => {
//   return <div>Ref</div>
// }
