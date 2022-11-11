import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `min-h-screen min-w-full p-4 bg-gradient-to-r from-[#130f40] to-[#30336b]`,
  container: `bg-blue-500 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 px-2 pb-8`,
  form: `flex justify-between`,
  input: `border-2 focus:outline-none border-r-0 rounded-l-md border-gray-500 px-3 py-2 w-full text-md`,
  button: `border-2 focus:outline-none rounded-r-md border-gray-500 px-5 py-2 bg-violet-800 text-slate-100 font-bold`,
  count: `text-center pt-8 pb-1 text-gray-800 font-bold`,
};
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      toast.error("Please add a Todo !!");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>What To-Do</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          />
          <button className={style.button}>Add</button>
        </form>
        {todos.length < 1 ? null : (
          <p
            className={style.count}
          >{`You Have " ${todos.length} " Todo(s)`}</p>
        )}
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
