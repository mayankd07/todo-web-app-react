import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight:"48.5vh",
        width:"70%"
    }
    if (props.todos.length===0)
    {
        return (
            <div className="container my-3" style={myStyle}>
              <h3 className="text-center my-3">Recent Todos</h3><hr/>
                <div className="alert alert-danger" role="alert">
                   Nothing to display :(
                </div>
                </div>
              )
    }
    else if(props.todos.length<3)
    {
        return(
        <div className="container my-3" style={myStyle}>
        <h3 className="text-center my-3">Recent Todos</h3><hr/>
        {props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}  />
          );
        })}
        </div>
    
        );
    
    }
    else{
       
        return(
            <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">Recent Todos</h3><hr/>
            {props.todos.slice(props.todos.length-3, props.todos.length).map((todo) => {

              return (
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}  />
              );
            })}
            </div>
        
            );
        };

    }
//   return (
//     <div className="container my-3" style={myStyle}>
//       <h3 className="text-center my-3">Recent Todos</h3><hr/>
//       {props.todos.length === 0 ? (
//         <div className="alert alert-danger" role="alert">
//            Nothing to display :(
//         </div>
//       ) : (
//         props.todos.map((todo) => {
//           return (
//             <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
//           );
//         })
//       )}
//     </div>
//   );
// };