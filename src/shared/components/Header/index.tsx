import './style.css'

const Header = () =>{
  return (
    <>
      <div className="first-line">
          <nav className='nav'>
              <a href="/">Home</a>
              <a href="#">Category</a>
              <a href="/products">Products</a>
              <a href="#">Pages</a>
              <a href="/blogs">Blog</a>
              <a href="#">Elements</a>
          </nav>
          <div className="phone">
            +123 (456) (7890)
          </div>
      </div>
      <div className="main-header">
        <div className="container main-header-content">
          
          <div className="logo">
            <div>
            <h2 style={{color:'black'}}>Foodzy</h2>
              <p>A Treasure of Tastes</p>
            </div>
          </div>

          <div className="search-block">
            <input
              type="text"
              placeholder="Search For Items..."
            />

            <select>
              <option>All Categories</option>
            </select>

            <button>🔍</button>
          </div>

          <div className="actions">
            <a href='/registration'><span style={{color:'black'}}>Account</span></a>
            <span style={{color:'black'}}>Wishlist</span>
            <span style={{color:'black'}}>Cart</span>
          </div>
        </div>
      </div>
    </>
  )
};


export default Header;
