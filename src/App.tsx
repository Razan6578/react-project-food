import './App.css';
import BasePageLayout from './shared/layouts/BasePageLayout';
import homeBg from './assets/home-bg.png';
import peperHome from './assets/peperHomePage.png';
import homeText from './assets/homePageText.png';
import chicken from './assets/Chicken.png';

function App() {
  return (
    <>
      <BasePageLayout>
        <div className="image-wrapper">
          <img src={homeBg} alt="homeBg" className="bg" />
          <img src={peperHome} alt="peperHome" className="overlay" />
          <img
            src={homeText}
            alt="homeText"
            style={{ width: '938px', height: '602px' }}
            className="overlay"
          />
          <img
            src={chicken}
            alt="chicken"
            style={{ width: '938px', height: '602px', margin: '0px 0px 0px 730px' }}
            className="overlay"
          />
        </div>
      </BasePageLayout>
    </>
  );
}

export default App;
