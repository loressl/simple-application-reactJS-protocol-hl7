import React, { useState } from 'react';
import './styles.scss';

import Input from '../Input/index';
import Card from '../Card/index';
import ButtonCommon from '../Button/index';
import Message from '../Message/index';

import MessageHL7 from '../../hl7/messageHl7';
import '../../hl7/signsVital';
import signsVitalsConfig from '../../hl7/signsVital';

export default function Simulator() {
    const initialValues = {
        name: '',
        lastName: '',
        diagnostic: ''
    }
    const [message, setMessage] = useState('');
    const [values, setValues] = useState(initialValues);
    const [signsVitals, setSignsVitals] = useState(signsVitalsConfig);

    function handleChange(e) {
        let key = e.target.getAttribute('name');
        let value = e.target.value;
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChangeSignsVitals(key, value) {
        setSignsVitals(signsVitals.map((item) =>
            item.type === key
                ? { ...item, value: value } : item
        ))
    }

    function handleSubmit(e) {
        setMessage(MessageHL7.createMessageHl7(values, signsVitals))
        e.preventDefault();
    }

    return (
        <div className="form-box">
            <h1>Simule os dados do paciente</h1>
            <div className="fields-parent">
                <div className="fields-name">
                    <Input
                        className="input-name-last-name"
                        placeholder="Nome"
                        type="text"
                        name="name"
                        handleChange={handleChange}
                    />
                    <Input
                        className="input-name-last-name"
                        placeholder="Sobrenome"
                        type="text"
                        name="lastName"
                        handleChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="input-diagnostic"
                        placeholder="Diagnóstico"
                        type="text"
                        name="diagnostic"
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <section>
                <article>
                    {signsVitals.map((item) => (
                        item.type === 'spo2' &&
                        <Card
                            key={item.type}
                            image={item.image}
                            title={item.type}
                            value={item.value}
                            unit={item.unit}
                            handleChangeSignsVitals={handleChangeSignsVitals}
                        />
                    ))}
                </article>
                <article>
                    {signsVitals.map((item) => (
                        item.type === 'fc' &&
                        <Card
                            key={item.type}
                            image={item.image}
                            title={item.type}
                            value={item.value}
                            unit={item.unit}
                            handleChangeSignsVitals={handleChangeSignsVitals}
                        />
                    ))}
                </article>
            </section>
            <ButtonCommon
                name="SUBMIT"
                handleSubmit={handleSubmit}
            />
            <h3>Mensagem no formato HL7 versão 2</h3>
            <Message message={message} />
        </div>
    );
}