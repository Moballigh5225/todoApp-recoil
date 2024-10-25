import { useRecoilValue } from "recoil";
import TodoCreator from "./TodoCreator";
import { todoListState } from "../atom/todoAtom";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(todoListState);
  return (
    <div>
      <h1>Todo App With Recoil</h1>
      <TodoCreator />
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
