import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './component/Formulario';
import axios from 'axios';
import Cotizacion from './component/Cotizacion';
import Spinner from './component/Spinner';

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
color: #000;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (moneda === '' || criptomoneda === '') return;
    console.log('Cotizando Criptomonedas...');
    const consultaValoresCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const res = await axios.get(url)
      //Mostrar spinner.
      setLoading(true);

      //Oculpar spinner y mostrar información.
      setTimeout(() => {
        setLoading(false)
        //Guardar resultados.
        setResultado(res.data.DISPLAY[criptomoneda][moneda])
      }, 3000);

    }
    consultaValoresCriptomoneda();
  }, [moneda, criptomoneda])

  //Renderizar en "componente" la cotización o spinner.
  const componenteLoading = (loading) ? <Spinner /> : <Cotizacion resultado={resultado} />

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
          <Heading2>{criptomoneda}</Heading2>
          {componenteLoading}
        </div>
      </Contenedor>
    </>

  );
}

export default App;
