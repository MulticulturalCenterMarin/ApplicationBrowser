/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled.div``

/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
const Component = props => (
  <Wrapper onMouseOver={()=> props.spotlightChange(props.spotlight, props.library) }>
    {props.children}
  </Wrapper>
)

/* ---------------------------- Export Package ------------------------------ */
export default Component