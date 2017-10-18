/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link } from 'react-router-dom'
import {space, width, color, responsiveStyle} from 'styled-system'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const LinkStyled = styled(Link)`
  ${color}
  ${space}
  ${width}
`

/* ------------------------------- Component -------------------------------- */
const LinkStyledComponent = ({ ...props }) => {
  return (
    <LinkStyled {...props}>
      {props.children}
    </LinkStyled>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default LinkStyledComponent