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
import Badge from '@material-ui/core/Badge'

import {
  Avatar

} from '@material-ui/core'

const styles  = {
    root: {
        width: 500,
    },
}


class Post extends Component {

    epochToDateTime(timestamp) {
        const dateObject = new Date(timestamp)
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth() + 1
        const  day = dateObject.getUTCDate()
        return `${day}.${month}.${year}`
      }

     handleChange = () => alert('onChange')

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
                  <BottomNavigation  >
                    <Badge color='secondary' badgeContent={post.commentCount}>
                     <BottomNavigationAction  onChange={this.handleChange}  showLabel='true' label='comment' icon={<ChatIcon />} />
                    </Badge>
                    <BottomNavigationAction showLabel='true' label='like' icon={<ThumbUp />} />
                    <Badge color='secondary' badgeContent={post.voteScore} />
                    <BottomNavigationAction  showLabel='true' label='dislike' icon={<ThumbDown />} />
                    <BottomNavigationAction  showLabel='true'label='delete' icon={<Delete />} />
                    <BottomNavigationAction  showLabel='true'label='edit' icon={<Edit />} />
                  </BottomNavigation>
                </div>

            </div>





        )

    }
}

export default Post;
// const mapStateToProps = ({postsReducer}) => ({postsReducer})
// export default connect(mapStateToProps)(Home);