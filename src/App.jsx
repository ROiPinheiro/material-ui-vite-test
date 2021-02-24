import React, { useState } from "react";
import "./App.css";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

const options = [
  {
    id: 1,
    name: "aaa",
  },
  {
    id: 2,
    name: "bbb",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Autocomplete
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      </header>
    </div>
  );
}

export default App;
