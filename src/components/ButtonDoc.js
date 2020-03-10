import React from "react";
import {
  Column,
  Button,
  Row,
  SubHeadline,
  Paragraph
} from "cross-country";

const ButtonDoc = () => {
  const [feedback, setFeedback] = React.useState("");

  const handleClick = React.useCallback(
    label => {
      setFeedback(`${label} has been clicked`);
    },
    [feedback]
  );
  return (
    <Column>
      <SubHeadline text="Button" />
      <Paragraph text="a simple button that be can used for interaction" />
      <Row>
        <Button
          handleClick={handleClick}
          text="click me"
          label="green"
          customStyle={{ backgroundColor: "green", color: "white" }}
        />
        <Button
          text="click me"
          label="grey"
          handleClick={handleClick}
          customStyle={{ backgroundColor: "grey", color: "white" }}
        />
      </Row>
      <Paragraph text={feedback} />
    </Column>
  );
};

export default ButtonDoc;
