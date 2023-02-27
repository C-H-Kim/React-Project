import { useState } from 'react'

const InputComponent = (props) => {
    const value = "test";
    const [name, setName] = useState("test");
    return <p>{value}</p>
};

export default InputComponent;