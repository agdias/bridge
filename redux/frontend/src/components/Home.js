import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../assets/actions';
import Post from './Post';
import {sortBy} from 'sort-by'

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    render() {
        const { postsReducer } = this.props;
        const showingPosts = Object.values(postsReducer);
        // showingPosts.sort(sortBy('-voteScore'))

        return (
            <div className='posts'>
             {showingPosts.length > 0 &&
               showingPosts.map((post) => {
                   return (
                    <Post key={post.id} post={post} />
                   )

               })

             }
            </div>
        )
    }
}

const mapStateToProps = ({postsReducer}) => ({postsReducer});
export default connect (mapStateToProps)(Home);