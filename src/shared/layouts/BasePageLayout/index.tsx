import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './style.css'

export type BasePageLayoutType = {
    children: React.ReactNode;
};

const BasePageLayout = ({ children }: BasePageLayoutType) =>{
  return (
    <div className="page">
      <Header />
      <div className="main">
        {children}        
      </div>
      <Footer />
    </div>
  )
};


export default BasePageLayout;
