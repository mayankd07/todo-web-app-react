import React from "react";
import { TodoItem } from "./TodoItem";

export const AllTodos = (props) => {
    let myStyle={
        minHeight:"79.5vh",
        width:"70%"
    }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">All Todos</h3><hr/>
      {props.todos.length === 0 ? (
        <div className="alert alert-danger" role="alert">
           Nothing to display :(
        </div>
      ) : (
      
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}  />
          );
        })
      )}
    </div>
  );
};
