import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './components/counterReduxDemo/CounterReducer';
import { square2Reducer } from './components/info/squares/square2/square2Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { repoDataReducer } from './components/forms/userDataForm/repoData/repoDataReducer'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    calculations: square2Reducer,
    repoData: repoDataReducer
})

const coposedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
let store = createStore(rootReducer, coposedEnhancer);

export default store;