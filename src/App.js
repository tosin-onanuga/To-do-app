import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/Todoinputs';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {


  state = {

    items: [],
    item: '',
    id: uuidv4(),
    editItems: false
  };
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);


  // handleChange(e){
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  // handleSubmit(e){
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: uuidv4()
    }
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: '',
      editItems: false
    })

  }


  clearList = () => {
    this.setState({
      items: []
    })
  }

  deleteItem = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItem
    })
  }


  editItem = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    // console.log(selectedItem);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItems: true,
    })



  }

  render() {


    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto my-5'>
            <h1 className='text-center my-4'> Todo App</h1>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem = { this.editItem }
              editItems = { this.state.editItems}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              deleteItem={this.deleteItem}
              editItem = { this.editItem }
            />
          </div>
        </div>
      </div>

    );
  }
}


export default App;
