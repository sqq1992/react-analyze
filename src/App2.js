import React, {useEffect, useLayoutEffect, useState} from 'react'

function App() {

    const [num, updateNum] = useState(0);

    useEffect(()=>{
        console.log('num', num);
    },[num])

    // useLayoutEffect(()=>{
    //
    //     if(num===2){
    //         updateNum(num + "layout");
    //     }
    //
    // },[num])

    const a = (
        <div>
            <p key="first">first</p>
            <h1 key="second">second</h1>
        </div>
    )

    const b = (
        <div>
            <h1 key="second">second</h1>
            <p key="first">first</p>
        </div>
    )


    return (
        <div className="App">
            <div id="diff">
                {num % 2 === 0 ? a : b}
            </div>
            <header className="App-header">
                <img
                    src="https://s5.mogucdn.com/mlcdn/55cf19/200825_6gdlkde9h6967i4gae8afa3k05lie_640x960.jpg_640x854.v1cAC.40.webp"
                    className="App-logo" alt="logo"/>
                <p onClick={() => {
                    updateNum(num + 1);
                }}>
                    Edit
                    <code>{num}</code>
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

export default App
