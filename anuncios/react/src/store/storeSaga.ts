import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

import rootReducer from './reducers';
import rootSaga from './sagas';

const makeStore = _ => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    )

    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

const wrapper = createWrapper(makeStore)

export default wrapper