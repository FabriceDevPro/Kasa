import { useState, useRef } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleOpen}>
        {title}
        <span className="collapsible-icon">{isOpen ? <MdExpandLess /> : <MdExpandMore />}</span>
      </div>
      <div className={`collapsible-content ${isOpen ? "open" : ""}`} ref={contentRef} style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}>
        <div className="collapsible-inner">{children}</div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsible;

// ... propTypes et export
