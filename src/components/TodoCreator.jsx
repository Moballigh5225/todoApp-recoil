import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atom/todoAtom";
import { v4 as uuidv4 } from "uuid";

const TodoCreator = () => {
  const [input, setInput] = useState("");
  const setTodo = useSetRecoilState(todoListState);

  const handleAdd = () => {
    setTodo((oldTodo) => [
      ...oldTodo,
      {
        id: uuidv4(),
        text: input,
        isComplete: false,
      },
    ]);
    setInput("");
  };

  return (
    <div>
      <input
        placeholder="enter todo name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoCreator;
