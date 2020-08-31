import React from 'react';
import './styles.scss';

export default function Input(props){
    return(
        <div className="input-form">
            <input 
                className={props.className}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                onChange={props.handleChange}
            />
        </div>
    );
}