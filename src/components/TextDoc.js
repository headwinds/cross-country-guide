import React from "react";
import {
  Column,
  Row,
  SubHeadline,
  Paragraph
} from "cross-country";

const TextDoc = () => {
  const [feedback, setFeedback] = React.useState("");

  const handleClick = React.useCallback(
    label => {
      setFeedback(`${label} has been clicked`);
    },
    [feedback]
  );
  return (
    <Column>
      <SubHeadline text="Paragraph" />
      <Paragraph text="a simple paragraph for text display" />
      <Row>
        <Paragraph text="hello world" />
      </Row>
      <Paragraph text={feedback} />
    </Column>
  );
};

export default TextDoc;
