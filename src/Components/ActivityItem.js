import "./ActivityItem.css";
import ActiveDate from "./ActiveDate";
import Card from "./Card";
import ActivityDetails from "./ActivityDetails/ActivityDetails";
import { useState } from "react";
const ActivityItem = (props) => {
  const [show, setShow] = useState(false);



  return (
    <Card className="activity-item">
      <div className="activity-date">
        <ActiveDate dateActive={props.dateActive} />
      </div>
      <div className="activity-item__description">
        <h2>{props.description}</h2>
        <div className="activity-item__price">{props.amount}ккал </div>
        <button type="button" className="details__button" onClick={() => setShow(true)} >ℹ</button>
        <ActivityDetails isClose={() => setShow(false) } show={show}/>
      </div>
    </Card>
  );
};
export default ActivityItem;
