import './ActiveDate.css'

function ActiveDate(props) {

    const currentDate = new Date(props.dateActive)
    const month = currentDate.toLocaleString('ru-RU', {month:'long'})
    const year = currentDate.getFullYear();
    const day = currentDate.toLocaleString('ru-RU', {day:'2-digit'})
    return (
        <div className="activity-date" > 
      
<div className="activity-date__month "> {month}</div>
<div className="activity-date__year"> {year}</div>
<div className="activity-date__day"> {day}</div>
             </div>
    )
}
export default ActiveDate;