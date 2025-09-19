import React, { useState } from 'react';

const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim() || !desc.trim()) {
            alert("Title or Description cannot be blank");
        } else {
            props.addToDo(title, desc);
            setTitle(""); // clear input
            setDesc("");  // clear input
        }
    };

    return (
        <div className="container my-3">
            <h4>Add a Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To Do Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description :</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddToDo;
