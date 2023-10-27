import React, { useState } from "react";

import "./ButtonGroup.scss";

const Button = ({ isSelected, onClick, children }: any) => {
  const selectedClass = isSelected ? "selected" : "";

  return (
    <button
      className={`button-group-button ${selectedClass}`}
      onClick={onClick}
    >
      <div className="button-text-box">
        <p>{children}</p>
      </div>
    </button>
  );
};

export { Button };

export default function ButtonGroup({
  selectIndex = 0,
  variant = "primary",
  size = "medium",
  style,
  onChange,
  children,
}: any) {
  const [selectedIndex, setSelectedIndex] = useState(selectIndex);

  const handleSelection = (index: number) => {
    if (onChange && index != selectedIndex) onChange(index);
    setSelectedIndex(index);
  };

  const variantClass = ["primary", "secondary"].includes(variant)
    ? variant
    : "primary";

  const sizeClass = ["xsmall", "small", "medium"].includes(size)
    ? size
    : "medium";

  return (
    <div className={`button-group ${variantClass} ${sizeClass}`} style={style}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isSelected: index == selectedIndex ? true : false,
          onClick: () => {
            handleSelection(index);
          },
        });
      })}
    </div>
  );
}
