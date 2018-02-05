import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'

var store
export default {
    configure: (initialState) => {
        const reducers = combineReducers({
            user: userReducer
        });

        if (initialState){
            store= createStore(
                reducers,
                initialState,
                applyMiddleware(thunk)
            )
            return store
        }

        store= createStore(
            reducers,
            applyMiddleware(thunk)
        )
        return store
    }
}