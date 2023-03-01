import React from "react";

const InputComponent = ({ handleChange, handleClick, handleSelect, selectList }) => {
    return (
        <>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>입력</button>
            <select onChange={handleSelect}>
                {selectList.map((item, index) => {
                    return <option key={index} value={item.value}>{item.key}</option>
                })}
            </select>
        </>
    );
};

export default InputComponent;