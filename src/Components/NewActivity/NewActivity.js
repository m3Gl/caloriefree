import "./NewActivity.css";
import ActivityForm from "./ActivityForm";

const NewActivity = (props) => {
 

  const saveActivityData = (inputActivityData) => {
    const activityData = {
      ...inputActivityData,
      id: Math.random().toString(),
    };
    props.onAddActivity(activityData);
  };
  return (
    <div className="new-activity">
      <ActivityForm onSaveActivityData={saveActivityData} />
    </div>
  );
};

export default NewActivity;
