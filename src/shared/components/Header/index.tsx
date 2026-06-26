import './style.css';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LogoBlock from '../../../features/mainPage/components/LogoBlock';
import headerLogo from '../../../assets/headerLogo.png';

const Header = () => {
  const token = localStorage.getItem('currentUserToken');
  const isLoggedIn = !!token;
  return (
    <>
      <div className="first-line">
        <nav className="nav">
          <a className="hover-link" href="/">
            Home
          </a>
          <a className="hover-link" href="/">
            Category
          </a>
          <a className="hover-link" href="/products">
            Products
          </a>
          <a className="hover-link" href="/">
            Pages
          </a>
          <a className="hover-link" href="/blogs">
            Blog
          </a>
          <a className="hover-link" href="/">
            Elements
          </a>
        </nav>
        <p className="phone">
          <LocalPhoneOutlinedIcon style={{ margin: '-9px 4px' }} />
          <a className="hover-link" href="tel:+1234567890">
            +123 (456) (7890)
          </a>
        </p>
      </div>
      <div className="main-header">
        <div className="container main-header-content">
          <LogoBlock img={headerLogo} title="Foodzy" text="A Treasure of Tastes" />

          <div className="search-block">
            <input type="text" placeholder="Search For Items..." />

            <select>
              <option>All Categories</option>
            </select>

            <button>🔍</button>
          </div>

          <div className="actions">
            <PersonOutlinedIcon />
            {isLoggedIn ? (
              <a className="hover-link" href="/user">
                <span style={{ color: 'black', margin: '0 -15px', padding: '0px 15px 0px 0px' }}>
                  Account
                </span>
              </a>
            ) : (
              <a className="hover-link" href="/registration">
                <span style={{ color: 'black', margin: '0 -15px', padding: '0px 15px 0px 0px' }}>
                  Register
                </span>
              </a>
            )}
            <FavoriteBorderOutlinedIcon />
            <span
              className="hover-link"
              style={{ color: 'black', margin: '0 -15px', padding: '0px 15px 0px 0px' }}
            >
              Wishlist
            </span>
            <ShoppingCartOutlinedIcon />
            <span
              className="hover-link"
              style={{ color: 'black', margin: '0 -15px', padding: '0px 15px 0px 0px' }}
            >
              Cart
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
