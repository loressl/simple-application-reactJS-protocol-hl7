import React from 'react';
import './styles.scss';
import Form from '../../components/Form';
import Message from '../../components/Message';

export default function Home(){
    return(
        <div className="container-home">
            <Form />
            <Message />
        </div>
    );
}