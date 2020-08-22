import React from 'react';
import './styles.scss';

export default function Footer(){
    return(
        <footer id="footer">
            <div className="app-footer"/>
            <div className="app-footer-span">
                <span className="app-footer__message">
                &copy; Autora: Lorena Lima
                </span>
            </div>
        </footer>
    );
}