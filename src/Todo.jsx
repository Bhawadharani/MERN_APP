import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        setTodo([...todo, { task: newTask, completed: false }]); 
        setNewTask(""); 
    };

    const deleteTask = (indexToDelete) => {
        setTodo(todo.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div style={{ 
            backgroundColor: "lightblue", 
            height: "50vh", 
            width: "50vw",
                backgroundColor: "white", 
                padding: "20px", 
                borderRadius: "10px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                textAlign: "center", 
                width: "400px" 
            }}>
                <img 
                    src="https://c8.alamy.com/comp/2HJK5G6/initial-letter-ab-logo-hand-drawn-signature-style-logo-simple-vector-logo-in-signature-style-for-initials-2HJK5G6.jpg"
                    alt="Todo App" 
                    style={{ width: "75px", height: "75px", marginBottom: "20px" }}
                />
                <h2>Sample Page</h2>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        onChange={(e) => setNewTask(e.target.value)} 
                        value={newTask}
                        style={{ 
                            backgroundColor: "lightblue", 
                            padding: "10px", 
                            borderRadius: "5px", 
                            width: "80%", 
                            marginBottom: "10px" 
                        }}
                    />
                    <button 
                        onClick={addTask} 
                        disabled={!newTask}
                        style={{ 
                            backgroundColor: "lightblue", 
                            padding: "10px 20px", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            marginLeft: "10px" 
                        }}
                    >
                        Add
                    </button>
                </div>
                <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
                    {todo.map((item, index) => (
                        <li 
                            key={index} 
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", padding: "10px", backgroundColor: "white smoke", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" 
                            }}
                        >
                            <span>{item.task}</span>
                            <button 
                                onClick={() => deleteTask(index)} 
                                style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" 
                                }}
                            >
                                Delete
                            </button>
                            <div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        
    );
}

export default Todo;