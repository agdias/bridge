import {
    FETCH_POSTS_SUCCESS
} from '../types'

const postsReducer = (state = {}, action) => {
  
    switch ( action.type ) {

        case FETCH_POSTS_SUCCESS: 
          const postsObj = {}
          for (let post of action.posts) {
              postsObj[post.id] = post
          }
          return postsObj
        default:
          return state
    }
}

export default postsReducer;