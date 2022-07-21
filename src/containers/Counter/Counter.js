import React from 'react';
import {BUTTONS} from '../../constants';
import Button from '../../components/Button/Button';
import ShowPassword from '../../components/ShowPassword/ShowPassword';
import {useDispatch, useSelector} from "react-redux";
import './Counter.css';


const Counter = () => {
    const password = useSelector(state => state.password);
    const dispatch = useDispatch();

    const deleteLastNumber = () => {
        if(password.length > 4) {
            dispatch({type: "CLEAR"});
        }
        dispatch( {type: 'DELETE'});
    };
    const addNumber = (event) => dispatch({type: 'ADD', password: event.target.value});
    const verifyPassword = () => {
        if (password.length > 4) return;
        dispatch({type: 'VERIFY'});
    };

    return (
        <>
            <ShowPassword value={password}/>
            <div className="buttons">
            {BUTTONS.map(value => (
                <Button key={value} value={value} click={addNumber}></Button>
            ))}
            <Button click={deleteLastNumber} value='<'></Button>
            <Button click={verifyPassword} value='E'></Button>
            </div>
        </>
    );
};

export default Counter;