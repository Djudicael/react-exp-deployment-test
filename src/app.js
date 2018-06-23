import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouteur from './routers/AppRouteur';
import configureStore from './store/configureStore';
import {addExpense}from './actions/expenses';
import {setTextFilter}from './actions/filters';
import getVisibleExpensers from './selectors/expenses';
import  'normalize.css/normalize.css';
import  './styles/styles.scss';

const store= configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, createdAt:2000}));
store.dispatch(addExpense({description: 'Gas Bill' , amount: 999, createdAt:1000}));
store.dispatch(addExpense({description: 'Rent' , amount: 109500, createdAt:1200}));

const state= store.getState();

const visibleExpenses= getVisibleExpensers(state.expenses,state.filters );
console.log(visibleExpenses);
//console.log(store.getState());
const jsx=(
    <Provider store={store}>
        <AppRouteur/>
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'));
