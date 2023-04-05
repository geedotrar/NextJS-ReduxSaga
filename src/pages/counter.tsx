import React, { useState } from 'react'

export default function Counter() {
    const [Countre, SetCounter] = useState(5)
    return (
        <div>counter : {Countre}
        <button onClick={()=>SetCounter(Countre + 1)}> + </button>
        <button onClick={()=>SetCounter(Countre - 1)}> - </button>
        </div>
    )
}
