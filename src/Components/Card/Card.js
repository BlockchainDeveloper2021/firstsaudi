import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
//children to solve custome component that contain other custom components
export default Card;
