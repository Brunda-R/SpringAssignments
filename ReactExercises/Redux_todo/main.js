import "regenerator-runtime/runtime"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/reducers.js'
import App from './App.jsx'
import helloSaga from './sagas/sagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

let store = createStore(todoApp, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(helloSaga);
// let store = createStore(todoApp);
render( <Provider store = { store } >
    <App/>
    </Provider>,document.getElementById('app')
)