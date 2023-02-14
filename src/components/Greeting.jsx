import { useState, useEffect } from "react";

export function Greeting(props) {
  const { value } = props;
  const [greeting, setGreeting] = useState(value);
  
    function newGreeting() {
        setTimeout(() => {
            setGreeting('Hola Alfonsina')
        }, 3000);
    }

    useEffect(() => {
        newGreeting();
    }, []);
  return (
    <>
        <h1>Greetings</h1>
        <p>{greeting}</p>
    </>
  )
}