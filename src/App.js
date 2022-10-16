import React, { useState } from "react";
import Activity from "./Components/Activity";
import ActivityDetails from "./Components/ActivityDetails/ActivityDetails";
import Login from "./Components/Login";
import NewActivity from "./Components/NewActivity/NewActivity";
const DEFAULT_ACTIVITIES = [
  {
    id: "c1",
    dateActive: new Date(2022, 5, 10),
    description: "Бег",
    amount: 500,
  }
];

const App = () => {
  const [activities, setActivities] = useState(DEFAULT_ACTIVITIES);

  const addActivityHandler = (activity) => {
    setActivities((previousActivity) => {
      return [activity, ...previousActivity];
    });
  };
  return (
    <div>
      <NewActivity onAddActivity={addActivityHandler} />

      <Activity activities={activities} />
    </div>
  );
};

export default App;
