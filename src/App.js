import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './component/Formulario';
import axios from 'axios';
import Cotizacion from './component/Cotizacion';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #66A2FE;
  text-align:center;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 0px;
  padding: 30px;
  &::after {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

const Heading2 = styled.h2`
font-family: "Bebas Neue", cursive;
color: #fff;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
margin-buttom: 0px;
display: block;
`;

const Header = styled.div`
  background-color: #fff;
  max-width: 900px;
  margin: 0 auto;
  align: center;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
`


function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (moneda === '' || criptomoneda === '') return;
    console.log('Cotizando Criptomonedas...');
    const consultaValoresCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const res = await axios.get(url)
      setResultado(res.data.DISPLAY[criptomoneda][moneda])
    }
    consultaValoresCriptomoneda();
  }, [moneda, criptomoneda])

  return (
    <>
      <Header><Heading>Cotiza Criptomonedas al instante</Heading></Header>
      <Contenedor>
        <div>
          <Formulario
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
          />
        </div>
        <div>
          {Object.keys(resultado).length === 0 ? null : <Heading2>{criptomoneda}</Heading2>}
          <Cotizacion
            resultado={resultado}
          />
        </div>
      </Contenedor>
    </>

  );
}

export default App;
