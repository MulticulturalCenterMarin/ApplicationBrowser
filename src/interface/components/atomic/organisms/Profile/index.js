/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const ComponentWrapper = styled(Flex)`
  bottom: 0; left: 0; right: 0; top: 0;
  height: 100%;
  position: absolute;
  width: 100%;
`

const LeftRegion = styled(Box)`
  background-color: #455863;
  box-shadow: 0 62px 21px 0 rgba(0, 0, 0, 0.1), 0 13px 20px 0px rgba(0, 0, 0, 0.58);
`
const CenterRegion = styled(Box)`
  background-color: #f2f2f2;
`
const RightRegion = styled(Box)`
  background-color: #1d3f52;
  box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1), 4px 3px 20px 0px rgba(0, 0, 0, 0.58);
`

/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Profile = ({ ...props }) => {
  // const { regions } = props

  return (
    <ComponentWrapper direction={['column','row' ]} >

      <LeftRegion w={['20%']} >
        <h1>Left</h1>
      </LeftRegion>

      <CenterRegion w={['60%']} >
      <h1>Center</h1>
      </CenterRegion>

      <RightRegion w={['20%']}>
        <h1>Right</h1>
      </RightRegion>

    </ComponentWrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Profile