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

const Link = styled(Text)`
  position: relative;
  &::after {
    background-color: #FFF;
    bottom: -10px;
    content: "";
    height: 2px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    transition: width 0.32s ease;
    width: 0;
  }

  &:hover {

    &::after {
      width:73.3333%;
    }
  }

  &:active {
    &::after {
      width: 100%;
    }
  }
`

/* ------------------------- Component Properties --------------------------- */
Link.propTypes = {

}
Link.defaultProps = {
  is: 'span',
  color: 'white',
  borderColor: 'orange',
  to: '/',

}

/* ------------------------------- Component -------------------------------- */
const Component = ({ ...props }) => {
  return (
    <LinkRouter to={props.to}><Link {...props}> {props.children} </Link></LinkRouter>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component