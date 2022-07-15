import "./App.css";
import react, { useState } from "react";
import Person from "./Components/Person/Person";
import NewPerson from "./Components/NewPerson/NewPerson";
import Filter from "./Components/Filter/Filter";
import Card from "./Components/Card/Card";

const DummyPersons = [
  {
    id: "e1",
    title: "AI Ironr",
    name: "Abeer Omar",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "AI Iron",
    name: "Abeer Omar",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "AI Iron",
    name: "Abeer Omar",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "AI Iron",
    name: "Abeer Omar",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [persons, setPersons] = useState(DummyPersons);
  const personHandeler = (person) => {
    setPersons((prevState) => {
      return [person, ...prevState];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredPersons = persons.filter((person) => {
    return person.date.getFullYear().toString() === filteredYear;
  });

  let content = <p>Np any person</p>;

  if (filteredPersons.length > 0) {
    content = filteredPersons.map((person) => (
      <Person
        key={person.id}
        title={person.title}
        name={person.name}
        date={person.date}
      />
    ));
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewPerson onAddPerson={personHandeler} />

      <Card>
        <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {content}
      </Card>
    </div>
  );
}

export default App;
