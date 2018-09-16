import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../assets/actions';
import { Link  } from 'react-router-dom'

import whatshot from '../assets/icons/whatshot.svg'
import date_range from '../assets/icons/date_range.svg'
import add from '../assets/icons/add.svg'



class Header extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories());
    }

    render() {
        const { categoryReducer } = this.props;
        const showingCategories = Object.values(categoryReducer);


        return (
          <div className='header'>
            <div className='header-top'>
              <div className='logo'><Link to='/'>Readable talks</Link></div>
              <div className='category-menu'>
                <ul>
                  <li><Link to='/'>home</Link></li>
                  {(showingCategories.length > 0) &&
                    showingCategories.map((category) => {
                        return (
                            <li key={category.name}>
                               <Link to={`/${category.name}/posts`}>  {category.name} </Link>
                           </li>
                        )
                    })
                  }
                </ul>
              </div>
              <div className='sort-menu'>
                <ul>
                 <li className='menu-button'><img src={whatshot}/></li>
                 <li><Link to='/create-post'><img src={date_range}/></Link></li>
                 <li><Link to='/create-post'><img src={add}/></Link></li>

                </ul>
              </div>

            </div>
          </div>


        )
    }
}
const mapStateToProps = ({categoryReducer}) => ({categoryReducer})

export default connect(mapStateToProps)(Header);