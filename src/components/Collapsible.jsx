import { useState, useRef, useEffect } from "react";
import { MdExpandLess } from "react-icons/md";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const contentId = "uniqueContentId";

  return (
    <div className="collapsible">
      <div
        className="collapsible-header"
        onClick={toggleOpen}
        // autres propriétés
      >
        {title}
        <span className={`collapsible-icon ${isOpen ? "open" : ""}`}>
          <MdExpandLess />
        </span>
      </div>
      <div id={contentId} className={`collapsible-content ${isOpen ? "open" : ""}`} ref={contentRef} style={{ height: `${height}px` }}>
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
