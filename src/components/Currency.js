import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    let {currency, nameCurrency} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);
  
    let dollar='$',namedollar="Dollar";
    let pound ="£",namepound="Pound";
    let euro="€",nameeuro="Euro";
    let ruppee="₹",nameruppee="Ruppee";
    
    const onClick = (event) => {
        let resultado = String(event.target.id);
        if (resultado.trim() === namedollar.trim())
        {
            currency = dollar;
            nameCurrency = namedollar;
        }
        if (resultado.trim() === namepound.trim())
        {
            currency = pound;
            nameCurrency = namepound;
        }
        if (resultado.trim() === nameeuro.trim())
        {
            currency = euro;
            nameCurrency = nameeuro;
        }
        if (resultado.trim() === nameruppee.trim())
        {
            currency = ruppee;
            nameCurrency = nameruppee;
        }
        let texto="Currency:".concat("(" + currency + " "+ nameCurrency + ")") ;
        document.getElementById("btnMenu").innerHTML = texto;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: {
                currency: currency,
                nameCurrency:nameCurrency,
            },
        });
    };
    

    return (
            <div className="dropdown btn-group btn-success" id="dropdown">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" id="btnMenu" 
                aria-expanded="true">
                    Currency: {'(' + currency + ' '+ nameCurrency+')'}
                </button>
                <ul class="dropdown-menu bg-success" id="menu" onClick={onClick}>
                    <li><a class="dropdown-item btn_success" id="Dollar "href="#dollar">{dollar + ' '+ namedollar}</a></li>
                    <li><a class="dropdown-item btn-success" id="Pound" href="#pound">{pound + ' '+ namepound}</a></li>
                    <li><a class="dropdown-item btn-success" id="Euro" href="#euro">{euro + ' '+ nameeuro}</a></li>
                    <li><a class="dropdown-item btn-success" id="Ruppee" href="#ruppee">{ruppee + ' '+ nameruppee}</a></li>
                </ul>
            </div>
    );
};
export default Currency;
