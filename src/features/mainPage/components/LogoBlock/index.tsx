import './style.css';
import type { logoBlockType } from '../../../../types/logoBlockType';

const LogoBlock = (props: logoBlockType) => {
    return(
        <div className="logo">
          <a href='/'>
            <img
              src={props.img}
              alt={props.title}
            />
          </a>
          <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </div>
        </div>
    )
};

export default LogoBlock;
