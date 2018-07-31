import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {

    constructor(){
      super()
      this.state = {
        name:'',
        todoList:[],
        isUpdate:false,
        selectedListIndex:null,
      }
    }

    _changeName(name){
      this.setState({name});
    }

    _addInTodoList(){
      this.state.todoList.push(this.state.name);
      this.setState({todoList:this.state.todoList,name:''});
    }

    _deleteFromTodoList(index){
      this.state.todoList.splice(index,1);
      this.setState({todoList:this.state.todoList,name:'',isUpdate:false});
    }

    _findAndFill(index){
      this.setState({selectedListIndex:index,name:this.state.todoList[index],isUpdate:true});
    }

    _updateTodoList(){
      this.state.todoList[this.state.selectedListIndex] = this.state.name;
      this.setState({todoList:this.state.todoList,isUpdate:false,name:'',selectedListIndex:null});
    }

    _getTodoList(){
      return(<ul>
      {this.state.todoList.map((list,i)=>{
        return (<li key={i}>{list} <a href="#delete" onClick={()=>this._deleteFromTodoList(i)}>Delete</a> <a href="#update" onClick={()=>this._findAndFill(i)}>Update</a></li>);
      })}
      </ul>
    )
    }

    _clearTodoList(){
      this.setState({todoList:[],name:'',isUpdate:false});
    }

    render() {
      const {name,isUpdate} = this.state;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div className="card-body">
                                <input className="form-control" value={name} type="text" onChange={(event)=>this._changeName(event.target.value)}/>
                                {isUpdate ? <button className="btn-primary" type="button" onClick={()=>this._updateTodoList()}>Update</button> : <button className="btn-success" type="button" onClick={()=>this._addInTodoList()}>Add</button>}
                                <button className="btn-danger" type="buton" onClick={()=>this._clearTodoList()}>Clear List</button>
                                <h1>My TodoList</h1>
                                {this._getTodoList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
