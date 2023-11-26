import { combineReducers, configureStore } from '@reduxjs/toolkit';
//combineReducer : its use for store multiple reduce in the saùe one;
//configureStore :its use for create a redux store 
import  questionReducer from './Question_reducer';
import resultReducer from './Result_reducer';

const Rootreducers= combineReducers({
    question:questionReducer,
    result:resultReducer
});

export default configureStore({reducer: Rootreducers})