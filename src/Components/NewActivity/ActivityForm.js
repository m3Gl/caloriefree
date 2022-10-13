import './ActivityForm.css'
import React, {useState} from 'react'

const ActivityForm = (props) => {
    const [inputName,setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

     const nameChangeHandler = (event) => {
        setInputName(event.target.value)
     }
     const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
     }
     const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
     }
     const submitHandler = (event) => {
          event.preventDefault()

          const activityData = {
            description: inputName,
            amount: inputAmount,
            date:new Date(inputDate)
          }
          props.onSaveActivityData(activityData)    
          
          
          setInputName('')
          setInputAmount('')
          setInputDate('')

     }
return (
    <form onSubmit={submitHandler}>
        <div className="new-activity__controls">
            <div className="new-activity__control">
                <label >Ваша активность:</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-activity__control">
                <label >количество каллорий</label>
                <input value={inputAmount} onChange={amountChangeHandler}  type="number"/>
            </div>
            <div className="new-activity__control">
                <label >Дата</label>
                <input value={inputDate} onChange={dateChangeHandler}  type="date"/>
            </div>
            <div className="new-activity__actions">
                <button type="submit" >Добавить активность</button>
            </div>
        </div>
    </form>
)
}

export default ActivityForm;
