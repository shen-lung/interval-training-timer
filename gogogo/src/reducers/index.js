import {combineReducers} from 'redux';

import HomeScreenReducer from './HomeScreenReducer';


export default combineReducers({
    homeScreen: HomeScreenReducer,
});