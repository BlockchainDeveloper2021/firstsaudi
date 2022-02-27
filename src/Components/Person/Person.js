import { useState } from "react";
import "./Person.css";
import Date from "../Date/Date";
import Card from "../Card/Card";

function Person(props) {
  const [Title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log("clicked.." + Title);
  };

  return (
    <Card>
      <div className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">{Title}</div>
        </div>
      </div>
      <button onClick={clickHandler}>Change .. </button>
    </Card>
  );
}

export default Person;
