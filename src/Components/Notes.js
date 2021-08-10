import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    const value = document.getElementById("addNote").value;
    if (value.length > 0) {
      setNotes([...notes, value]);
    }
    document.getElementById("addNote").value = "";
  };

  const done = () => {
    console.log('done');
  }

  return (
    <div>
        <header>
            <h1>Notes to myself</h1>
            <p>I have completed 0/{notes.length} notes</p>
        </header>
      <form>
        <input type="text" id="addNote"></input>
        <button onClick={addNote}>Add note</button>
      </form>
      <section>
        <ul>
          {notes.map((el) => {
            return <li key={notes.indexOf(el)}>{el}
            <button><FontAwesomeIcon icon={faTrash} /></button></li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Notes;
