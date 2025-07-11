import {useState} from 'react'  
// PropTypes lo que hace es poder definir un tipo a la prop
import PropTypes from 'prop-types'; // Se instala manualmente (comandoEnTerminal: yarn add prop-types)



export const CounterApp =({value})=>{
    const [counter,setCounter] = useState(value);

    const ManejadorEventos = ()=>{
        //console.log(event)
        setCounter (counter +1);
    };
    return (
        <>                              
        <h1>CounterApp </h1>
        <h2>{counter}</h2> 
        <button onClick={ManejadorEventos} >
            +1
        </button >
        </>
    );
};

CounterApp.propTypes={
    value:PropTypes.number.isRequired,
};
// Defaults props (que se muestra si no se manda nada)
CounterApp.defaultProps = {
    value: 69,
};

