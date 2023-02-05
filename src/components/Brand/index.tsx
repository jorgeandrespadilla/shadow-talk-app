import { Link } from "react-router-dom";
import './Brand.css';

type BrandProps = {
  type?: 'link' | 'header';
};

function Brand({
  type = 'link',
}: BrandProps) {
  if (type === 'header') {
    return (
      <div className="brand-container header">
        <img className="brand-logo" src="/logo.svg" alt="Shadow Talk" />
        <h1 className="brand-name">Shadow Talk</h1>
      </div>
    );
  }
  
  return (
    <Link to="/" className="brand-container">
      <img className="brand-logo" src="/logo.svg" alt="Shadow Talk" />
      <h1 className="brand-name">Shadow Talk</h1>
    </Link>
  );
}

export default Brand;