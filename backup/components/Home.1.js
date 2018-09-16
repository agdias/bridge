import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../assets/actions'
import {
  Grid,
  Paper
} from '@material-ui/core'
class Home extends Component {

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchPosts())

    }

    render() {
        return (
            <div>
             <Paper>Paper</Paper>
            </div>
           

        )

    }
}
const mapStateToProps = ({postsReducer}) => ({postsReducer})
export default connect(mapStateToProps)(Home);