import { combineReducers } from 'redux';
import counterReducer from './counter';
import articles from './articles';
import comments from './comment';
import filters from './filters';


export default combineReducers({
    count: counterReducer,
    articles, filters, comments
});
