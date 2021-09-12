import { useState, createContext } from "react";

export const counterContext = createContext();

export default function CounterContextProvider({children}){
    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1);
    }

    function decreaseCount(){
        setCount(count - 1);
    }

    //valores e funçoes a serem exportadas
    const value = {
        count,
        increaseCount,
        decreaseCount
    }


    //dentro de value, os dados que a aplicaçao pode acessar
    //valores de estado e setar estado, funçoes
    return(
        <counterContext.Provider value={value}>
            {children}
        </counterContext.Provider>
    )
}