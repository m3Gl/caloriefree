import './ActivityDetails.css'

const ActivityDetails = (props) => {
if (!props.show){
   return  null
}

return (
   <div className='details__box' onClick={props.isClose}>
    
    <p>Расстояние: 12 км!</p>
    <p>Пройдено за текущую неделю: 38 км!</p>
    <p>Энергозатраты: 1000ккал</p>
    <p>Жира сожжено: 156 грамм.</p>
    <h5>Текущий вес: 97 кг</h5>
    

   </div>
)
}

export default ActivityDetails;