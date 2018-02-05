import React from 'react';
import { render } from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import Users from './Components/Containers/Users'
import CurrentUsers from './Components/Containers/currentUsers';

const app = (
    <Provider store={store.configure(null) }>
        <div>
            <Users />
            <CurrentUsers />
        </div>
    </Provider>
)
render(app, document.getElementById('root'));
