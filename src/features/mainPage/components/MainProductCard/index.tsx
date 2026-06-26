import './style.css';
import type { MainProductType } from '../../../../types/mainProductType';
import { useNavigate } from 'react-router-dom';

const MainProductCard = (props: MainProductType) => {
  const navigate = useNavigate();

  const handleOpenProduct = () => {
    navigate(`/product/${props.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`http://127.0.0.1:8000${props.mainImage}`} alt={props.name}></img>
      </div>
      <p>{props.brandName}</p>
      <div>
        <p>{props.rating}/5</p>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div className="prices">
        <span className="new-price">${props.discountPrice}</span>
        <span className="old-price">${props.originalPrice}</span>
      </div>
      <div className="buy-btn">
        <a href="/">Add</a>
        <button type="button" onClick={handleOpenProduct} className="view-product-btn">
          View product
        </button>
      </div>
    </div>
  );
};

export default MainProductCard;
