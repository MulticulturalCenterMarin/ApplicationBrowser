/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Flex)`
  position: relative;
  transition: margin-top 0.15s ease;
  &:hover {
    margin-top: -5px;
  }
`
/* ------------------------------- Component -------------------------------- */
const CardWrapper = props => (
  <Wrapper {...props} >
    {props.children}
  </Wrapper>
)
/* ------------------------- Component Properties --------------------------- */
CardWrapper.defaultProps = {
  px: 10,
  pb: 20,
}

/* ---------------------------- Export Package ------------------------------ */
export default CardWrapper