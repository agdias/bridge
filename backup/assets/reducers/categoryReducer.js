import {

 
  FETCH_CATEGORIES_SUCCESS,
 

} from '../types'

const initialState = {
    categories: {},
    loading: false,
    error: null
};

const categoryReducer = ( state = {}, action ) => {

    switch ( action.type ) {

     

          case FETCH_CATEGORIES_SUCCESS: {
              return ({
                  ...state,
                  ...action.categories
              })
          }



        default:
          return state;
    }
}

export default categoryReducer;