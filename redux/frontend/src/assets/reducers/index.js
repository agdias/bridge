import { combineReducers } from 'redux'
import categories from './categoryReducer'

import categoryReducer from './categoryReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers ({
    categoryReducer,
    postsReducer
   
    
})

export default rootReducer