import React , { useState }from 'react'
import Registration from './Registration'

export const Counter = () => {
    const [count,setCount] = useState(0)
    const [data,setData] = useState("value is zero")
    const [toggle,setToggle]= useState(true)

    let incrementCount=()=>{
        setCount(count +1)
        setData("increment")
    }
    let decrementCount=()=> {
        setCount(count -1)
        setData("Decrement")
    }
    let toggled=()=> {
        setToggle(!toggle)
    }
  return (
    <div>
    <h2>{count}</h2>
    <h2>{data}</h2>
    <button onClick={decrementCount}>-</button>
    <button onClick={incrementCount}>+</button>
    <button onClick={toggled}>
        {toggle?
         <span>register</span>
        :
         <span>login</span>
        }
        </button>
        {toggle?
        <div>
            <Registration/>
        </div>
        :
        <div>
            <h2>If you are first time, register on another page</h2>
        </div>
    }
    </div>
  )
}
