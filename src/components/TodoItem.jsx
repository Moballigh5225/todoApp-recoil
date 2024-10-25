import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom/todoAtom";
/* eslint-disable react/prop-types */
const TodoItem = ({ item }) => {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState("");
  const [todos, setTodos] = useRecoilState(todoListState);

  const handleDone = () => {
    const updatedData = todos.map((t) =>
      t.id === item.id ? { ...t, text: newText } : todos
    );
    setTodos(updatedData);
    setEditMode(false);
  };
  const handleEdit = () => {
    setNewText(item.text);
    setEditMode(true);
  };

  return (
    <>
      {editMode ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleDone}>Done</button>
        </div>
      ) : (
        <div className="button-container">
          <p>{item.text}</p>
          <div className="">
            <button onClick={handleEdit}>Edit</button>
            <button
              onClick={() =>
                setTodos(todos.filter((todo) => todo.id !== item.id))
              }
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
/* eslint-disable react/prop-types */
