/**
 * 必须要react和react-dom 16.7以上
 */

import React, { useState, useEffect, useMemo, useRef } from 'react'

export default () => {
  const [ number , setNumber ] = useState(0)
  const DivDemo = useMemo(() => <div> hello , i am useMemo </div>,[])
  const curRef  = useRef(null)


  useEffect(()=>{
    console.log(1)
  },[ number ])
  useEffect(()=>{
    console.log(2)
  },[])
  useEffect(()=>{
    console.log(3)
  },[])


  const handerClick = ()=>{
    //    setNumber(1)
    //    setNumber(2)
    //    setNumber(3)
    setNumber(state=>state+1)
    // 获取上次 state = 1
    setNumber(state=>state+1)
    // 获取上次 state = 2
    setNumber(state=>state+1)
  }


  return <div ref={ curRef } >
    hello,world { number }
    { DivDemo }
    <button onClick={()=> handerClick() } >number++</button>
  </div>
}

