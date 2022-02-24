import "./Person.css";
import Date from "../Date/Date";
import Card from "../Card/Card";

function Person(props) {
  return (
    <Card>
      <div className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">{props.title}</div>
        </div>
      </div>
    </Card>
  );
}

export default Person;
