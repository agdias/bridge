import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../assets/actions'
import monster from '../assets/icons/monster.svg'
import account from '../assets/icons/account-circle.svg'
import ChatIcon from '@material-ui/icons/ChatOutlined'
import ThumbUp from '@material-ui/icons/ThumbUpOutlined'
import ThumbDown from '@material-ui/icons/ThumbDownOutlined'
import Delete from '@material-ui/icons/DeleteOutlined'
import Edit from '@material-ui/icons/Edit'
import PersonPin from '@material-ui/icons/PersonPinOutlined'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import {
  Avatar
 
} from '@material-ui/core'




class Post extends Component {

    epochToDateTime(timestamp) {
        const dateObject = new Date(timestamp)
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth() + 1
        const  day = dateObject.getUTCDate()
        return `${day}.${month}.${year}`
      }

    render() {

        const { post } = this.props
     
        return (
            <div className='post'>
                <div className='post-header'>
                <div className='post-avatar'><BottomNavigationAction icon={<PersonPin />}/></div>
                <div className='post-author'>{post.author} on {this.epochToDateTime(post.timestamp)} about {post.category}</div>
                </div>
                <div className='post-title'>{post.title}</div>
                <div className='post-body'>{post.body}</div>
                <div className='action-bar'>
                  <BottomNavigation>
                    <BottomNavigationAction label='comment' icon={<ChatIcon />} />
                    <BottomNavigationAction label='comment' icon={<ThumbUp />} />
                    <BottomNavigationAction label='comment' icon={<ThumbDown />} />
                    <BottomNavigationAction label='comment' icon={<Delete />} />
                    <BottomNavigationAction label='comment' icon={<Edit />} />
                  </BottomNavigation>
                </div>

            </div>
             

            
           

        )

    }
}

export default Post;
// const mapStateToProps = ({postsReducer}) => ({postsReducer})
// export default connect(mapStateToProps)(Home);