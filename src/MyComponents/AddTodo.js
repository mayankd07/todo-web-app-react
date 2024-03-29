 
import React, {useState} from 'react';

export const AddTodo = (props) => {
  let formStyle={
    width:"60%"
  }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    



    const submit=(e)=>{
        e.preventDefault();
        if(!title){
            alert("Title can't be empty");
        }
        else{

          props.addTodo(title, desc);
          setTitle("");
          setDesc("");
        }

    }
  return (
    <div className='container my-3 ' style={formStyle}> 
    <h3 className='text-center'>Add a Todo</h3>
      <form onSubmit={submit}>  
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="text-center">
        <button type="submit" className=" btn btn-sm btn-outline-success">
          Add Todo
        </button>
        </div>
      </form>
    </div>
  );
};
