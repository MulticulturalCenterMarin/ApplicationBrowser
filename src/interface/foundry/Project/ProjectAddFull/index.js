/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
} from 'atomic'
import {
  FormProjectAddFull,
} from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[20,40]}>
  <Heading level={[3]} f={[3]}>Add Full Project</Heading>
  <FormProjectAddFull bg='white' p={[10]} />
</Box>