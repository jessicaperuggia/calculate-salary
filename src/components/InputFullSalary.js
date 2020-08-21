import React from 'react';

export default function InputFullSalary(props) {
    const handleInputChange = (event) => {
        const newValue = +event.target.value;
        props.onSalaryChange(newValue);
    }

    const { currentValue } = props;
    return (
        <div className='input-field col s12'>
            <input
                autoFocus
                id='inputFullSalary'
                type='number'
                value={currentValue}
                onChange={handleInputChange}
                min='1000'
                step='100'
            />
            <label className='active' htmlFor='inputFullSalary' >Salário bruto:</label>
        </div>
    );

}

