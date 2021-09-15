import React, { useReducer, createContext, useEffect } from 'react';

import './styles.css';
import {Child} from './Child';

export const CountContext = createContext();


export default function App() {
  /*const countReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };*/


  /*
  esta funçao trabalha como um useState
  onde o state é o valor atual
  action é o valor que ela recebeu para tratar
  */
  
  const countReducer = (state, action) => {

    switch (action.type) {
      case 'INCREMENT1':
        return {
          count2: state.count2,
          count1: state.count1 + action.payload,
      };
      case 'INCREMENT2':
        return {
          ...state,
          count2: state.count2 + action.payload,
      };
      case 'DECREMENT1':
        return {
          ...state,
          count1: state.count1 - action.payload,
        };
      case 'DECREMENT2':
      return {
        ...state,
        count2: state.count2 - action.payload,
      };
      default:
        return state;
    }
  };

  const countInitialValue = {
    count1: 0,
    count2: 0,
  };

  /*
  useReducer
  primeiro valor = uma funçao onde o valor passado pelo setCount, sera tratado
  segundo valor = um array de valores que podem ser atualizados quando passar pela funçao definida
  */

  /*
  o valor nao precisa ir para o state, para depois ser tratado

  ele pode ser tratado no mesmo momento que esta sendo salvo com o useReducer 
  
  */

  const [count, setCount] = useReducer(countReducer, countInitialValue);

  
  return(
    <div className="App">
      <h1>Oi</h1>

      <CountContext.Provider value={{ count, setCount }}>
        <Child />
      </CountContext.Provider>

    </div>
  )
}
