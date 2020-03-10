import React from "react";
import {
  Column,
  Row,
  SubHeadline,
  Paragraph,
  Wolf
} from "cross-country";

const WolfDoc = () => {

  return (
    <Column>
      <SubHeadline text="Image with Text" />
      <Paragraph text="a molecule combine with image and text atoms" />
      <Row>
        <Wolf text="Text with Image" url="https://forallnerds.com/wp-content/uploads/2016/12/Rogue-One-A-Star-Wars-Story-Trailer-1-700x391.jpg" />
      </Row>
    </Column>
  );
};

export default WolfDoc;
