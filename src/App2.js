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
        <ul >
            <p key="first" >first</p>
            <h2 key="third">third</h2>
            <h1 key="second">second</h1>
        </ul>
    )

    const b = (
        <ul >
            <div key="first" >first</div>
            <h1 key="second">second</h1>
            <h2 key="third">third</h2>
        </ul>
    )

    const handleUpdateNum = () => {
        updateNum(num + 1);
    };


    return (
        <div className="App">
            <div id="diff">
                {num % 2 === 0 ? a : b}
            </div>
            <header className="App-header">
                <img
                    src="https://s5.mogucdn.com/mlcdn/55cf19/200825_6gdlkde9h6967i4gae8afa3k05lie_640x960.jpg_640x854.v1cAC.40.webp"
                    className="App-logo" alt="logo"/>
                <p onClick={handleUpdateNum}>
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
