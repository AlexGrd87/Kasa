import { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={toggle} aria-expanded={isOpen}>
        <span>{title}</span>
        <span className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}>▾</span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
