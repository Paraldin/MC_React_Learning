import React, { useState, useContext } from 'react';
import { ThemeContext } from './App'

export default function CounterHooks({initialCount = 2}) {
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style={style} className="btn" onClick={() => setCount((p) => p - 1 )}>-</button>
            <span> {count} </span>
            <button style={style} className="btn" onClick={() => setCount((p) => p + 1)}>+</button>
        </div>
    )
}