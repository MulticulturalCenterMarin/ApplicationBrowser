/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Flex)`
  position: relative;
`
/* ------------------------------- Component -------------------------------- */
const ItemContainer = props => (
  <Wrapper {...props} >
    {props.children}
  </Wrapper>
)
/* ------------------------- Component Properties --------------------------- */
ItemContainer.defaultProps = {
}

/* ---------------------------- Export Package ------------------------------ */
export default ItemContainer