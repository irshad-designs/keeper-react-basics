import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import Notes from "./notes";

export default function Form() {
  const [inputText, setInputText] = useState({
    note: "",
    addNote: "",
  });

  const [notes, setNotes] = useState([]);

  function changeHandler(e) {
    const { value, name } = e.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNewNote(e) {
    setNotes((prevValue) => {
      return [...prevValue, inputText];
    });
    e.preventDefault();
  }

  function deleteNote(id) {
    // console.log("delete from form");
    setNotes((prevValue) => {
      return prevValue.filter((newItem, index) => {
        return index !== id;
      });
    });
  }
  // notes.map((x) => console.log(x.note));
  // console.log(notes);

  return (
    <div>
      <Box
        component="form"
        sx={{
          width: "25ch",
          backgroundColor: "#F0DBDB",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={changeHandler}
          value={inputText.note}
          name="note"
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="note"
          variant="filled"
          size="small"
        />
        <TextField
          onChange={changeHandler}
          value={inputText.addNote}
          name="addNote"
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
          placeholder="add notes"
        />
        <Box mt="10px">
          <Button
            type="submit"
            variant="submit"
            onClick={addNewNote}
            sx={{ backgroundColor: "#DBA39A" }}
          >
            Add
          </Button>
        </Box>
      </Box>
      <div>
        {notes.map((x, index) => {
          return (
            <>
              <ul>
                {/* <li>{x.note}</li>
                <li>{x.addNote}</li> */}
                <Notes
                  key={index}
                  id={index}
                  title={x.note}
                  content={x.addNote}
                  onDelete={deleteNote}
                />
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
}
