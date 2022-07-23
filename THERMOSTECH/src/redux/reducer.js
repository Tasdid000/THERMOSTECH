import { combineReducers } from 'redux';
import { InitialContactForm, InitialContactForm1 } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';

const PortfolioReducer = (PortfolioState = { isLoading: false, Portfolio: [] }, action) => {
    switch (action.type) {
        case actionTypes.Portfolio_LOADING:
            return {
                ...PortfolioState,
                isLoading: true,
                Portfolio: []
            }
        case actionTypes.LOAD_Portfolio:
            return {
                ...PortfolioState,
                isLoading: false,
                Portfolio: action.payload
            }
        default:
            return PortfolioState;
    }
}

const BlogReducer = (BlogState = { isLoading: false, Blog: [] }, action) => {
    switch (action.type) {
        case actionTypes.Blog_LOADING:
            return {
                ...BlogState,
                isLoading: true,
                Blog: []
            }
        case actionTypes.LOAD_Blog:
            return {
                ...BlogState,
                isLoading: false,
                Blog: action.payload
            }
        default:
            return BlogState;
    }
}

const JobReducer = (JobState = { isLoading: false, Job: [] }, action) => {
    switch (action.type) {
        case actionTypes.Job_LOADING:
            return {
                ...JobState,
                isLoading: true,
                Job: []
            }
        case actionTypes.LOAD_Job:
            return {
                ...JobState,
                isLoading: false,
                Job: action.payload
            }
        default:
            return JobState;
    }
}

export const Reducer = combineReducers({
    Portfolio: PortfolioReducer,
    Blog: BlogReducer,
    Job: JobReducer,
    ...createForms({
        feedback: InitialContactForm,
        jobapply:InitialContactForm1
    })
});



