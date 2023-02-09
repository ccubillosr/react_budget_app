import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch, totalGastos,budget} = useContext(AppContext);
    let [valor, setValor] = useState('');
    let change=false;
    if(valor === '')
    {
        valor = budget;
    }
    
    const onChange = (event) =>{
        let valornew=0;
        
        valornew=event.target.value;
        if (change === false)
        {
            setValor(parseInt(event.target.value));
            change=true;
            return;
        }
        else
        {
            setValor(parseInt(valornew));
            change=true;
            return;
        }
    };
    if(valor > 20000) {
        alert("The budget limit cannot exceed £ 20000");
        setValor({valor});
        return;
    };
    if(valor < totalGastos) {
        alert("The budget cannot be lower to spent to far £ "+ totalGastos);
        setValor(totalGastos);
        return;
    };
    
    dispatch({
        type: 'valor',
        payload: valor,
    });
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                        required='required'
                        type='number'
                        id='valor'
                        style={{ marginLeft: '2rem' , size: 10}}
                        value={valor}                     
                        min={totalGastos}
                        max='20000'
                        step='10'
                        onChange={onChange}>
                        </input>
            </span>
        </div>

    );
};
export default Budget;
