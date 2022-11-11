import React, { useState } from "react";
import Todo from "./Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border py-4 px-8 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState(["Learn React", "Grind Leetcode"]);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>What To-Do</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}>Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              // toggleComplete={toggleComplete}
              // deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You Have "${todos.length}" Todo(s)`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
