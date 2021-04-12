import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomonedas = (label, stateInicial, opciones) => {
  //state del custom hook
  const [state, actualizarState] = useState("");

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
      <option value="">- Seleccione -</option>
      {opciones.map((opcion) => (
                    <option key={opcion.CoinInfo.Name} value={opcion.CoinInfo.Name}>
                        {opcion.CoinInfo.FullName}
                    </option>
                ))}
      </Select>
    </Fragment>
  );

  //Retorna state, interfaz y fn que modifica el state
  return [state, Seleccionar];
};

export default useCriptomonedas;
