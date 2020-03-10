# A guide to the cross-country design system

[guide](https://cross-country.now.sh)

## Getting Started

```
yarn
yarn start
```

Opens to http://localhost:3001/

## Usage

cross-country is an atomic react component library

[cross-country on npm](https://www.npmjs.com/package/cross-country)

`yarn add cross-country`

```
import {Column, Headline, Row} from "cross-country";

const CrossCountry = () => (
<Column hasBackground={false}>
    <Headline text="Cross-Country Design System" />
    <Row>
        <Paragraph text="an atomic react component library">
    </Row>
</Column>)
```