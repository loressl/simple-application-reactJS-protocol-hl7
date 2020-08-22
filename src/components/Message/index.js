import React from 'react';
import './styles.scss';

export default function Message({message}){

    return(
        <div className="message">
            <textarea value={message} rows="5" disabled>
            </textarea>
        </div>
    );
}