import "./NewPerson.css";
import PersonForm from "./PersonForm";
const NewPerson = (props) => {
  const saveDataHandeler = (enteredPersonData) => {
    const personData = {
      ...enteredPersonData,
      id: Math.random().toString(),
    };
    props.onAddPerson(personData);
  };
  return (
    <div className="new-expense">
      <PersonForm onSaveEnteredData={saveDataHandeler} />
    </div>
  );
};
export default NewPerson;
