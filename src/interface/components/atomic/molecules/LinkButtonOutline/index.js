/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Flex, Box, ButtonOutline, NavLink } from 'particles'
import { Grid } from 'grid-styled'
import { color, fontSize, space } from 'styled-system'
import { key } from 'styled-theme'

/* ------------------------- Internal Dependencies -------------------------- */
const borderColor = ({borderColor}) => `${borderColor}`
const bgHover = ({backgroundHover, borderColor}) => backgroundHover ? `${backgroundHover}` : `${borderColor}`
/* --------------------------- Styled Components ---------------------------- */

const Link = styled(ButtonOutline)`
  box-shadow: inset 0 0 0 1px ${borderColor};
  cursor: pointer;
  &:hover {

    background-color: ${key('color', bgHover)};
  }
  &:focus {
    box-shadow: none;
    outline: 0,
  }
  &:active {
    box-shadow: inset 0 0 0 1px;
  }
`

/* ------------------------- Component Properties --------------------------- */
Link.propTypes = {

}
Link.defaultProps = {
  color: 'white',
  borderColor: 'orange',
  to: '/',
}

/* ------------------------------- Component -------------------------------- */
const Component = ({ ...props }) => {
  return (
    <LinkRouter to={props.to}><Link> {props.children} </Link></LinkRouter>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component