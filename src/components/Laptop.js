import React,{useState} from 'react'

function Laptop({laptop, key, brand, name}) {
const [details, setDetails] = useState(null)

const detail =()=> {
setDetails({key}&{name}&{brand})
}
    return (
        <div>
            {laptop}
            
            <br/>
            <button onClick={detail}>Laptop</button>
        <p>{details}</p>
            
        </div>
    )
}

export default Laptop
