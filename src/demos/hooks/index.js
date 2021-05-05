/**
 * 必须要react和react-dom 16.7以上
 */

import React, { useState, useEffect, useMemo, useRef } from 'react'

export default () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('sun');
  const DivDemo = useMemo(() => <div> hello , i am useMemo </div>,[])
  const curRef  = useRef(null)
  useEffect(()=>{
    console.log(curRef.current)
  },[])

  useEffect(()=>{
    console.log(1)
  },[])
  useEffect(()=>{
    console.log(2)
  },[])
  useEffect(()=>{
    console.log(3)
  },[])

  return <div ref={ curRef } >
    hello,world { number } {name}
    { DivDemo }
    <button onClick={() => setNumber(number+1) } >number++</button>
  </div>
}

