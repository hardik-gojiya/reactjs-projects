import { useState, useRef } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [list, setList] = useState(List);
  const [newtodovalue, setNewtodovalue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [edittext, setEditText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const inputref = useRef();

  const addItem = () => {
    if (newtodovalue.trim()) {
      const newId = list.length ? list[list.length - 1].id + 1 : 0;
      setList([...list, { id: newId, name: newtodovalue }]);
      setNewtodovalue("");
    }
    inputref.current.focus();
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const toDoToEdit = list.find((item) => item.id === id);

    setEditIndex(id);
    setEditText(toDoToEdit.name);
  };

  const handleSave = () => {
    setList(
      list.map((item) =>
        item.id === editIndex ? { ...item, name: edittext } : item
      )
    );
    setEditIndex(-1);
    setEditText("");
  };

  const searchedList = [...list].sort((a, b) => {
    if (
      a.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      !b.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return -1;
    } else if (
      !a.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      b.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <div>
        <div>
          <input
            type="text"
            className="input-item"
            placeholder="add Item"
            ref={inputref}
            value={newtodovalue}
            onChange={(e) => {
              setNewtodovalue(e.target.value);
            }}
          />
          <button title="Add" className="btn-1 add-btn" onClick={addItem}>
            Add
          </button>
        </div>
        <div className="Search-todo">
          <input
            type="text"
            placeholder="search todo"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
      </div>

      <hr />

      <ul>
        {searchedList.map((item) => (
          <li key={item.id}>
            {editIndex === item.id ? (
              <div className="inline-flex">
                <input type="checkbox"  />
                <input
                  type="text"
                  className="bla-bla"
                  value={edittext}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div>
                  <button
                    title="save"
                    className="btn-1 w-8 h-8 "
                    onClick={handleSave}
                  >
                    📁
                  </button>
                </div>
              </div>
            ) : (
              <div className="bllll">
                <input type="checkbox" className="m-5" />
                <div className="bla-bla" title={item.name}>
                  {item.name}{" "}
                </div>
                <div className="ch-bllll">
                  <button
                    className="btn-1"
                    title="edit"
                    onClick={() => editItem(item.id)}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-1"
                    title="delete"
                    onClick={() => deleteItem(item.id)}
                  >
                    ❌
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
