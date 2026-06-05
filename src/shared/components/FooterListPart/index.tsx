import './style.css';

export type FooterListPartType = {
    title: string;
    links: FooterLinkType[];
};

export type FooterLinkType = {
    name: string;
    href: string;
};

const FooterListPart = (props: FooterListPartType) =>{
  return (
        <div className="footer-col">
          <h3>{props.title}</h3>
          <ul>
            {props.links.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
  )
};

export default FooterListPart;
