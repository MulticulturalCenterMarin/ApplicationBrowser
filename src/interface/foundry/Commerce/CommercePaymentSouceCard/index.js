/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import CardDefault from 'static/style/CardDefault'
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

import { 
  ScaffoldCommercePaymentSourceCard
} from 'logic/interface/DataScaffold'
import {
  FirestoreDelete
} from 'containers'
/* ------------------------------- Component -------------------------------- */


export default (props) => {
  console.log(props)
  const data = ScaffoldCommercePaymentSourceCard(props)
  if (!data) return null
  console.log(data)
  /*--- Component ---*/
  return (
    <Box
      className={`${data.brand}--Card`}
      p={10}
      {...props}
    >
      <Flex
        direction={['column']}
        {...CardDefault}
      >
        <Box>
          <Heading level={[3]} f={[4]} color='blue' fw={300} mb={15} >
            <strong>Card Holder:</strong> {data.name}
          </Heading>
          <Heading level={[3]} f={[3]} fw={300}>
            <strong>{data.brand}</strong> : Ending with {data.last4} expires on {data.exp_month}/{data.exp_year} is active.
          </Heading>
          <Paragraph f={[1]}>
            Card Type: <strong>{data.funding}</strong>
          </Paragraph>
          <FirestoreDelete
            id={props.id}
            collection={props.collection}
            gradient='cherry'>
            Delete Card
          </FirestoreDelete>
        </Box>
      </Flex>
    </Box>
  )
}