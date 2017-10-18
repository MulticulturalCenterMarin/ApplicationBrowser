/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box} from 'particles'
import {palette } from 'styled-theme'
/* ------------------------- Internal Dependencies -------------------------- */
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'

const color = ({color}) => palette(color?color:'primary', 0)
/* --------------------------- Styled Components ---------------------------- */
const Card = styled(Flex)`
  background-color: #FFF;
  border-left: 5px solid ${color};
  border-radius: 2px;
`
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const CardStripeIcon = ({ ...props }) => {
  return (
    <Card {...props} align="center" boxShadow={[0, 1]} >
        <Box pl={[10,20]}>
          <Heading f={[3,4]} level={[2]} color='indigo' >{props.title}</Heading>
          <Paragraph f={[1]} color='charcoal'>{props.description}</Paragraph>
        </Box>
        <Box p={[7,15]} ><img src={props.image} /></Box>
    </Card>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default CardStripeIcon