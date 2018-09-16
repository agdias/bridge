import React, {Component} from 'react';
import { connect } from 'react-redux'
import comments from '../assets/icons/comments.svg'
import { Link }from 'react-router-dom'

class Post extends Component {

    render() {
       const { post } = this.props;


        return (
            <div className='post'>
             <div className='balance'>
               <div className='arrow-up'>up</div>
               <div className='score'>{post.voteScore}</div>
               <div className='arrow-down'>down</div>
             </div>
             <div className='post-box'>
                <div className='post-header'>
                 <strong>{post.category}</strong> - Posted by {post.author}
                </div>
                <div className='post-title'>{post.title}</div>
                <div className='post-body'>{post.body}</div>
                <div className='post-footer'>
                  <tooltip  default="true" id="moretip" orient="vertical">
                  <label value="Click here to see more information"/>
                  <Link className='comments' to={`/posts`}>
                        {post.commentCount} comments
                  </Link>
                  </tooltip>


                </div>
             </div>
            </div>

        )
    }
}

// const mapStateToProps = ({postsReducer}) => ({postsReducer});
// export default connect (mapStateToProps)(Post);
export default Post;