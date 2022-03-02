import "./NewPerson.css";
import { useState } from "react";
import PersonForm from "./PersonForm";
const NewPerson = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandeler = (enteredPersonData) => {
    const personData = {
      ...enteredPersonData,
      id: Math.random().toString(),
    };
    props.onAddPerson(personData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <PersonForm
          onSaveEnteredData={saveDataHandeler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewPerson;
