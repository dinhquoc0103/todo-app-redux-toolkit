import classNames from "classnames/bind";

import styles from "./App.module.scss";
import Filters from "./components/Filters/Filters";
import TodoList from "./components/TodoList";


const cx = classNames.bind(styles);

function App() {
  console.log("filter roio")
  return (
    <div className={cx("wrapper")}>
      <div className={cx("todo-app")}>
        <h1 className={cx("title")}>Todo App With Redux</h1>
        <Filters />
        <div className={cx("devider")}></div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
