import React from 'react';
import './styles.scss';

export default function Input({className, placeholder, type, name}){
    return(
        <div className="input-form">
            <input 
                className={className}
                placeholder={placeholder}
                type={type}
                name={name}
            />
        </div>
    );
}