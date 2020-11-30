import React, { Component } from 'react'
export default class TodoInput extends Component {
    
    render() {
        
        const { item, handleChange, handleSubmit, editItems } = this.props;
        return (
            <form onSubmit = { handleSubmit }>
                <div className='form-group'>
                    <input 
                        type='text' 
                        className='form-control'
                        value = { item } 
                        onChange = { handleChange }
                    />
                    <button className= { editItems ? 'btn btn-block btn-success my-3' : 'btn btn-block btn-primary my-3'}>
                        { editItems ? "Edit Item" : "Add Item" }
                    </button>
                </div>
            </form>
        )
    }
}
