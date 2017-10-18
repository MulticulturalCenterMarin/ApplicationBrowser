/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import { Absolute, Flex, Box } from 'rebass'
import { Grid } from 'grid-styled'
import SVGInline from "react-svg-inline"

/* ------------------------- Internal Dependencies -------------------------- */
/*--- CSS ---*/
import { gLight } from 'theme/stylesheet/background/BackgroundGradient'

/*--- Icons ---*/
import OverviewIcon from 'assets/icons/overview.svg'
import IconBuild from 'assets/icons/pt-icon-build.svg'
import IconComparison from 'assets/icons/pt-icon-comparison.svg'
import IconContrast from 'assets/icons/pt-icon-contrast.svg'
import IconCog from 'assets/icons/pt-icon-cog.svg'
import IconCode from 'assets/icons/pt-icon-code.svg'
import IconCodeBlock from 'assets/icons/pt-icon-code-block.svg'
/* --------------------------- Styled Components ---------------------------- */
import Heading from 'atoms/Heading'

const BoxMagic = styled(Box)`
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  &:active {
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`
const FlexMagic = styled(Flex)` 
  &:hover {
    background: #808080;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #394b5b, #808080);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #394b5b, #394b5b, #435865); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    ${gLight}
  }

  &:active {
    background: #808080;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #394b5b, #808080);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #394b5b, #394b5b, #435865); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    ${gLight}
  }
`

/* --------------------------- Styled Components ---------------------------- */

/* ------------------------- Component Properties --------------------------- */


/* ------------------------------- Component -------------------------------- */
const Component = ({ ...props }) => {
  const title = props.title ? props.title : 'Insert Title Please'
  const link = props.link ? props.link : '/'
  const icon = props.icon ? props.icon : IconCog

  return (
    <FlexMagic align={['center']} w={['100%']} pl={[10, 20]} >
        <Box p={['5px']} pr={[15]} w={['40px']} >
          <SVGInline svg={icon} fill={'#FFF'} width={'100%'}  />
        </Box>
        <BoxMagic p={['10px']} w={['calc(100% - 40px)']} >
          <Link to={link}><Heading fontSize={[2,3]} color={'white'} level={5} m={[0]} >{title}</Heading></Link>
        </BoxMagic>
    </FlexMagic>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component