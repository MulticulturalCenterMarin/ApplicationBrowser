/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import {
  SearchProjectAdvanced
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Project Search</Heading>
  <HorizontalRule bi='colorBase' bs={1} w={[1]} />
  <SearchProjectAdvanced/>
</Box>