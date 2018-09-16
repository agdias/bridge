import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById } from '../assets/actions';

class PostDetail extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props

        const postId = match.params.iconsole.log(postId,'*****')

    }
    render() {

        return (
           <div className='post-details'>
             post-details
           </div>
        )
    }
}

const mapStateToProps = ({postReducer}) => ({postReducer})
export default connect(mapStateToProps)(PostDetail);