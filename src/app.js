import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import { login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({
//     description: 'Water Bill',
//     amount: 100,
//     createdAt: 200
// }));

// store.dispatch(addExpense({
//     description: 'Gas Bill',
//     amount: 200,
//     createdAt: 100
// }));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(sortByAmount());

store.subscribe(() => {
    const state = store.getState();
    console.log(state); 
});

// const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
