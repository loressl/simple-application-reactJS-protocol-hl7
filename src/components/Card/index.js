import React from 'react';
import './styles.scss';
import {IconButton } from '@material-ui/core';
import {ArrowBack,ArrowForward} from '@material-ui/icons';

export default function Card({image, title, value, unit,handleChangeSignsVitals}){
    function handlePrevious(e){
        var v = parseInt(value);
        if(v>0)
            v --;
        value= v.toString();
        handleChangeSignsVitals(title.toLowerCase(),value);
    }

    function handleNext(e){
        var v = parseInt(value);
        if(title === 'spo2'){
            if(v<100)
                v ++;
        }else{
            if(v<220)
                v ++;
        }
        value= v.toString();
        handleChangeSignsVitals(title.toLowerCase(),value);
    }


    return(
        <div className="card-1">
            <div className="card-product-img">
                <img src={image} alt="imagem ilustrativa" height="110" width="110"/>
            </div>
            <div className="card-product-info">
                <div className="card-product-text">
                    <h1>{title}</h1>
                    <h2>{value + unit}</h2>
                </div>
                <div className="card-product-controls">
                    <IconButton aria-label="previous" onClick={handlePrevious}>
                        <ArrowBack/>
                    </IconButton>
                    <IconButton aria-label="next" onClick={handleNext}>
                        <ArrowForward />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}