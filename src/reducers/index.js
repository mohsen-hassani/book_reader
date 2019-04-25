import { combineReducers } from 'redux';
import Books from './Books.js'

function Page(state = 0, action){
    switch (action.type) {
        case 'SET':
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
    books: Books,
    page: Page
});

export default reducers;