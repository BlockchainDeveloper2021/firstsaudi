import "./PersonForm.css";
import { useState } from "react";
const PersonForm = (props) => {
  const [enterDate, setDate] = useState("");
  const [enterName, setName] = useState("");
  const [enterTitle, setTitle] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredDate: "",
  //     enteredName: "",
  //     enteredTitle: "",
  //   });
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const nameChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredName: event.target.value };
    //     });
    setName(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const submitHandeler = (event) => {
    event.preventDefault();
    const personData = {
      date: new Date(enterDate),
      name: enterName,
      title: enterTitle,
    };
    props.onSaveEnteredData(personData);
    setDate("");
    setName("");
    setTitle("");
  };
  return (
    <form onSubmit={submitHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            value={enterDate}
            min="2016-01-01"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Name:</label>
          <input type="text" value={enterName} onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add New Accomplish</button>
      </div>
    </form>
  );
};
export default PersonForm;
