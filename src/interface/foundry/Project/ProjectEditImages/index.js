/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import {
  FormProjectGalleryAdd,
} from 'workshop/forms'
/* ------------------------------- Component -------------------------------- */

export default props => {
return (
<Box>
  <Route exact path="/dashboard/:entity/:id" component={FormProjectGalleryAdd}/>
</Box>)
}