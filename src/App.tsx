import ButtonGroup, { Button } from "./components/ButtonGroup";
import DarkButton from "./components/DarkButton";
import Dropdown, { DropdownItem } from "./components/Dropdown";

import "./App.scss";

function App() {
  return (
    <div id="app-container">
      <div id="showcase-container">
        <ButtonGroup
          variant="secondary"
          onChange={(index) => {
            console.log(`Selected index is ${index}`);
          }}
        >
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>
        <DarkButton>Simple button</DarkButton>
        <Dropdown
          onChange={(checkedItems, toggledIndex) => {
            console.log(
              `Item at index ${toggledIndex} toggled, state=${checkedItems}`
            );
          }}
        >
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
