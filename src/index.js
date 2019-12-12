import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';

import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

const Example = () => (
<Flex>
  <Flex breakpointMods={[{modifier: FlexModifiers["column"]}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: FlexModifiers["column"]}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);