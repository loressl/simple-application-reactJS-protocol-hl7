import React from 'react';
import './styles.scss';
import {IconButton } from '@material-ui/core';
import {ArrowBackIos,ArrowForwardIos} from '@material-ui/icons';

export default function Card({image, title, value, unit}){
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
                    <IconButton aria-label="previous">
                        <ArrowBackIos/>
                    </IconButton>
                    <IconButton aria-label="next">
                        <ArrowForwardIos />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}