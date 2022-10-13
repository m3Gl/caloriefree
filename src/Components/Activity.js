import ActivityItem from "./ActivityItem";
import Card from "./Card";
import React, { useState } from "react";
import ActivityFilter from "./ActivityFilter";
function Activity(props) {
  const [selectedYear, setSelectedYear] = useState(2022);
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="activity">
        <ActivityFilter year={selectedYear} onChangeYear={yearChangeHandler} />

        {props.activities.map((activity) => (
          <ActivityItem
            dateActive={new Date(activity.date)}
            description={activity.description}
            amount={activity.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Activity;
