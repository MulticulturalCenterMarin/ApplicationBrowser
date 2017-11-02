/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import { AuthorizationLogin, AuthorizationPhone } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <Box>
  <Paragraph f={[1]}>
    Hello World
  </Paragraph>
  <AuthorizationLogin bg='google' children='Google' providerSelection='google' />
  <AuthorizationLogin bg='facebook' children='Facebook' providerSelection='facebook' />
  <AuthorizationLogin bg='twitter' children='Twitter' providerSelection='twitter' />
  <AuthorizationLogin bg='github' children='GitHub' providerSelection='github' />

  <AuthorizationPhone bg='github' children='GitHub' providerSelection='github'>
    Phone Login
  </AuthorizationPhone>
  <div id="recaptcha-container"></div>
</Box>