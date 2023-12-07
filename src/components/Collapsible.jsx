import { useState, useRef } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const contentId = "uniqueContentId";

  return (
    <div className="collapsible">
      <div
        className="collapsible-header"
        onClick={toggleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleOpen();
          }
        }}
        tabIndex="0"
        aria-expanded={isOpen}
        aria-controls={contentId}>
        {title}
        <span className="collapsible-icon">{isOpen ? <MdExpandMore /> : <MdExpandLess />}</span>
      </div>
      <div id={contentId} className={`collapsible-content ${isOpen ? "open" : ""}`} ref={contentRef} style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}>
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
