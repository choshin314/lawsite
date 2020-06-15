import { useState } from "react"

function Toggler(props) {
    const [isOn, setIsOn] = useState(false);
    
    return (
        props.children(isOn, setIsOn)
    )
}

export default Toggler;