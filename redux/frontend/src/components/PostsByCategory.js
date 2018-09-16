import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPostsByCategory } from '../assets/actions'
import Post from './Post'

class PostsByCategory extends Component {

    componentDidMount() {
       console.log(this.props.match.params.category)
        const { dispatch, match } = this.props
        dispatch(fetchPostsByCategory(match.params.category))


    }

    componentDidUpdate(prevProps) {
        const { dispatch, match } = this.props
        console.log('componentDidUpdate')
        prevProps.match.params.category !== match.params.category && dispatch(fetchPostsByCategory(match.params.category))
    }

    render() {
        const { postsReducer } = this.props
        const showingPosts = Object.values(postsReducer)
        return (


            <div className='posts'>
              {showingPosts.length > 0 &&
                showingPosts.map(post => {
                    return (
                        <Post post={post} />
                    )
                })
              }

            </div>
        )
    }
}

const mapStateToProps = ({postsReducer}) => ({postsReducer})
export default connect (mapStateToProps)(PostsByCategory)