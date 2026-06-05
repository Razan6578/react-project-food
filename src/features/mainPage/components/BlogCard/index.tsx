import './style.css'
import type { Category2 } from '../../../../types/category2';

const BlogCard = (props:Category2) =>{
  return (
    <div className="blog-card">
      <div className="heart">❤</div>
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
};

export default BlogCard;
