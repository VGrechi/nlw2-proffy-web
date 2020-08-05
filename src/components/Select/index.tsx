import React from 'react';

import './styles.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string,
        label: string
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>   
            <select value="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(o => {
                    return <option key={o.value} value={o.value}>{o.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;