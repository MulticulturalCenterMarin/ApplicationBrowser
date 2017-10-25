/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Absolute } from 'rebass'
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Section = styled.section`
  display: inline-block;
  float: left;
  width: 100%;
`
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Template = ({ ...props }) => {
  return (
    <Section {...props}>
        {props.children}
    </Section>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Template