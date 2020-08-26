import React from 'react';
import './styles.scss';

export default function Empty(){
    return(
        <div className="box">
            <div className="box-2">
                <div className="empty">
                    <h1>Não há mais páginas para navegar</h1>
                    <h2>Obrigada por usar a aplicação!!</h2>
                </div>
            </div>
        </div>
    );
}