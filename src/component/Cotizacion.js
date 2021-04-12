import React from 'react';
import styled from '@emotion/styled';

const MensajeValor = styled.p`
    background-color: #124578;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;
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
