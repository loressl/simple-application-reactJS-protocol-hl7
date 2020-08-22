import React,{useState} from 'react';
import './styles.scss';

import Input from '../Input/index';
import Card from '../Card/index';
import ButtonCommon from '../Button/index';
import Message from '../Message/index';

import ImgSPO2 from '../../assets/image/spo2.jpg';
import ImgFC from '../../assets/image/fc.jpg';

import MessageHL7 from '../../hl7/messageHl7';

export default function Form(){
    const initialValues={
        name:'',
        lastName:'',
        diagnostic:''
    }
    const initialValuesSignsVitals={
        spo2:'0',
        fc:'0'
    }
    const [message, setMessage]= useState('');
    const [values, setValues]= useState(initialValues);
    const [signsVitals, setSignsVitals] = useState(initialValuesSignsVitals);

    function handleChange(e){
        let key= e.target.getAttribute('name');
        let value= e.target.value;
        setValues({
            ...values,
            [key]:value
        });
    }

    function handleChangeSignsVitals(key,value){
        setSignsVitals({
            ...signsVitals,
            [key]:value
        })
    }

    function handleSubmit(e){
        setMessage(MessageHL7.createMessageHl7(values.name, values.lastName, values.diagnostic, 
            signsVitals.spo2, signsVitals.fc))
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
            </form>
            <Input 
                className="input-diagnostic"
                placeholder="Diagnóstico"
                type="text"
                name="diagnostic"
                handleChange={handleChange}
            />
            <section>
                <article>
                    <Card 
                        image={ImgSPO2}
                        title='SpO2'
                        value={signsVitals.spo2}
                        unit="%"
                        values={signsVitals}
                        setValues={setSignsVitals}
                        handleChangeSignsVitals={handleChangeSignsVitals}
                    />
                </article>
                <article>
                    <Card 
                        image={ImgFC}
                        title='FC'
                        value={signsVitals.fc}
                        unit="bpm"
                        values={signsVitals}
                        setValues={setSignsVitals}
                        handleChangeSignsVitals={handleChangeSignsVitals}
                    />
                </article>
            </section>
            <ButtonCommon
                name="SUBMIT"
                handleSubmit={handleSubmit}
            />
            <h3>Messagem no formato HL7</h3>
            <Message message={message}/>
        </div>
    );
}