import React, {Component} from 'react';
import classes from './ToDoList.module.css';

import List from '../List/List';

class ToDoList extends Component{
    state = {
        toDoList: [],
        newTaskDetails: {
            description: '', 
            isCompleted: false
        }
    };

    onClickHandler = () => {
        var taskList = [...this.state.toDoList];
        if(this.state.newTaskDetails.description){
            taskList.push(this.state.newTaskDetails);
        }
        var taskdetailsreset = {
            description: '', 
            isCompleted: false}
        this.setState({toDoList: taskList, newTaskDetails : taskdetailsreset});
    };

    onChangeHandler = (ev) => {
        var newTaskDetails = {...this.state.newTaskDetails};
        newTaskDetails.description = ev.target.value;
        this.setState({newTaskDetails: newTaskDetails});
    };

    MarkTaskCompleteHandler = (index, event) => {
        var taskList = [...this.state.toDoList];
        var taskToChange = {...taskList[index]};
        taskToChange.isCompleted = !taskToChange.isCompleted;
        taskList.splice(index,1,taskToChange);
        this.setState({toDoList : taskList});
    };

    RemoveTaskHandler = (index) => {
        var taskList = [...this.state.toDoList];
        taskList.splice(index, 1);
        this.setState({toDoList : taskList});
    };

    clearDescriptionHandler = () => {
        var newTaskDetails = {};
        newTaskDetails.description = "";
        newTaskDetails.isCompleted = false;
        this.setState({newTaskDetails: newTaskDetails});
    };

    render(){
        return (
            <div>
            {this.state.toDoList.map((task, index) => <List task={task} index={index} key={index} onTaskTickClick={this.MarkTaskCompleteHandler.bind(this, index)} onRemoveTaskClick={this.RemoveTaskHandler.bind(this, index)}/>)}
            <List isExtra={true} onDescriptionChangeHandler={this.onChangeHandler} 
                    taskdescription={this.state.newTaskDetails.description} 
                    onCancelClickHandler = {this.clearDescriptionHandler}
                    onAddClickHandler={this.onClickHandler}/>
            </div>
        );

    }
}
export default ToDoList;