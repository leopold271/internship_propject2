import React from 'react';

class Square2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: +0,
            b: +0,
            result: +0
        }

        this.aOnChange = this.aOnChange.bind(this);
        this.bOnChange = this.bOnChange.bind(this);
        this.handleClickCalcButton = this.handleClickCalcButton.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);

    }

    aOnChange(e) {
        this.setState({
            a: e.target.value
        })
    }

    bOnChange(e) {
        this.setState({
            b: e.target.value        
        })
    }

    handleClickCalcButton() {
        this.setState({
            result: +this.state.a + +this.state.b  
        })
        document.getElementById('result').value = this.state.result
    }

    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            a: 0,
            b: 0,
            result: 0
        })
    }


    render() {

        const e = React.createElement;
        return (

            e('div', { className: 'square2' }, [
                e('div', { className: 'calc' }, [
                    e('form', null, [
                        e('label', { htmlFor: '1stNumber', }, '1st number'),
                        e('input', { type: 'text', id: '1stNumber', onChange: this.aOnChange, value: this.state.a }),
                        e('br', null),
                        e('label', { htmlFor: '2ndNumber' }, '2nd number'),
                        e('input', { type: 'text', id: '2ndNumber', onChange: this.bOnChange, value: this.state.b }),
                        e('input', { type: 'button', value: 'calc', id: 'calcBtn', onClick: this.handleClickCalcButton }),
                        e('label', { htmlFor: 'result' }, 'result'),
                        e('input', { type: 'text', id: 'result', value: this.state.result}),
                        e('input', { type: 'reset', onClick: this.handleResetClick })
                    ])
                ])
            ])
        )
    }
}

export default Square2;