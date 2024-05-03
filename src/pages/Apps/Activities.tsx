import React from 'react';
import { useState } from 'react';
import { number } from 'yup';

const Activities = () => {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [result, setResult] = useState(0);

    console.log(val1);
    console.log(val2);

    // const handleOnChange = (e) => {
    //     setVal1(e.target.value);
    //     setVal2(e.target.value);
    // };
    // console.log(val2);
    const add = () => {
        const result1 = Number(val1) + Number(val2);
        
        // return result1
        setResult(result1)
        // console.log(result1);
    };

    // const fun = () =>{
    //   setVal1(val1+1);
    //   setVal2(val2+2);

    // }

    return (
        <>
            <input className="" placeholder=" input a no." onChange={(e)=>setVal1(e.target.value)} />
            <div>{result}</div>
            <input className=" mx-6 mt-6 " placeholder=" input a 2nd no." onChange={(e)=>setVal2(e.target.value)} />
            <button onClick={add} className="btn-primary btn mt-8">
                Add
            </button>
        </>
    );
};
export default Activities;
