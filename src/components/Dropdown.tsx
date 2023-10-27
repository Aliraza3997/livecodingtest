import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Dropdown.scss";

const DropdownItem = ({ children, onClick, isChecked, index }: any) => {
  return (
    <div
      className={`item ${isChecked ? "selected" : ""}`}
      key={index}
      onClick={onClick}
    >
      {children}
      {isChecked && <FontAwesomeIcon icon={faCheck} />}
    </div>
  );
};

const Dropdown = ({
  title = "Toggle Dropdown",
  size,
  style,
  children,
  onChange,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([
    ...Array(React.Children.count(children)).fill(false),
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const sizeClass = ["small", "medium"].includes(size) ? size : "medium";

  const handleOnItemToggle = (index: number) => {
    setCheckedItems(
      checkedItems.map((value, currIndex) => {
        if (index == currIndex) {
          return !value;
        } else {
          return value;
        }
      })
    );
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`dropdown-container ${sizeClass}`}
      ref={dropdownRef}
      style={style}
    >
      <button className="dropdown-button" onClick={toggleDropdown}>
        <div>
          <p>{title}</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-content open">
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              key: index,
              isChecked: checkedItems[index],
              onClick: () => {
                if (onChange) {
                  onChange(checkedItems, index);
                }
                handleOnItemToggle(index);
              },
            });
          })}
        </div>
      )}
    </div>
  );
};

export { DropdownItem };
export default Dropdown;
