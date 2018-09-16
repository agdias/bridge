import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_BY_CATEGORY_SUCCESS,
    FETCH_POST_BY_ID
} from '../types'

const postsReducer = (state = {}, action) => {
    const { posts } = action
    switch ( action.type ) {

        case FETCH_POSTS_SUCCESS:
          const postsObj = {}
          for (let post of action.posts) {
              postsObj[post.id] = post
          }
          return postsObj

        case FETCH_POST_BY_ID:
        console.log(action.post,'*******')
          return action.post

        case FETCH_POSTS_BY_CATEGORY_SUCCESS:

          return ({
            ...posts
          })

        default:
          return state
    }
}

export default postsReducer;