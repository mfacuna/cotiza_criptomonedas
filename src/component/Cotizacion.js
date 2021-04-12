import React from 'react';
import styled from '@emotion/styled';

const MensajeValor = styled.p`
    display: block;
    background-color: #124578;
    padding: 1rem;
    margin: 0px 0px 10px 0px;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    
    return (
        <div>
            <MensajeValor>
            Precio: <span>{resultado.PRICE}</span>
            </MensajeValor>
            <MensajeValor>
            Mayor Precio Hoy: <span>{resultado.HIGHDAY}</span>
            </MensajeValor>
            <MensajeValor>
            Menor Precio Hoy: <span>{resultado.LOWDAY}</span>
            </MensajeValor>
            <MensajeValor>
            Variación Ultimas 24 Horas: <span>{resultado.CHANGEPCT24HOUR}</span>
            </MensajeValor>
            <MensajeValor>
            Ultima Actulización: <span>{resultado.LASTUPDATE}</span>
            </MensajeValor>
        </div>
    );
}

export default Cotizacion;
