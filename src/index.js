import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import reducer from "./store/reducer";
import './index.css';
import {Provider} from "react-redux";


const store = createStore(reducer);
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);