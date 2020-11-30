import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render () {
        
        const { items, clearList, deleteItem, editItem} = this.props;
        return (
            <div>
            <ul className='list-group my-5'>
                { 
                items.map(item =>{
                    return <TodoItem 
                    key = { item.id}
                     title = { item.title} 
                     deleteItem = { () => deleteItem(item.id)}
                     editItem = { () => editItem(item.id)}
                     />
                }

                )
                }
                 
            </ul>
            <button className = 'btn-danger btn-block my-4' onClick = { clearList }>Clear List</button>
            </div>
        )

    }
}
