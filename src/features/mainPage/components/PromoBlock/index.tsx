import './style.css'

const PromoBlock = () =>{
  return (
    <div className="promo">
      <img src={'https://placehold.net/400x400.png'} alt="promo" />

      <div className="promo-text">
        <h2>Why People Choose us?</h2>

        <div className="item">
          <h4>Convenient and Reliable</h4>
          <p>Fast delivery and easy ordering.</p>
        </div>

        <div className="item">
          <h4>Variety of Options</h4>
          <p>Lots of dishes to choose from.</p>
        </div>

        <div className="item">
          <h4>Eat Burger</h4>
          <p>Juicy and delicious burgers.</p>
        </div>
      </div>
    </div>
  )
};

export default PromoBlock;
