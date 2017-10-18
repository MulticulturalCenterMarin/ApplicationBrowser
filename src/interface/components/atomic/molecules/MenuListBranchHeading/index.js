/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import { Absolute, Flex, Box } from 'rebass'
import SVGInline from "react-svg-inline"

/* ------------------------- Internal Dependencies -------------------------- */
/* --------------------------- Styled Components ---------------------------- */
import Heading from 'atoms/Heading'
/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Component = ({ ...props }) => {
  const title = props.title ? props.title : 'Insert Branch Title' 
  const tagline = props.tagline ? props.tagline : null 
  const icon = props.icon ? props.icon : null 
  const link = props.link ? props.link : "/" 
  return (
    <Flex align={['center']}>
         <Box p={['10px']} w={['45px']} >
          {icon ? <SVGInline svg={icon} fill={'#FFF'} width={'100%'}  /> : null }
        </Box>
        <Box p={['10px']} w={['calc(100% - 45px)']} >
          <Link to={link}><Heading fontSize={[3,4]} color={'white'} level={5} display="inline" >{title}</Heading></Link>
          <Link to={link}><Heading fontSize={[1,2]} color={'white'} level={5} display="inline" pl={[10]} >{tagline}</Heading></Link>
        </Box>
    </Flex>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component