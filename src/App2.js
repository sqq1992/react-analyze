import React, {Component, useState} from 'react'
import RenderIng from "./demos/renderIng/RenderIng";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        };
    }

    componentDidMount() {

    }

    handleClick = () => {
        const {num} = this.state;

        this.setState({
            num: num + 1
        })
    };

    render() {
        const {num} = this.state;

        const a = (
            <div key="sun1" className="sun">
                <p key="a">ka</p>
                <h3 key="b">song</h3>
            </div>
        );
        const b = (
            <section key="sun1" className="sun">
                <h3 key="b">song</h3>
                <p key="a">ka</p>
            </section>
        );

        return (
            <div className="App">
                {/*<div className="parent-sun" onClick={this.handleClick}>*/}
                {/*    {num % 2 === 0 ? a : b}*/}
                {/*</div>*/}
                {/*<RenderIng />*/}

                <header className="App-header">
                    <img
                        src="https://s5.mogucdn.com/mlcdn/55cf19/200825_6gdlkde9h6967i4gae8afa3k05lie_640x960.jpg_640x854.v1cAC.40.webp"
                        className="App-logo" alt="logo"/>
                    <p onClick={()=>{
                        this.handleClick();
                    }}>
                        Edit
                        <code title={num}>{num}</code>
                        and save to load
                    </p>
                    <a
                        className="App-link"
                        href="https://baidu.com"
                        target="_blank"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

// function App() {
//
//     const [num, updateNum] = useState(0);
//
//
//     return(
//         <div className="App">
//             <header className="App-header">
//                 <img src="https://s5.mogucdn.com/mlcdn/55cf19/200825_6gdlkde9h6967i4gae8afa3k05lie_640x960.jpg_640x854.v1cAC.40.webp" className="App-logo" alt="logo"/>
//                 <p onClick={()=>{
//                     updateNum(num + 1);
//                 }}>
//                     Edit
//                     <code>{num}</code>
//                     and save to load
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://baidu.com"
//                     target="_blank"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     )
// }

export default App
