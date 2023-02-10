import React, { useContext } from 'react';
import { BsDashCircle,BsPlusCircle, BsXCircle } from "react-icons/bs";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><BsPlusCircle  class="btn-success bg-success" onClick={event=> increaseAllocation(props.name)}></BsPlusCircle></td>
        <td><BsDashCircle  class="btn-danger bg-danger" onClick={event=> decreaseAllocation(props.name)}></BsDashCircle></td>
        <td><BsXCircle class="" size='1.5em' onClick={handleDeleteExpense}></BsXCircle></td>
        </tr>
    );
};

export default ExpenseItem;
