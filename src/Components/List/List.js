import React from 'react';
import classes from './List.module.css';

const List = (props) => {
    let list =  null;
       
    if(props.isExtra){
        list = <div className={classes.ToDoList}>
                    <div className={classes.Action}><p className={classes.taskPending}>&#84;</p></div>
                    <div className={classes.TaskDescriptionContainer}><input type="text" name="taskDescription" id="taskDescription" placeholder="Enter task description!" onChange={props.onDescriptionChangeHandler} value={props.taskdescription}></input></div>
                    <div className={classes.Action} onClick={props.onAddClickHandler}><p className={classes.Add}>+</p></div>
                    <div className={classes.Action}><p className={classes.Cancel} onClick={props.onCancelClickHandler}>+</p></div>
                </div>;
    }
    else{
        list =  <div className={classes.ToDoList} key={props.index}>
                    <div className={classes.Action}>
                        <p className={props.task.isCompleted ? classes.isCompleted : classes.taskPending} onClick = {props.onTaskTickClick}>&#10003;</p>
                    </div>
                    <div className={classes.TaskDescriptionContainer}>
                        <p name="taskDescription" id="taskDescription" className={classes.TextDescriptionArea + (props.task.isCompleted ?  " " + classes.TaskComplete : "")}>{props.task.description}</p>
                    </div>
                    <div className={classes.Action}><p className={classes.Cancel} onClick={props.onRemoveTaskClick}>+</p></div>
                </div>;
    }
    return list;
};

export default List;