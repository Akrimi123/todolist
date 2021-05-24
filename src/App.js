import React,{Component} from 'react'
import './App.css'
import List from './Component/List'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class ToDoList extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
    }
  }
  this.addItem = this.addItem.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.edit = this.edit.bind(this);
}
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  edit(text,key){
    const items = this.state.items;
    items.map(item=>{   
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })

  }
  render(){
    return(
      <div className="todolist">
        <header>
          <form className="to-do-form"  onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text" value= {this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="onSubmit">Add</button>
          </form>

          <p>{this.state.items.text}</p>

          <List items={this.state.items} deleteItem={this.deleteItem} edit={this.edit} />

        </header>

      </div>
    )
  }

}
export default ToDoList ;