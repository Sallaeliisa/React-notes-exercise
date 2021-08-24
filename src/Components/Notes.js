import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    const value = document.getElementById("addNote").value;
    const newNote = { id: new Date(), content: value, completed: false };
    if (value.length > 0) {
      setNotes([...notes, newNote]);
    }
    document.getElementById("addNote").value = "";
  };

  const remove = (task) => {
    const selectedTask = { ...task };
    const updatedNotes = notes.filter((item) => item.id !== selectedTask.id);
    setNotes(updatedNotes);
  };

  const isComplite = (task) => {
    const checkTask = { ...task };
    const checkedNotes = notes;
    checkedNotes.forEach((item) => {
      if (item.id === checkTask.id) {
        item.completed = !checkTask.completed;
      }
    });
    setNotes(checkedNotes);
    console.log(checkedNotes);
  };

  return (
    <div>
      <header>
        <h1>Notes to myself</h1>
        <p>Number of notes: {notes.length}</p>
      </header>
      <form>
        <input type="text" id="addNote"></input>
        <button onClick={addNote}>Add note</button>
      </form>
      <section>
        <ul>
          {notes.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "taskComplete" : "taskIncomplete"}
            >
              <label onClick={() => isComplite(task)}>{task.content}</label>
              <button onClick={() => remove(task)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Notes;
