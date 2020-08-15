import React, { Component } from 'react';
import css from '../components/read-only-input.module.css';

export default class ReadOnlyInput extends Component {
    render() {
        const { label, value } = this.props;
        return (
            <div className={css.divContainer}>
                <label>
                    <span>{label}</span>
                    <input type='text' readOnly disabled value={value} />
                </label>
            </div>

        );
    }
}
