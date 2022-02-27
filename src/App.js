import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Person/Person";
import NewPerson from "./Components/NewPerson/NewPerson";

function App() {
  const Persons = [
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

  const personHandeler = (person) => {
    console.log("hhhh");
    console.log(person);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewPerson onAddPerson={personHandeler} />
      <Person
        title={Persons[0].title}
        name={Persons[0].name}
        date={Persons[0].date}
      ></Person>
      <Person
        title={Persons[1].title}
        name={Persons[1].name}
        date={Persons[1].date}
      ></Person>
      <Person
        title={Persons[2].title}
        name={Persons[2].name}
        date={Persons[2].date}
      ></Person>
      <Person
        title={Persons[3].title}
        name={Persons[3].name}
        date={Persons[3].date}
      ></Person>
    </div>
  );
}

export default App;
