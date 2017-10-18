/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box} from 'particles'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Flex)`

`
const Icon = styled(Box)`
  border-radius: 50%;
  border: 2px solid #FFF;
  max-width: 70px;
  overflow: hidden;
  padding: 0;
  img {
    // border-radius: 50%;
    width: 105%;
  }
`

/* ------------------------------- Component -------------------------------- */
const ListItemIcon = props => {
  return (
    <Wrapper {...props} align={['center']} >
      <Icon><img src={props.image}/></Icon>
      <Box flex={['1 1 70%']} ml={[30]} >
        <Heading f={[3,4]} level={3} my={[0]} >{props.title}</Heading>
        <Paragraph f={[1,2]}>{props.description}</Paragraph>
      </Box>
    </Wrapper>
  )
}

/* ------------------------- Component Properties --------------------------- */

/* ---------------------------- Export Package ------------------------------ */
export default ListItemIcon