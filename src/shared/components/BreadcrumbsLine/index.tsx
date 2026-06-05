import './style.css';

export type BreadcrumbsLineType = {
    name: string;
    href: string;
};

const BreadcrumbsLine = (props: BreadcrumbsLineType) =>{
  return (
    <div className="thin-red-line">
      <p>{props.name}</p>
      <div>
        <a href="/">Home</a>
        <span> - </span>
        <a href={props.href}>{props.name}</a>
      </div>
    </div>
  )
};


export default BreadcrumbsLine;
