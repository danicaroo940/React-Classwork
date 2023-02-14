import { useState } from "react";
import { Button } from "../components/Button";
export function Counter (props){
    const {initValue, upClick, downClick} = props;
    const [counter, setCounter] = useState(initValue);
    return (
        <div>
            <h2>Counter</h2>
            <Button children={'UP x'+ upClick} onClick={ () => setCounter(counter + upClick) } />
            <p>{counter}</p>
            <Button children={'DOWN x'+ downClick} onClick={ () => setCounter(counter - downClick) } />
        </div>
    )
}