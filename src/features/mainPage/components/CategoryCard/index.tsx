import './style.css'
import type { CategoryCardType } from '../../../../types/categoryCardType';


const CategoryCard = (props:CategoryCardType) =>{
  return (
    <div className="category-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>({props.count} dishes)</p>
    </div>
  )
};


export default CategoryCard;
