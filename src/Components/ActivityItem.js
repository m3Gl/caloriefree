import "./ActivityItem.css";
import ActiveDate from "./ActiveDate";
import Card from "./Card";
const ActivityItem = (props) => {
  return (
    <Card className="activity-item">
      <div className="activity-date">
        <ActiveDate dateActive={props.dateActive} />
      </div>
      <div className="activity-item__description">
        <h2>{props.description}</h2>
        <div className="activity-item__price">{props.amount}ккал </div>
      </div>
    </Card>
  );
};
export default ActivityItem;
