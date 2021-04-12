import React, { useState, useEffect} from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomonedas from "../hooks/useCriptomonedas";
import axios from "axios";
import Error from './Error';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

    const [criptomonedass, setCriptomonedass] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        { codigo: "CLP", nombre: "Pesos Chilenos" },
        { codigo: "USD", nombre: "Dolares" },
        { codigo: "EUR", nombre: "Euros" },
        { codigo: "GBP", nombre: "Libras Esterlinas" },
    ];

    const [moneda, SelectMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);
    const [criptomoneda, SelectCriptomoneda] = useCriptomonedas("Elige tu Criptomoneda", "", criptomonedass);

    useEffect(() => {
        const getListCriptomonedas = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await axios.get(url);
            setCriptomonedass(response.data.Data)
        }
        getListCriptomonedas();
    }, []);

    const consultarValores = (event) => {
        event.preventDefault()
        //validar si ambos estan llenos.
        if(moneda === '' || criptomoneda === ''){
            setError(true);
            return;
        }

        //pasa los datos al componente Principal
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);
    }

    return (
        <form
        onSubmit={consultarValores}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <SelectMoneda />
            <SelectCriptomoneda />
            <Boton type="submit" value="Calcular" />
        </form>
    );
};

export default Formulario;
