import React from 'react';
import { formatPercentage, formatMoney } from '../helpers/formatters';

export default function ReadOnlyInput(props) {

    const { label, value, percentage, color = 'black' } = props;
    const id = 'input' + label;
    const formattedPercentage = percentage > 0 ? `(${formatPercentage(percentage)})` : '';
    const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;

    return (
        <div className='input-field col s12 m6 l3'>
            <input type='text' id={id} readOnly value={formattedValue} style={{ color, fontWeight: 'bold' }} />
            <label className='active' htmlFor={id} >
                {label}
            </label>
        </div>
    );
}
