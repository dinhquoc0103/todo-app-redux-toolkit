import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Filters.module.scss";
import { filtersSelector } from "../../redux/selectors";
import { searchValueChanged, statusChanged, priorityChanged } from "./FiltersSlice";
import store from "../../redux/store";

const cx = classNames.bind(styles);

const statusFilter = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Completed"
    },
    {
        id: 3,
        name: "Doing"
    },
];

const priorityFilter = [
    {
        id: 1,
        name: "Please select",
        value: "default"
    },
    {
        id: 2,
        name: "High",
        value: "High"
    },
    {
        id: 3,
        name: "Medium",
        value: "Medium"
    },
    {
        id: 4,
        name: "Low",
        value: "Low"
    },
];

function Filters() {
    const [checked, setChecked] = useState(1);

    const filters = useSelector(filtersSelector);
    const dispatch = useDispatch();

    store.subscribe(() => {
        localStorage.setItem("TODOLIST_STATE", JSON.stringify(store.getState().todoList))
    });

    const handleSearchValueChanged = (e) => {
        dispatch(searchValueChanged(e.target.value));
    }

    const handleStatusChanged = (e) => {
        dispatch(statusChanged(e.target.name));
        const id = Number(e.target.value);
        setChecked(id);
    }

    const handlePriorityChanged = (e) => {
        dispatch(priorityChanged(e.target.value));
    }

    return (
        <div className={cx("filters")}>
            <div className={cx("search")}>
                <div className={cx("search__title")}>
                    Search
                </div>
                <div className={cx("search__filter")}>
                    <input
                        type="text"
                        placeholder="Enter your text"
                        value={filters.searchValue}
                        onChange={handleSearchValueChanged}
                    />
                </div>
            </div>
            <div className={cx("status")}>
                <div className={cx("status__title")}>
                    Filter By Status
                </div>
                <div className={cx("status__filter")}>
                    {
                        statusFilter.map(status => (
                            <div key={status.id} className={`status__filter__${status.name}`}>
                                <input
                                    type="radio"
                                    name={status.name}
                                    checked={status.id === checked}
                                    onChange={handleStatusChanged}
                                    value={status.id}
                                />
                                <label htmlFor="">{status.name}</label>
                            </div>
                        ))
                    }

                </div>

            </div>

            <div className={cx("priority")}>
                <div className={cx("priority__title")}>
                    Filter By Priority
                </div>
                <div className={cx("priority__filter")}>
                    <select value={filters.priority} name="priority" onChange={handlePriorityChanged}>
                        {
                            priorityFilter.map(item => {
                                return <option key={item.id} value={item.value} >{item.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filters;
