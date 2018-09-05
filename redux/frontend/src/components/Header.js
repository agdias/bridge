import React, { Component } from 'react';

import { fetchCategories } from '../assets/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import { Typography, Toolbar } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'





class Header extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories());
    }

  

  render() {


      const { categoryReducer } = this.props;
      const categories = Object.values(categoryReducer)
      
     
      return (
          <div className='header'>
            <AppBar color='default' position='static'>
              <Toolbar>
                <Typography color='textSecondary' variant='headline'>
                 <Link to='/'>readable</Link> 
                </Typography>
                <ul>
                {categories.length > 0 &&
                    categories.map((category) => {
                        return (
                          <Link to={`${category.name}`}>
                            
                        
                            <li key={category.name}>{category.name}</li>
                          </Link>
                        )
                      
                    })
                
                }
                
                </ul>
              
              </Toolbar>
            
            </AppBar>
          
          </div>
          
      )
  }
}


const mapStateToProps = ({categoryReducer}) => ({categoryReducer})

export default connect(mapStateToProps)(Header);