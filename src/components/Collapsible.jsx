import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleOpen}>
        {title}
        <span className="collapsible-icon">{isOpen ? <MdExpandLess /> : <MdExpandMore />}</span>
      </div>
      <div className={`collapsible-content ${isOpen ? "open" : ""}`}>{children}</div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsible;
