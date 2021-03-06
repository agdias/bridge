import * as ReadableAPI from '../../utils/ReadableAPI'
import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_BY_CATEGORY_SUCCESS,
    FETCH_POST_BY_ID
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

export const fetchPostsByCategorySuccess = (posts) => ({
    type: FETCH_POSTS_BY_CATEGORY_SUCCESS,
    posts
})

export const fetchPostsByCategory = (category) => dispatch => {
    return ReadableAPI.getPostsByCategory(category)
      .then(data => dispatch(fetchPostsByCategorySuccess(data)))
}

export const  fetchCategories = () => dispatch => {

    return ReadableAPI.getAllCategories()
             .then(data => dispatch(fetchCategoriesSuccess(data.categories)))
             .catch(error => dispatch(fetchCategoriesFailure(error)))

}

export const fetchPosts = () => dispatch => {
  return ReadableAPI.getAllPosts()
    .then(data => dispatch(fetchPostsSuccess(data)))

}

export const fetchPostByIdSuccess = (post) => ({
    
    type: FETCH_POST_BY_ID,
    post

})

export const fetchPostById = (id) => dispatch => {
    return ReadableAPI.getPostById()
      .then(data => dispatch(fetchPostByIdSuccess(id)))
}