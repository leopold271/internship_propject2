import React, { useEffect, useState } from 'react';
import classes from './square2.module.css';

const Square2 = (props) => {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(+a + +b)
    }, [a, b])

    const handleResetButton = () => {
        setA(0);
        setB(0);
        setResult(0);
    }
    return (
        <div className={classes.square2}>
            <div className={classes.calc}>
                <form>
                    <label htmlFor="1stNumber">1st number</label>
                    <input type="text" id='1stNumber' onChange={(e) => setA(e.target.value)} value={a} />
                    <br />
                    <label htmlFor="2ndNumber">2nd number</label>
                    <input type="text" id='2ndNumber' onChange={(e) => setB(e.target.value)} value={b} /><br />
                    <label htmlFor="result">result</label>
                    <input type="text" id='result' value={result} />
                    <input type="reset" onClick={handleResetButton} />
                </form>
            </div>
        </div>
    )
}




export default Square2;