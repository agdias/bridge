import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../assets/actions'
import {
  Grid,
  Paper
} from '@material-ui/core'
import Post from './Post'
class Home extends Component {

    componentDidMount() {
        const   { dispatch } = this.props;
        dispatch(fetchPosts())
    }



    render() {

        const { postsReducer } = this.props
        console.log('****', postsReducer    )
        const showingPosts = Object.values(postsReducer)
        console.log(this.props)
        return (
            
               <div className='posts'>
                 {showingPosts.length > 0 &&
                  showingPosts.map((post) => {
                      return (
                         <div>
                          <Post post={post} />
                       
                         </div>

                       
                      )
                      
                  })}

               </div>
           
           

        )

    }
}
const mapStateToProps = ({postsReducer}) => ({postsReducer})
export default connect(mapStateToProps)(Home);