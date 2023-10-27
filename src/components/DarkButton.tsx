import "./DarkButton.scss";

const DarkButton = ({ onClick, children, className }: any) => {
  return (
    <button
      type="button"
      className={`${className ? className : ""} button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const DarkButtonWithIcon = ({ onClick, children }: any) => {
  return (
    <DarkButton className="button-with-icon" onClick={onClick}>
      {children}
    </DarkButton>
  );
};

export const DarkButtonText = ({ children }: any) => {
  return <p>{children}</p>;
};

export default DarkButton;
