import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { title, deleteItem, editItem} = this.props;
        return (
            
                <li className='list-group-item d-flex justify-content-between'>
                
                        <h5>{ title }</h5>
                    <div>
                        <span className = 'mx-3' onClick = { editItem }>
                            <i className="fas fa-pen mx-3" ></i>
                        </span>
                        <span className = '' onClick = { deleteItem}>
                            <i className="fas fa-trash " ></i>
                        </span>
                    </div>
               
            </li>
            
        


        )
    }
}
