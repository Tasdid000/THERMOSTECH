import * as actionTypes from './actionTypes';
import { baseUrl, baseUrl1, baseUrl2} from './baseUrl';
import axios from 'axios';



export const loadPortfolio = Portfolio => ({
    type: actionTypes.LOAD_Portfolio,
    payload: Portfolio
})

export const PortfolioLoading = () => ({
    type: actionTypes.Portfolio_LOADING
})

export const fetchPortfolio = () => dispatch => {
    dispatch(PortfolioLoading());

    axios.get(baseUrl)
        .then(response => response.data)
        .then(Portfolio => dispatch(loadPortfolio(Portfolio)))
}

export const loadBlog = Blog => ({
    type: actionTypes.LOAD_Blog,
    payload: Blog
})

export const BlogLoading = () => ({
    type: actionTypes.Blog_LOADING
})

export const fetchBlog = () => dispatch => {
    dispatch(BlogLoading());

    axios.get(baseUrl1)
        .then(response => response.data)
        .then(Blog => dispatch(loadBlog(Blog)))
}



export const loadJob = Job => ({
    type: actionTypes.LOAD_Job,
    payload: Job
})

export const JobLoading = () => ({
    type: actionTypes.Job_LOADING
})

export const fetchJob = () => dispatch => {
    dispatch(JobLoading());

    axios.get(baseUrl2)
        .then(response => response.data)
        .then(Job => dispatch(loadJob(Job)))
}