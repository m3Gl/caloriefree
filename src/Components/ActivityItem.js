import "./ActivityItem.css";
import ActiveDate from "./ActiveDate";
import Card from "./Card";
import ActivityDetails from "./ActivityDetails/ActivityDetails";
import Login from "./Login";
const ActivityItem = (props) => {

const showDetailsHandler = () => {
console.log('showDetailsHandler')
return (
  <div>
    <ActivityDetails/>
    
  </div>

)

}

  return (
    <Card className="activity-item">
      <div className="activity-date">
        <ActiveDate dateActive={props.dateActive} />
      </div>
      <div className="activity-item__description">
        <h2>{props.description}</h2>
        <div className="activity-item__price">{props.amount}ккал </div>
        <button type="button" className="details__button" onChange={showDetailsHandler} >ℹ</button>
      </div>
    </Card>
  );
};
export default ActivityItem;
