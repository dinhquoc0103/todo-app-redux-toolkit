import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "./Todo.module.scss";
import { deleleTodo, completedChanged } from "../TodoList/TodoListSlice";
import { useState } from "react";

const cx = classNames.bind(styles);

function Todo({
    id,
    name,
    priority,
    completed
}) {
    const [checked, setChecked] = useState(completed);

    const dispatch = useDispatch();

    const highlight = `priority-label--${priority.toLowerCase()}`

    const handleDeleteTodoClick = (id) => {
        dispatch(deleleTodo(id));
    }

    const handleCompletedChanged = (id) => {
        setChecked(!checked);
        dispatch(completedChanged(id));
    }

    return (
        <div className={cx("todo-item")}>
            <div className={cx("todo-checked")}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCompletedChanged(id)}
                />
                <label htmlFor="">{name}</label>
            </div>

            <div className={cx("left-block")}>
                <span className={cx("priority-label", highlight)}>
                    {priority}
                </span>
                <button className={cx("close")} onClick={() => handleDeleteTodoClick(id)}>
                    X
                </button>
            </div>

        </div >
    );
}

export default Todo;