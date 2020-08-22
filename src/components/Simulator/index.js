import React,{useState} from 'react';
import './styles.scss';

import Input from '../Input/index';
import Card from '../Card/index';
import ButtonCommon from '../Button/index';
import Message from '../Message/index';

import ImgSPO2 from '../../assets/image/spo2.jpg';
import ImgFC from '../../assets/image/fc.jpg';

export default function Form(){
    const initialValues={
        name:'',
        lastName:'',
        diagnostic:'',
        spo2:'0',
        fc:'0'
    }
    const [values, setValues]= useState(initialValues);

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="form-box">
            <h1>Simule os dados do paciente</h1>
            <form noValidate>
                <Input 
                    className="input-name-last-name"
                    placeholder="Nome"
                    type="text"
                    name="nome"
                />
                <Input 
                    className="input-name-last-name"
                    placeholder="Sobrenome"
                    type="text"
                    name="sobrenome"
                />
            </form>
            <Input 
                className="input-diagnostic"
                placeholder="Diagnóstico"
                type="text"
                name="diagnostico"
            />
            <section>
                <article>
                    <Card 
                        image={ImgSPO2}
                        title="SpO2"
                        value={values.spo2}
                        unit="%"
                    />
                </article>
                <article>
                    <Card 
                        image={ImgFC}
                        title="FC"
                        value={values.fc}
                        unit="bpm"
                    />
                </article>
            </section>
            <ButtonCommon
                name="SUBMIT"
                handleSubmit={handleSubmit}
            />
            <h3>Messagem no formato HL7</h3>
            <Message />
        </div>
    );
}