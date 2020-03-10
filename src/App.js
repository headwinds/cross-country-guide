import React from "react";
import {
  Column,
  Row,
  Headline,
} from "cross-country";
import ButtonDoc from "./components/ButtonDoc";
import TextDoc from "./components/TextDoc";
import WolfDoc from "./components/WolfDoc";

const App = () => {
  const [feedback, setFeedback] = React.useState("");

  const handleClick = React.useCallback(
    label => {
      setFeedback(`${label} has been clicked`);
    },
    [feedback]
  );
  return (
    <Column hasBackground={false}>
      <Headline text="Cross-Country Design System" />
      <Row>
        <ButtonDoc />
        <TextDoc />
        <WolfDoc />
      </Row>
      <Column>
        <a href="https://www.npmjs.com/package/cross-country">cross-country on npm</a>
      </Column>
    </Column>

  );
};

export default App;
