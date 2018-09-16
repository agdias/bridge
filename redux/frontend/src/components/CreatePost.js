import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../assets/actions'
import sortBy from 'sort-by'
import serializeForm from 'form-serialize'

class CreatePost extends Component {

    state  = {
            author: null,
            id:null,
            timestamp: null,
            title:null,
            body:null,
            category: 'Select a category...'
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCategories())
    }

onChangeHandler(newcategory) {
  this.setState({category:newcategory})
  console.log(newcategory)
}

onSubmitHandler = (event) => {
    const values = serializeForm(event.target, )
}


    render() {

        const { categoryReducer } = this.props
        const showingCategories = Object.values(categoryReducer)
        showingCategories.sort(sortBy('voteScore'))
        // showingCategories.sort(sortBy('name'))


        return (
            <div>
               <Link className='close-create-post' to='/'></Link>
               <form  onSubmit={this.onSubmitHandler} className='create-post-form'>
                    <div className='create-post-details'>

                            <select
                              onChange={event => this.onChangeHandler(event.target.value)}
                              name='category'
                              defaultValue={this.state.category}
                              value={this.state.category}

                            >
                              <option  disabled >Select a category...</option>
                                {showingCategories.length > 0 &&
                                  showingCategories.map((category) => {
                                      return (

                                        <option  value={category.name}>{category.name}</option>
                                      )

                                  })
                                }
                            </select>
                            <input type='text' name='author' placeholder='Author' />
                            <input type='text' name='title' placeholder='Title' />
                            <input type='text' name='body' placeholder='Text' />
                            <button> Post </button>
                    </div>
               </form>
            </div>
        )

    }
}
const mapStateToProps = ({categoryReducer}) => ({categoryReducer})

export default connect (mapStateToProps)(CreatePost)