import './style.css'
import type { MainProductType } from '../../../../types/mainProductType';

const MainProductCard = (props:MainProductType) => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={props.mainImage} alt={props.name}></img>    
            </div>
            <div>

            </div>
            <p>{props.brandName}</p>
            <div>
                <p>{props.rating}/5</p>
            </div>
            <div>
                <p>{props.name}</p>
            </div>
            <div className='prices'>
                <span className='new-price'>${props.discountPrice}</span>
                <span className='old-price'>${props.originalPrice}</span>
            </div>
        </div>
    )
};

export default MainProductCard;
