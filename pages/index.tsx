import React from 'react';
import { controller } from '../src/Others/StatesController'
import { useSelector } from 'react-redux';
import { doSomething } from '../src/Others/ActionTest';

const index = () => {
    const counter = useSelector(() => controller.counter);

    return <div>
        <p>Counter {counter}</p>
        <button onClick={() => {
            controller.increase()
        }}>+</button>
        <button onClick={() => {
            //
            doSomething()
        }}>-</button>
    </div>
}

export default index;
