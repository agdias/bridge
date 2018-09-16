import * as ReadableAPI from '../../utils/ReadableAPI'
import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_POSTS_SUCCESS
} from '../types'



export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    categories

})

export const fetchCategoriesFailure = (error) => ({
    type: 'FETCH_CATEGORIES_FAILURE',
    error
})


export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    posts

})


export const  fetchCategories = () => dispatch => {
   
    return ReadableAPI.getAllCategories()
             .then(data => dispatch(fetchCategoriesSuccess(data.categories)))
             .catch(error => dispatch(fetchCategoriesFailure(error)))
             
}

export const fetchPosts = () => dispatch => {
  return ReadableAPI.getAllPosts()
    .then(data => dispatch(fetchPostsSuccess(data)))
 
}