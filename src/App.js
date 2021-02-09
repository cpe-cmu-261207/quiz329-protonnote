import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [tt, settt] = useState([{}])
  const [inputData, setInputData] = useState({name:"" , gender:"" ,age:"0"});
  //load locationStorage

  function add (e){

  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            value={inputData.name} onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select .." value={inputData.gender} onChange={(e) => setInputData({ ...inputData, gender: e.target.value })}>
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30" value={inputData.age} onChange={(e) => setInputData({ ...inputData, age: e.target.value })}></input>
        </div>

        <button className="button is-primary is-fullwidth" onclick={add()}>Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <h3 class="title is-3">Person List</h3>
      {ItemTable = {myTable}}
        <p>Your name and code here</p>
        <p>Naruson Kanchina 620612153 </p>
      </div>
    </div>
  );
}

export default App;
