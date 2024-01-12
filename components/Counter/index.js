import {useState} from "react"

export default function counter() {
    const [number, setNumber] = useState(0);
    return(
       <>
       <div>
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        <button onClick={() => setNumber(number - 1)}>Increment</button>

       </div>
       <div>
           {number}
       </div>
       </>

    )
}