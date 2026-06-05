import FooterListPart from '../FooterListPart';
import './style.css'

const Footer = () => {

  const companyLinks = [
    { name: 'About Us', href: '/' },
    { name: 'Delivery Information', href: '/' },
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms & Conditions', href: '/' },
    { name: 'Contact Us', href: '/' },
    { name: 'Support Center', href: '/' },
  ];

  const categoryLinks = [
    { name: 'Dairy & Bakery', href: '/' },
    { name: 'Fruits & Vegetable', href: '/' },
    { name: 'Snack & Spice', href: '/' },
    { name: 'Juice & Drinks', href: '/' },
    { name: 'Chicken & Meat', href: '/' },
    { name: 'Fast Food', href: '/' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-col">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="logo"
            />

            <div>
              <h2>Foodzy</h2>
              <p>A Treasure of Tastes</p>
            </div>
          </div>

          <p className="footer-text">
            Foodtrove is the biggest market of grocery products.
            Get your daily needs from our store.
          </p>

          <div className="contact">
            <p>📍 51 Green St.Huntington ohio beach ontario, NY 11746 KY 4783, USA</p>
            <p>✉️ example@email.com</p>
            <p>📞 +91 123 4567890</p>
          </div>
        </div>

        <FooterListPart title="Company" links={companyLinks} />
        <FooterListPart title="Category" links={categoryLinks} />

        <div className="footer-col">
          <h3>Subscribe Our Newsletter</h3>

          <div className="subscribe">
            <input
              type="text"
              placeholder="Search here..."
            />

            <button>➤</button>
          </div>

          <div className="socials">
            <span>f</span>
            <span>x</span>
            <span>◎</span>
            <span>◉</span>
          </div>

          <div className="gallery">
            <img src="https://picsum.photos/70?1" alt="" />
            <img src="https://picsum.photos/70?2" alt="" />
            <img src="https://picsum.photos/70?3" alt="" />
            <img src="https://picsum.photos/70?4" alt="" />
            <img src="https://picsum.photos/70?5" alt="" />
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2025 foodzy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer