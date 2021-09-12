import React from 'react';

import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';

import './styles.css'

export default function App() {
  
  return(
    <CounterContextProvider>
    <div>
      <h1>Context API</h1>
      <MyCounter />
    </div>
    </CounterContextProvider>
  )
}
