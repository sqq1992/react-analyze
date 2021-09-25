import React, {Suspense, useEffect, useLayoutEffect, useState} from 'react'

import SuspenseIndex from './demos/suspense/index'

function useSWR() {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData({
                name: "sun",
                age: 1992,
                description: 'tiancai'
            });
            setLoading(false);
        }, 3000);

    }, []);

    if (loading) {
        throw Promise.resolve(null);
    } else {
        return { data };
    }

}


function ShowPerson() {
    const {data} = useSWR();

    return(
        <div>
            <h3>name:{data.name}</h3>
            <h3>age:{data.age}</h3>
            <h3>description:{data.description}</h3>
        </div>
    )
}


function App2() {

    const [num, updateNum] = useState(0);

    useEffect(()=>{
        console.log('mount1');
    },[])

    useEffect(()=>{
        console.log('mount2');
    },[])

    useEffect(()=>{
        console.log('mount3');
    },[])

    useLayoutEffect(()=>{

        if(num===2){
            updateNum(num + "layout");
        }

    },[num])

    const a = (
        <ul>
            <li key="0">0</li>
            <li key="1">1</li>
        </ul>
    )

    const b = (
        <ul>
            <div key="0">0</div>
            <li key="1">1</li>
        </ul>
    )

    const handleUpdateNum = (e) => {

        // updateNum(num=>num+1);
        // updateNum(num=>num+2);

        //todo 事件池
        // console.log(e.target) // button
        // setTimeout(()=>{
        //     console.log(e.target) // null
        // },0)

        // updateNum(num + 1);
        // setTimeout(()=>{
        //     updateNum(100);
        // },5000)
        // updateNum(state=>state+2);
        // updateNum(state=>state+3);


        updateNum(3);
    };

    const handleChangeInput = (value) => {
        console.log('handleChangeInput', value);
    };


    return (
        <div className="App">
            {/*<Suspense fallback={(<div>suspense-loading</div>)}>*/}
            {/*    <ShowPerson />*/}
            {/*</Suspense>*/}

            <SuspenseIndex />
            <div id="diff">
                {num % 2 === 0 ? a : b}
            </div>
            <header className="App-header" id="app-header">
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
            <input  placeholder="请输入内容" onChange={ handleChangeInput }  />
        </div>
    );
}

export default App2
