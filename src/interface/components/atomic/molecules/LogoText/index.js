import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Atoms
import Block  from '../../atoms/Block'
import Heading from '../../atoms/Heading'


const logoAlign = ({align}) => `${align}`
// Styled Components
const LogoWrapper = styled.div`
  display: block;
  ${''/* text-align: ${$logoAlign} */}
`

const LogoName = styled.h1`
  display: block;
  float:left;
  text-transform: uppercase;
`

const LogoTagline = styled.h3`
  display: block;
  float:left;
  text-transform: uppercase;
`

const LogoText = (props) => {
  return (
    <LogoWrapper>
      <Heading level={1} palette={'grayscale'} margin={"10px 0 0 0"}>Evergreen</Heading>
      <Heading level={3} palette={'white'} fontSize={"8"} margin={"0"}>Rapid Dashboard Development</Heading>
    </LogoWrapper>
  )
}

LogoText.propTypes = {
  align: PropTypes.string
}

LogoText.defaultProps = {
  align: "center",
}

export default LogoText
