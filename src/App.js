import React from "react";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
};

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>What To-Do</div>
      </div>
    </div>
  );
}

export default App;
